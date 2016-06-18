var scrubber = require('../Scrubber');

module.exports = function(record) {
  record.doc._deleted = true;

  return record;
};
