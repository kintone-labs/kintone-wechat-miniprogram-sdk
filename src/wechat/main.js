/**
 * kintone api - WeChat Mini Program client
 * kintone-wechat-miniprogram-sdk
 */

const {App, Record, KintoneAPIException, RecordCursor} = require('../base/main');

module.exports = {
  Connection: require('./connection/Connection'),
  Auth: require('./authentication/Auth'),
  App,
  Record,
  BulkRequest: require('./module/bulkRequest/BulkRequest'),
  KintoneAPIException,
  File: require('./module/file/File'),
  RecordCursor
};
