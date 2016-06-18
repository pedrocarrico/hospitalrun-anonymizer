var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  docToUpdate.modifiedBy = scrubber.getFullName();

  docToUpdate.content = scrubber.getRandomString('paragraphs');
  docToUpdate.createdBy = scrubber.getFullName('physicians');

  record.doc.data = docToUpdate;

  return record;
};
