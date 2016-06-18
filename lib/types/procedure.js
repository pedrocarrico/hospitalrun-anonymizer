var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  docToUpdate.modifiedBy = scrubber.getFullName();

  docToUpdate.anesthesiologist = scrubber.getFullName('anesthesiologists');
  docToUpdate.assistant = scrubber.getFullName('physicians');
  docToUpdate.location =  'OR Room 1';
  docToUpdate.notes = scrubber.getRandomString('paragraphs');
  docToUpdate.physician  = scrubber.getFullName('physicians');

  record.doc.data = docToUpdate;

  return record;
};
