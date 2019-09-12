# Connection

[Connection](#) module is used to connect to kintone Rest API

> This module execute requests using [wx.request(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **domain, auth, guestSpaceID** properties
| params.domain | String | yes | The domain that is able to authenticate on kintone app
| params.auth | [Auth](../authentication) | yes | The authentication object.
| params.guestSpaceID | Integer | optional | The guest space id. <br> Use this parameter to connect to kintone guest space.

**Sample code**

<details class="tab-container" open>
<Summary>Init Connection module</Summary>

<pre class="inline-code">

    const kintone = require('@kintone/kintone-wechat-miniprogram-sdk');

    // Define Authentication object
    let kintoneAuth = new kintone.Auth();
    let paramsAuth = {
        username: 'your_user_name',
        password: 'your_password',
    }
    kintoneAuth.setPasswordAuth(paramsAuth);

    let paramsConnection = {
        domain: 'your.FQDN.tld',
        auth: kintoneAuth
    }
    let kintoneConnection = new kintone.Connection(paramsConnection);

    // Define connection that included guest space
    let paramsConnection = {
        domain: 'your.FQDN.tld',
        auth: kintoneAuth,
        guestSpaceID: 'guestSpaceID'
    }
    let kintoneConnectionWithGuestSpaceDemo = new kintone.Connection(paramsConnection);

</pre>

</details>

## Methods

### setHeader(params)

> Set new header of the [Connection](./#)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **key, value** properties
| params.key | String | yes | The header's `key` name
| params.value | String | yes | The header's value of `key`

**Return**

[Connection](./#)

**Sample code**

<details class="tab-container" open>
<Summary>Set header of the Connection</Summary>

<pre class="inline-code">

    let params = {
        key: 'your_header_key',
        value: 'your_header_value'
    }
    kintoneConnection.setHeader(params);

</pre>

</details>

### addRequestOption(params)

> Add parameter that supported by [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) <br>
> Only "responseType" and "complete" can be added.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **key, value** properties
| params.key | String | yes | The option's `key` name
| params.value | String | yes | The option's value of `key`

**Return**

[Connection](./#)

**Sample code**

<details class="tab-container" open>
<Summary>Add request option of the Connection</Summary>

<pre class="inline-code">

    let params = {
        key: 'complete',
        value: function(){console.log('hello')}
    }
    kintoneConnection.addRequestOption(params);

</pre>

</details>
