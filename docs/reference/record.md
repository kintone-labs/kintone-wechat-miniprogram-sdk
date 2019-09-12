# Record

Provide manipulate functions on records: get, update, delete, update the record status & assignees in the kintone app

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Constructor params.
| params.connection | [Connection](../connection) | yes | The connection module of this SDK.

**Sample code**

<details class="tab-container" open>
<Summary>Init record module</Summary>

<pre class="inline-code">

  const kintone = require('@kintone/kintone-wechat-miniprogram-sdk');
  let kintoneRecord = new kintone.Record({connection});

</pre>

</details>

## Methods

### getRecord(params)

> Retrieves details of 1 record from an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Get record params
| params.app | Integer | yes | The kintone app ID
| params.id | Integer | yes | The record ID in kintone app

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get record</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const id = 'your_record_id';
  kintoneRecord.getRecord({app, id}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### getRecords(params)

> Retrieves details of multiple records from an app using a query string.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Get records params
| params.app | Integer | yes | The kintone app ID
| params.query | String | (optional) | [The query string](https://developer.kintone.io/hc/en-us/articles/213149287#getrecords) that will specify what records will be responded.
| params.fields | Array<String\> | (optional) | List of field codes you want in the response.
| params.totalCount | Boolean | (optional) | If "true", the request will retrieve total count of records match with query conditions.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get records</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const query = 'your_query_string';
  const fields = [
      'your_field_code',
      // another fieldCode
  ]
  const totalCount = 'your_decide_true_or_false';
  kintoneRecord.getRecords({app, query, fields, totalCount}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### getAllRecordsByQuery(params)

>* Retrieves details of all records from an app using a query string.
>* Can't indicate limit and offset of query.
>* Number of records can be retrieved at once is greater than the default limitations

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Get records by query params
| params.app | Integer | yes | The kintone app ID
| params.query | String | (optional) | [The query string](https://developer.kintone.io/hc/en-us/articles/213149287#getrecords) that will specify what records will be responded.
| params.fields | Array<String\> | (optional) | List of field codes you want in the response.
| params.totalCount | Boolean | (optional) | If "true", the request will retrieve total count of records match with query conditions.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get all records by query without limitation</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const query = 'your_query_string';
  const fields = [
      'your_field_code',
      // another fieldCode
  ]
  const totalCount = 'your_decide_true_or_false';
  kintoneRecord.getAllRecordsByQuery({app, query, fields, totalCount}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### getAllRecordsByCursor(params)

>* Retrieves details of all records from an app using a query string.
>* Can't indicate limit and offset of query.
>* Number of records can be retrieved at once is greater than the default limitations

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to create cursor
| params.app | Integer | yes | The kintone app ID
| params.query | String | (optional) | [The query string](https://developer.kintone.io/hc/en-us/articles/213149287#getrecords) that will specify what records will be responded.
| params.fields | Array<String\> | (optional) | List of field codes you want in the response.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get all records by cursor</Summary>

<pre class="inline-code">

  const rcOption = {
    app: 'your_app_id',
    fields: [
      'your_field_code',
      // another fieldCode
    ],
    query: 'your_query_string'
  };
  
  kintoneRecord.getAllRecordsByCursor(rcOption).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### addRecord(params)

>Add one record to an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to add record
| params.app | Integer | yes | The kintone app ID
| params.record | JSONObject | (optional) | The record data to be add to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add record</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = {
      YourFieldCode: {
          value: 'Value Of YourFieldCode'
      },
      // Another fieldcode here
  };
  kintoneRecord.addRecord({app, record}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### addRecords(params)

>Add multiple records to an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to add records
| params.app | Integer | yes | The kintone app ID
| params.records | Array<JSONObject\> | yes | List of records data to be add to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add multi records</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = {
    YourFieldCode: {
      value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
  };
  const records = [
    record,
    // another record
  ];
  kintoneRecord.addRecords({app, records}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>


### addAllRecords(params)

>* Add multiple records to an app.
>* Can insert over 2000 records to kintone app, but can't do rollback.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to add all record
| params.app | Integer | yes | The kintone app ID
| params.records | Array<JSONObject\> | yes | List of records data to be add to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add all records without limitation</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = {
    YourFieldCode: {
      value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
  };
  const records = [
    record
    // another record
  ];
  kintoneRecord.addAllRecords({app, records}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // Ex: User update 6000 records: 
    // Case 1: the error occur in record 0
    // err response
    // {
    //   results: [KintoneAPIException, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}]
    // }
    // Case 2: the error occur in record 4000
    // err response
    // {
    //   results: [
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    AddRecordsResponse,
    //    KintoneAPIException,
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {}
    //  ]
    // }
    console.log(err)
  });

</pre>

</details>

### updateRecordByID(params)

> Updates details of 1 record in an app by specifying its record number.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update record by id
| params.app | Integer | yes | The kintone app ID
| params.id | Integer | yes | The record ID on kintone app
| params.record | JSONObject | yes | The record data to be update in  kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.
| params.revision | Integer | (optional) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update record by ID</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const id = 'your_record_id';
  const record = {
    YourFieldCode: {
      value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
  };
  const revision = 'revision_of_record';
  kintoneRecord.updateRecordByID({app, id, record, revision}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### updateRecordByUpdateKey(params)

Updates details of 1 record in an app by unique key.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update record by update key
| params.app | Integer | yes | The kintone app ID
| params.updateKey | JSONObject | yes | The unique key of the record to be updated. About the format, please look the sample below or [reference](#reference) at the end of this page.
| params.record | JSONObject | yes | The record data will be added to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.
| params.revision | Integer | (optional) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update record by UpdateKey</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const updateKey = {
    field: 'your_fieldcode',
    value: 'your_fieldcode_value'
  };
  const record = {
    YourFieldCode: {
      value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
  };
  const revision = 'revision_of_record';
  kintoneRecord.updateRecordByUpdateKey({app, updateKey, record, revision}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### updateRecords(params)

> Updates details of multiple records in an app, by specifying their record number, or a different unique key.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update records
| params.app | Integer | yes | The kintone app ID
| params.records | Array<JSONObject\> | yes | The record data will be added to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update multi records</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = {
      YourFieldCode: {
          value: 'Value Of YourFieldCode'
      },
      // Another fieldcode here
  };
  const recordUpdate = {
      id: 'your_record_id', // Optional. Required, if updateKey will not be specified.
      updateKey: { // Optional. Required, if id will not be specified.
          field: 'your_field_code',
          value: 'your_field_code_value'
      },
      record: record,
      revision: 'record_revision_number' // Optional
  };
  const records = [
      recordUpdate,
      // Another recordUpdate
  ]
  kintoneRecord.updateRecords({app, records}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### updateAllRecords(params)

>* Updates details of multiple records in an app, by specifying their record number, or a different unique key.
>* Can update over 2000 records to kintone app, but can't do rollback.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update all records
| params.app | Integer | yes | The kintone app ID
| params.records | Array<JSONObject\> | yes | The record data will be added to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update all records without limitation</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = {
      YourFieldCode: {
          value: 'Value Of YourFieldCode'
      },
      // Another fieldcode here
  };
  const recordUpdate = {
      id: 'your_record_id', // Optional. Required, if updateKey will not be specified.
      updateKey: { // Optional. Required, if id will not be specified.
          field: 'your_field_code',
          value: 'your_field_code_value'
      },
      record: record,
      revision: 'record_revision_number' // Optional
  };
  const records = [
      recordUpdate,
      // Another recordUpdate
  ]
  kintoneRecord.updateAllRecords({app, records}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // Ex: User update 6000 records: 
    // Case 1: the error occur in record 0
    // err response
    // {
    //   results: [KintoneAPIException, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}]
    // }
    // Case 2: the error occur in record 4000
    // err response
    // {
    //   results: [
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    UpdateRecordsResponse,
    //    KintoneAPIException,
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {}
    //  ]
    // }
    console.log(err)
  });

</pre>
</details>

### deleteRecords(params)

> Deletes multiple records in an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to delete records
| params.app | Integer | yes | The kintone app ID
| params.ids | Array<Integer\> | yes | The list ids of record will be delete.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete multi record</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const ids = ['your_record_id']
  kintoneRecord.deleteRecords({app, ids}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### deleteRecordsWithRevision(params)

> Deletes multiple records in an app with revision.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to delete record with revision
| params.app | Integer | yes | The kintone app ID
| params.idsWithRevision | JSONObject | yes | JSONObject format by HashTable<`Integer`, `Integer`\> (**key**: `The Id of record`, **value**: `The Revision of record.`)

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete record with revision</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const idsWithRevision = {
      /*your_record_id: revision_of_record*/
  }
  kintoneRecord.deleteRecordsWithRevision({app, idsWithRevision}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### deleteAllRecordsByQuery(params)

>* Deletes all records in an app by query string
>* Can delete over 2000 records, but can't do rollback.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Delete all records by query
| params.app | Integer | yes | The kintone app ID
| params.query | String | (optional) | [The query string](https://developer.kintone.io/hc/en-us/articles/213149287#getrecords) that will specify what records will be responded.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete all records by query string</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const query = 'your_query_string';
  kintoneRecord.deleteAllRecordsByQuery({app, query}).then((rsp) => {
      console.log(rsp);
  })
  .catch((err) => {
      /// Ex: User update 6000 records: 
    // Case 1: the error occur in record 0
    // err response
    // {
    //   results: [KintoneAPIException, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}]
    // }
    // Case 2: the error occur in record 4000
    // err response
    // {
    //   results: [
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    RecordsResponseDelete,
    //    KintoneAPIException,
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {},
    //    {}
    //  ]
    // }
    console.log(err)
  });

</pre>

</details>

### upsertRecord(params)

Insert or update a record to kintone app.
Insert the record if the updateKey doesn't exists and update the record if the updateKey exists.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to upsert record
| params.app | Integer | yes | The kintone app ID
| params.updateKey | JSONObject | yes | The unique key of the record to be updated. About the format, please look the sample below or [reference](#reference) at the end of this page.
| params.record | JSONObject | yes | The record data will be added to kintone app. About the format, please look the sample below or [reference](#reference) at the end of this page.
| params.revision | Integer | (optional) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Upsert record by UpdateKey</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const updateKey = {
    field: 'your_fieldcode',
    value: 'your_fieldcode_value'
  };
  const record = {
    YourFieldCode: {
      value: 'Value Of YourFieldCode'
    },
    // Another fieldcode here
  };
  const revision = 'revision_of_record';
  kintoneRecord.upsertRecord({app, updateKey, record, revision}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### upsertRecords(params)

Insert or update up to 1500 records to kintone app.
If the records are over 1500, It is thrown Error.
Insert the records if the updateKey doesn't exists and update the records if the updateKey exists.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to upsert records
| params.app | Integer | yes | The kintone app ID
| params.records | Array<JSONObject> | yes | The record data Array which has updateKey and record. About the format, please look the sample below or [reference](#reference) at the end of this page.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Upsert records by UpdateKey</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const records = [
    {
      updateKey: {
        field: 'your_fieldcode',
        value: 'your_fieldcode_value_1'
      },
      record: {
        YourFieldCode: {
          value: 'Value Of YourFieldCode 1'
        },
      }
    },
    {
      updateKey: {
        field: 'your_fieldcode',
        value: 'your_fieldcode_value_2'
      },
      record: {
        YourFieldCode: {
          value: 'Value Of YourFieldCode 2'
        },
      }
    },
    {
      updateKey: {
        field: 'your_fieldcode',
        value: 'your_fieldcode_value_3'
      },
      record: {
        YourFieldCode: {
          value: 'Value Of YourFieldCode 3'
        },
      }
    }
  ];
  recordModule.upsertRecords({app, records}).then((resp) => {
    console.log(resp);
  }).catch((e) => {
    /// Ex: User upsert over 100 records: 
    // Case 1: the error occurs on a first record
    // err response
    // {
    //   results: [KintoneAPIException, {},...]
    // }
    // Case 2: the error occurs on the 100th or more record 
    // err response
    // {
    //   results: [{},..., KintoneAPIException, {},...]
    // }
    console.log(err.get());
  });

</pre>

</details>

### updateRecordAssignees(params)

> Update assignees of a record.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update record assignees
| params.app | Integer | yes | The kintone app ID
| params.id | Integer | yes | The record ID of kintone app
| params.assignees | Array<String\> | yes | The user code(s) of the assignee(s)
| params.revision | Integer | (option) | The revision number of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>update record Assignees</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const id = 'your_record_id';
  const assignees = ['your_assignee(s)'];
  const revision = 'revision_of_record';

  kintoneRecord.updateRecordAssignees({app, id, assignees, revision}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### updateRecordStatus(params)

> Updates the Status of a record of an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update record status
| params.app | Integer | yes | The kintone app ID.
| params.id | Integer | yes | The record ID on kintone app.
| params.action | String | yes | The Action name will be run.
| params.assignee | String | (Conditionally required) | The next Assignee. Specify the Assignee's log in name.</br>Required, if the "Assignee List" of the current status is set to "User chooses one assignee from the list to take action", and a selectable assignee exists.
| params.revision | Integer | (optional) | The revision of record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update record status</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const id = 'your_record_id';
  const action = 'your_action_name';
  const assignee = 'your_assignee';
  const revision = 'revision_of_record';

  kintoneRecord.updateRecordStatus({app, id, action, assignee, revision}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### updateRecordsStatus(params)

> Updates the Status of multiple records of an app.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to update records status
| params.app | Integer | yes | The kintone app ID
| params.records | Array<JSONObject\> | yes | The recod status data. See belowsample codee or [reference](#reference) at the end of this page to know format.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Update multi record status</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const recordStatusUpdateItem = {
      id: 'your_record_id',
      action: 'your_action_name',
      assignee: 'your_assignee',
      revision: 'your_record_revision'
  }
  const records = [
      recordStatusUpdateItem,
      // another data like recordStatusUpdateItem
  ];
  kintoneRecord.updateRecordsStatus({app, records}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### getComments(params)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to get comments
| params.app | Integer | yes | The kintone app ID
| params.record | Integer | yes | The ID of record
| params.order | String | (optional) | The sort order of the Comment ID. Please select **asc** or **desc**
| params.offset | Integer | (optional) | The number of first comments will be ignored.
| params.limit | Integer | (optional) | The number of records to retrieve.

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Get comments</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = 'your_record_id';
  const order = 'your_order_type'; // asc or desc
  const offset = 'your_offset_number';
  const limit = 'your_limit number';
  kintoneRecord.getComments({app, record, order, offset, limit}).then((rsp) => {
    console.log(rsp);
  }).catch((err) => {
    // This SDK return err with KintoneAPIException
    console.log(err.get());
  });

</pre>

</details>

### addComment(params)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to add comment
| params.app | Integer | yes | The kintone app ID |
| params.record | Integer | yes | The ID of record |
| params.comment | JSONObject | yes | About the format, please look the sample below or [reference](#reference) at the end of this page.|

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Add comment</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = 'your_record_id';
  const comment = {
    text: 'your_comment_content',
    mentions: [
      {
        code: 'your_member_code',
        type: 'your_member_type' // either `USER` or `GROUP` or `ORGANIZATION`
      },
      // another mention here
    ]
  };
  kintoneRecord.addComment({app, record, comment}).then((rsp) => {
      console.log(rsp);
    }).catch((err) => {
      // This SDK return err with KintoneAPIException
      console.log(err.get());
    });

</pre>

</details>

### deleteComment(params)

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
| params | Object | yes | Params to delete comment
| params.app | Integer | yes | The kintone app ID
| params.record | Integer | yes | The record ID on kintone app
| params.comment | Integer | yes | The comment ID on kintone record

**Return**

Promise

**Sample code**

<details class="tab-container" open>
<Summary>Delete comment</Summary>

<pre class="inline-code">

  const app = 'your_app_id';
  const record = 'your_record_id';
  const comment = 'your_comment_id';
  kintoneRecord.deleteComment({app, record, comment}).then((rsp) => {
      console.log(rsp);
    }).catch((err) => {
      // This SDK return err with KintoneAPIException
      console.log(err.get());
    });
    
</pre>

</details>

## Reference

- [Get Record](https://developer.kintone.io/hc/en-us/articles/213149287/) `on developer network`
- [Add Record](https://developer.kintone.io/hc/en-us/articles/212494628/)`on developer network`
- [Update Record](https://developer.kintone.io/hc/en-us/articles/213149027/)`on developer network`
- [Delete Record](https://developer.kintone.io/hc/en-us/articles/212494558/)`on developer network`
- [Get Comments](https://developer.kintone.io/hc/en-us/articles/219105188)`on developer network`
- [Add Comment](https://developer.kintone.io/hc/en-us/articles/219501367)`on developer network`
- [Delete Comment](https://developer.kintone.io/hc/en-us/articles/219562607)`on developer network`
- [Update Record Status](https://developer.kintone.io/hc/en-us/articles/213149747)`on developer network`
- [Update Record Assignees](https://developer.kintone.io/hc/en-us/articles/219563427)`on developer network`