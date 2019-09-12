const KintoneAPIException = require('../../../base/exception/KintoneAPIException');
const Connection = require('../../connection/Connection');
const BulkRequestBaseModule = require('../../../base/module/bulkRequest/BulkRequest');

/**
 * BulkRequest module for WeChat Mini Program
 */
class BulkRequest extends BulkRequestBaseModule {
  /**
   * Constructor function of BulkRequest
   * @param {Object} params
   * @param {Connection} params.connection
   */
  constructor({connection} = {}) {
    if (!(connection instanceof Connection)) {
      throw new Error(`${connection} not an instance of Connection`);
    }
    super({connection});
  }

  /**
   * Execute the BulkRequest and get data which is returned from kintone.
   * @return {Promise}
   */
  execute() {
    return this.connection.request('POST', 'BULK_REQUEST', this.bulkRequests.toJSON())
      .then((result) => {
        return result;
      })
      .catch((err) => {
        if (!err || !err.data || err.data.code) {
          throw new KintoneAPIException(err);
        }
        const errors = err.data.results;
        throw this.bulkRequestException(errors);
      });
  }

  bulkRequestException(errors) {
    const formatErr = JSON.stringify({response: {}});

    const formatErrors = [];
    for (const key in errors) {
      if (errors[key].hasOwnProperty('code')) {
        const errObject = JSON.parse(formatErr);
        errObject.data = errors[key];
        formatErrors.push(new KintoneAPIException(errObject));
      } else {
        formatErrors.push(errors[key]);
      }
    }
    return formatErrors;
  }
}

module.exports = BulkRequest;
