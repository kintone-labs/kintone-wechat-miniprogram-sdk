const KintoneErrorResponseModel = require('../model/exception/ErrorResponse');
const KintoneAPIExceptionModel = require('../model/exception/KintoneAPIException');
const Buffer = require('buffer/').Buffer;

/**
 * kintone Exception Module
 */
class KintoneAPIException {
  /**
     * The constructor ofc  KintoneAPIException functions
     * @param {Error} errors
     */
  constructor(errors) {
    let errorResponse;
    this.errorRaw = errors;
    if (!errors.hasOwnProperty('data')) {
      errorResponse = new KintoneErrorResponseModel(0, null, errors.errMsg || errors.message, errors);
    } else {
      const dataResponse = errors.data;
      errorResponse = this.getErrorResponse(dataResponse);

      if (Buffer.isBuffer(dataResponse)) {
        const stringError = errors.data.toString();
        errorResponse = this.getErrorResponse(stringError);
      } else if (dataResponse instanceof ArrayBuffer) {
        const stringError = Buffer.from(new Uint8Array(dataResponse)).toString();
        errorResponse = this.getErrorResponse(stringError);
      }
    }
    if (!(errorResponse instanceof KintoneErrorResponseModel)) {
      errorResponse = new KintoneErrorResponseModel(0, null, errors.errMsg, errorResponse);
    }
    const statusCode = errors.statusCode ? (errors.statusCode || 0) : 0;
    this.error = new KintoneAPIExceptionModel(statusCode, errorResponse);
  }
  /**
     * get origin errors
     * @return {Error}
     */
  getAll() {
    return this.errorRaw;
  }
  /**
     * Show origin error
     */
  throwAll() {
    throw this.getAll();
  }
  /**
     * Show Error
     * @return {Error}
     */
  get() {
    return this.error.getErrorResponse().toJSON();
  }
  /**
     * Show Error
     */
  throw() {
    const errorString =
`HttpErrorCode: ${this.error.getHttpErrorCode()}
Details:
  + ID: ${this.error.getErrorResponse().getID() || '(none)'}
  + Code: ${this.error.getErrorResponse().getCode() || '(none)'}
  + Message: ${this.error.getErrorResponse().getMessage() || '(none)'}
  + Errors:` + (JSON.stringify(this.error.getErrorResponse().getErrors() || '(none)'));

    throw new Error(errorString);
  }
  /**
     * getErrorResponse
     * @param {String} bodyResponse
     * @return {KintoneErrorResponseModel}
     */
  getErrorResponse(bodyResponse) {
    let response = null;
    if (typeof bodyResponse === 'object') {
      response = bodyResponse;
    } else {
      // Validate isJSON
      try {
        response = JSON.parse(bodyResponse);
      } catch (error) {
        // console.log(error)
      }
    }
    // Detect the error response from bulkrequest.
    // if (response !== null && response.hasOwnProperty('results')) {
    //     for (let index = 0; index < response.results.length; index++) {
    //         if (response.results[index].hasOwnProperty('code')) {
    //             response = response.results[index];
    //             break;
    //         }
    //     }
    // }
    return response && response.id ? new KintoneErrorResponseModel(
      response.id,
      response.code,
      response.message,
      response.errors) : response;
  }
}

module.exports = KintoneAPIException;
