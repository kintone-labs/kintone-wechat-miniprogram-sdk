const KintoneAPIException = require('../../../base/exception/KintoneAPIException');
const Connection = require('../../connection/Connection');
const FileBaseModule = require('../../../base/module/file/File');

/**
 * File module for WeChat Mini Program
 */
class File extends FileBaseModule {
  /**
   * The constructor for this module
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
   * Download file from kintone to the temporary file path
   * @param {Object} params
   * @param {String} params.fileKey
   * @return {Promise}
   */
  download({fileKey}) {
    return super.download({fileKey}).then((tempFilePath) => {
      return {tempFilePath: tempFilePath};
    }).catch((err) => {
      throw new KintoneAPIException(err);
    });
  }

  /**
   * Upload file from local to kintone environment
   * @param {Object} params
   * @param {String} params.filePath
   * @return {Promise}
   */
  upload({filePath}) {
    return super.upload({fileName: filePath, fileContent: ''}).then((data) => {
      return data;
    }).catch((err) => {
      throw new KintoneAPIException(err);
    });
  }
}

module.exports = File;
