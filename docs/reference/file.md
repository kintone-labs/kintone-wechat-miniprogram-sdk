# File

Download and upload file via kintone Rest API.

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **connection** property
| params.connection | [Connection](../connection) | yes | The connection module of this SDK.

**Sample code**

<details class="tab-container" open>
<Summary>Init app sample</Summary>

<pre class="inline-code">

  const kintone = require('@kintone/kintone-wechat-miniprogram-sdk');
  let kintoneFile = new kintone.File({connection});

</pre>

</details>

## Methods

### upload(params)

> Upload file into kintone

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **filePath** properties
| params.filePath | String | yes | The path of file.<br>Refer to the parameter "filePath" of [wx.uploadFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Upload file sample</Summary>

<strong class="tab-name">Source code</strong>

<pre class="inline-code">

    wx.chooseImage({
        success(res) {
            const tempFilePaths = res.tempFilePaths;

            kintoneFile.upload({filePath: tempFilePaths[0]}).then((rsp) => {
                console.log(rsp);
            }).catch((err) => {
                // This SDK return err with KintoneAPIException
                console.log(err.get());
            });
        }
    });

</pre>

<strong class="tab-name">Response</strong>

<pre class="inline-code">

    {
        fileKey: "{fileKey}"
    }

</pre>

</details>

### download(params)

> Download file from kintone to the [temporary file path](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/file-system.html)

**Parameter **

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | The parameters that include **fileKey** properties
| params.fileKey | String | yes | The file key of the uploaded file on kintone.<br>This is the value that is set on the Attachment field in the response data returned when using the Get Record API.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get apps sample</Summary>

<strong class="tab-name">Source code</strong>

<pre class="inline-code">

    let fileKey = 'your_file_Key';
    kintoneFile.download({fileKey}).then(rsp => {
        console.log(rsp);
    }).catch((err) => {
        // This SDK return err with KintoneAPIException
        console.log(err.get());
    });

</pre>

<strong class="tab-name">Response</strong>

<pre class="inline-code">

    {
        tempFilePath: "{tempFilePath}"
    }

</pre>

</details>

## Reference

- [Upload File](https://developer.kintone.io/hc/en-us/articles/212494448-Upload-File)`on developer network`
- [Download File](https://developer.kintone.io/hc/en-us/articles/212494468-Download-File)`on developer network`
- [wx.downloadFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)<br>
- [wx.uploadFile(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)