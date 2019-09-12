const CONNECTION_CONST = require('./constant');
const BaseConnection = require('../../base/connection/Connection');

class Connection extends BaseConnection {
  /**
   * @param {Object} params
   * @param {String} params.domain
   * @param {Auth} params.auth
   * @param {Number} params.guestSpaceID
   */
  constructor({domain, auth, guestSpaceID} = {}) {
    super({domain, auth, guestSpaceID});
    this.requestTask = '';
    this.downloadTask = '';
    this.uploadTask = '';
  }

  /**
   * request to URL
   * @param {String} methodName
   * @param {String} restAPIName
   * @param {Object} body
   * @return {Promise}
   */
  request(methodName, restAPIName, body) {
    const method = String(methodName).toUpperCase();
    const uri = this.getUri(restAPIName);
    // Set Header
    const headersRequest = {};

    // set header with credentials
    this.auth.createHeaderCredentials().forEach((httpHeaderObj) => {
      headersRequest[httpHeaderObj.getKey()] = httpHeaderObj.getValue();
    });

    this.headers.forEach((httpHeaderObj) => {
      const headerKey = httpHeaderObj.getKey();
      if (headerKey !== CONNECTION_CONST.BASE.USER_AGENT) {
        headersRequest[headerKey] = httpHeaderObj.getValue();
      }
    });

    // Set request options
    const requestOptions = this.options;
    requestOptions.method = method;
    requestOptions.url = uri;
    requestOptions.dataType = CONNECTION_CONST.REQUEST.DATATYPE_JSON;
    if (!requestOptions.hasOwnProperty(CONNECTION_CONST.REQUEST.RESPONSE_TYPE)
      || requestOptions[CONNECTION_CONST.REQUEST.RESPONSE_TYPE] !== CONNECTION_CONST.REQUEST.RESPONSE_TYPE_ARRAYBUFFER) {
      requestOptions[CONNECTION_CONST.REQUEST.RESPONSE_TYPE] = CONNECTION_CONST.REQUEST.RESPONSE_TYPE_TEXT;
    }
    if (requestOptions.method === 'GET') {
      delete requestOptions.data;
      if (this.isExceedLimitUri(uri, body)) {
        requestOptions.url += '?' + this.serializeParams({_method: method});
        requestOptions.method = 'POST';
        headersRequest[CONNECTION_CONST.BASE.X_HTTP_METHOD_OVERRIDE] = String(methodName).toUpperCase();
        requestOptions.data = body;
      } else {
        requestOptions.url += '?' + this.serializeParams(body);
      }
    } else {
      requestOptions.data = body;
    }

    if (!headersRequest.hasOwnProperty(CONNECTION_CONST.BASE.CONTENT_TYPE)) {
      // Set content-type to "application/html" if using GET method
      if (requestOptions.method === 'GET') {
        headersRequest[CONNECTION_CONST.BASE.CONTENT_TYPE] = CONNECTION_CONST.BASE.CONTENT_TYPE_HTML;
      } else {
        headersRequest[CONNECTION_CONST.BASE.CONTENT_TYPE] = CONNECTION_CONST.BASE.CONTENT_TYPE_JSON;
      }
    }
    requestOptions.header = headersRequest;

    // Execute request
    return new Promise((resolve, reject) => {
      requestOptions.success = res => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      };
      requestOptions.fail = err => {
        reject(err);
      };

      this.requestTask = wx.request(requestOptions);
    });
  }

  /**
   * Download file from kintone
   * @param {String} body
   * @return {Promise}
   */
  download(body) {
    // Set Header
    const headersRequest = {};

    // set header with credentials
    this.auth.createHeaderCredentials().forEach((httpHeaderObj) => {
      headersRequest[httpHeaderObj.getKey()] = httpHeaderObj.getValue();
    });

    this.headers.forEach((httpHeaderObj) => {
      const headerKey = httpHeaderObj.getKey();
      if (headerKey !== CONNECTION_CONST.BASE.USER_AGENT) {
        headersRequest[headerKey] = httpHeaderObj.getValue();
      }
    });

    // Execute request
    return new Promise((resolve, reject) => {
      // Set request options
      const requestOptions = this.options;
      requestOptions.url = this.getUri('FILE') + '?' + this.serializeParams(body);
      requestOptions.header = headersRequest;
      delete requestOptions.filePath;
      requestOptions.success = res => {
        if (res.statusCode === 200) {
          resolve(res.tempFilePath);
        } else {
          res.errMsg = 'Download file unsuccessfully';
          reject(res);
        }
      };
      requestOptions.fail = err => {
        reject(err);
      };

      this.downloadTask = wx.downloadFile(requestOptions);
    });
  }

  /**
   * upload file to kintone
   * @param {String} filePath
   * @return {Promise}
   */
  upload(filePath) {
    // Set Header
    const headersRequest = {};

    // set header with credentials
    this.auth.createHeaderCredentials().forEach((httpHeaderObj) => {
      headersRequest[httpHeaderObj.getKey()] = httpHeaderObj.getValue();
    });

    this.headers.forEach((httpHeaderObj) => {
      const headerKey = httpHeaderObj.getKey();
      if (headerKey !== CONNECTION_CONST.BASE.USER_AGENT) {
        headersRequest[headerKey] = httpHeaderObj.getValue();
      }
    });

    // Execute request
    return new Promise((resolve, reject) => {
      // Set request options
      const requestOptions = this.options;
      requestOptions.url = this.getUri('FILE');
      requestOptions.filePath = filePath;
      requestOptions.name = 'file';
      requestOptions.header = headersRequest;
      requestOptions.success = res => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(res.data));
        } else {
          reject(res);
        }
      };
      requestOptions.fail = err => {
        reject(err);
      };

      this.uploadTask = wx.uploadFile(requestOptions);
    });
  }
}

module.exports = Connection;