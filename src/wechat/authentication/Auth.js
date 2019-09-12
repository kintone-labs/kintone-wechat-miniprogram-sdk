const BaseAuth = require('../../base/authentication/Auth');
const AUTH_CONST = require('../../base/authentication/constant');
const KintoneHTTPHeader = require('../../base/model/http/HTTPHeader');
const Buffer = require('buffer/').Buffer;

/**
 * Authentication module for WeChat Mini Program
 */
class Auth extends BaseAuth {
  /**
   * createHeaderCredentials
   * @return {Array<HTTPHeader>}
   */
  createHeaderCredentials() {
    const headerCredentials = [];
    if (this.apiToken) {
      headerCredentials.push(new KintoneHTTPHeader(AUTH_CONST.HEADER_KEY_AUTH_APITOKEN, this.apiToken));
    }
    if (this.basicAuth) {
      headerCredentials.push(
        new KintoneHTTPHeader(
          AUTH_CONST.HEADER_KEY_AUTH_BASIC,
          'Basic ' + (Buffer.from(this.basicAuth.getUsername() + ':' + this.basicAuth.getPassword()).toString('base64'))
        )
      );
    }
    if (this.passwordAuth) {
      headerCredentials.push(
        new KintoneHTTPHeader(
          AUTH_CONST.HEADER_KEY_AUTH_PASSWORD,
          Buffer.from(this.passwordAuth.getUsername() + ':' + this.passwordAuth.getPassword()).toString('base64')
        )
      );
    }
    return headerCredentials;
  }
}

module.exports = Auth;
