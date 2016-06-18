var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  docToUpdate.modifiedBy = scrubber.getFullName();

  docToUpdate.radiologist = scrubber.getFullName('radiologists');
  docToUpdate.notes = scrubber.getRandomString('paragraphs');
  docToUpdate.result = scrubber.getRandomString('paragraphs');
  docToUpdate.requestedBy = scrubber.getFullName('physicians');

  record.doc.data = docToUpdate;

  return record;
};
