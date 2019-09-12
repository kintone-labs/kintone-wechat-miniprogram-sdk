# Bulk Request

The Bulk Request API allows multiple API requests to run on multiple kintone apps.<br>
The below API can be used with the Bulk Request API:

- Add Record
- Add Records
- Update Record
- Update Records
- Delete Records
- Update Status
- Update Statuses
- Update Assignees

## Constructor

### **Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | (optional) | Constructor params.
| params.connection | [Connection](../connection) | yes | The connection module of this SDK.

### **Sample code**

<details class="tab-container" open>
<Summary>Init bulk request module</Summary>

<pre class="inline-code">

  const kintone = require('@kintone/kintone-wechat-miniprogram-sdk');
  let kintoneBulkRequest = new kintone.BulkRequest({connection});

</pre>

</details>

## Methods

> All below methods (excluded `execute()` method) will add request to queue, you must execute the `execute()` function to get result of BulkRequest.

### addRecord({app, record})

**Parameter**

See at [Record - addRecord](../record/#addrecordparams)

**Return**

[BulkRequest](#bulkrequest)

### addRecords({app, records})

**Parameter**

See at [Record - addRecords](../record/#addrecordsparams)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordByID({app, id, record, revision})

**Parameter**

See at [Record - updateRecordByID](../record/#updaterecordbyidparams)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordByUpdateKey({app, updateKey, record, revision})

**Parameter**

See at [Record - updateRecordByUpdateKey](../record/#updaterecordbyupdatekeyparams)

**Return**

[BulkRequest](#bulkrequest)

### updateRecords({app, records})

**Parameter**

See at [Record - updateRecords](../record/#updaterecordsparams)

**Return**

[BulkRequest](#bulkrequest)

### deleteRecords({app, ids})

**Parameter**

See at [Record - deleteRecords](../record/#deleterecordsparams)

**Return**

[BulkRequest](#bulkrequest)

### deleteRecordsWithRevision({app, idsWithRevision})

**Parameter**

See at [Record - deleteRecordsWithRevision](../record/#deleterecordswithrevisionparams)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordAssignees({app, id, assignees, revision})

**Parameter**

See at [Record - updateRecordAssignees](../record#updaterecordassigneesparams)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordStatus({app, id, action, assignee, revision})

**Parameter**

See at [Record - updateRecordStatus](../record/#updaterecordstatusparams)

**Return**

[BulkRequest](#bulkrequest)

### updateRecordsStatus({app, records})

**Parameter**

See at [Record - updateRecordsStatus](../record/#updaterecordsstatusparams)

**Return**

[BulkRequest](#bulkrequest)

### execute()

> Execute the bulk request and get data response

**Parameter**

(none)

**Return**

[Promise]

**Sample code**

<details class="tab-container" open>
<Summary>Execute bulk request</Summary>

<pre class="inline-code">

  const responseBulkRequest = kintoneBulkRequest
    .addRecord({/*[Args]*/})
    .addRecords({/*[Args]*/})
    .updateRecords({/*[Args]*/})
    .deleteRecords({/*[Args]*/})
    .execute();

  responseBulkRequest.then((resp) => {
    console.log(resp);
  }).catch((errors) => {
    // write error to console
    console.log(errors);
    errors.forEach((err) => {
      if (typeof err.get === 'function') {
        console.log(err.get());
      }
    });
  });

</pre>

</details>

## Reference

- [Get Record](https://developer.kintone.io/hc/en-us/articles/213149287/) `on developer network`