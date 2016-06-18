var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  docToUpdate.modifiedBy = scrubber.getFullName();

  docToUpdate.examiner = scrubber.getFullName('physicians');
  docToUpdate.history = scrubber.getRandomString('paragraphs');
  docToUpdate.historySince = scrubber.getRandomString('paragraphs');
  docToUpdate.location = scrubber.defaultLocation;

  record.doc.data = docToUpdate;

  return record;
};
