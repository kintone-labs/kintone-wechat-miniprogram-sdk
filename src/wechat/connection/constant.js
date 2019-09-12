/**
 * kintone api - WeChat client
 * Connection constants
 */

const constant = function() {
  return {
    BASE: {
      USER_AGENT: 'User-Agent',
      CONTENT_TYPE: 'content-type',
      CONTENT_TYPE_HTML: 'application/html',
      CONTENT_TYPE_JSON: 'application/json',
      X_HTTP_METHOD_OVERRIDE: 'X-HTTP-Method-Override',
    },
    REQUEST: {
      DATATYPE_JSON: 'json',
      RESPONSE_TYPE: 'responseType',
      RESPONSE_TYPE_TEXT: 'text',
      RESPONSE_TYPE_ARRAYBUFFER: 'arraybuffer',
    }
  };
};

module.exports = constant();
