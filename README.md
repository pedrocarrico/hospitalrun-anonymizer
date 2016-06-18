# HospitalRun anonymizer

HospitalRun anonymizer function based on [this](https://github.com/HospitalRun/hospitalrun-server/blob/master/utils/scrub-db.js) implementation.

## Usage

```javascript
var anonymizer = require('hospitalrun-anonymizer');

var anonymizedRecord = anonymizer(databaseRecord);
```
