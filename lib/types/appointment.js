var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  docToUpdate.modifiedBy = scrubber.getFullName();
  docToUpdate.provider = scrubber.getFullName('physicians');
  docToUpdate.location = scrubber.defaultLocation;
  docToUpdate.notes = scrubber.getRandomString('paragraphs');

  record.doc.data = docToUpdate;

  return record;
};
