# Authentication

Authentication module will be used by [Connection](../connection).
This module allows authenticating with the Kintone app by password authenticator or API token authenticator. This module is also supported the basic authenticator.

!!! warning

    - If both the Token and Password Authentication are specified, the Token Authentication will be ignored and the Password authentication will be used.

## Constructor

**Parameter**

(none)

**Sample code**

<details class="tab-container" open>
<Summary>Init authentication module</Summary>

<pre class="inline-code">

    const kintone = require('@kintone/kintone-wechat-miniprogram-sdk');
    let kintoneAuth = new kintone.Auth();

</pre>

</details>

## Methods

### setPasswordAuth(params)

> Set password authentication for Authentication module.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **username, password** properties
| params.username | String | yes | The username that is able to authenticate on kintone app
| params.password | String | yes | The password that is able to authenticate on kintone app

**Return**

[Auth](../authentication)

**Sample code**

<details class="tab-container" open>
<Summary>Set password authentication</Summary>

<pre class="inline-code">

    let passwordAuth = {
        username = 'your_user_name',
        password = 'your_password'
    }
    kintoneAuth.setPasswordAuth(passwordAuth);

</pre>

</details>

### setApiToken(params)

> Set Api Token for Authentication module.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that includes **apiToken** property 
| params.apiToken | String | yes | The apiToken that is able to authenticate on kintone app

**Return**

[Auth](../authentication)


<details class="tab-container" open>
<Summary>Set APIToken authentication</Summary>

<pre class="inline-code">

    let params = {
        apiToken: 'your_token'
    }
    kintoneAuth.setApiToken(params);

</pre>

</details>

### setBasicAuth(params)

> Set Basic authentication for Authentication module.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that includes **username, password** properties  
| params.username | String | yes | The username that is able to authenticate on kintone app
| params.password | String | yes | The password that is able to authenticate on kintone app

**Return**

[Auth](../authentication)

**Sample code**

<details class="tab-container" open>
<Summary>Set basic authentication</Summary>

<pre class="inline-code">

    let basicAuth = {
        username = 'your_user_name',
        password = 'your_password'
    }
    kintoneAuth.setBasicAuth(basicAuth);
    
</pre>

</details>
