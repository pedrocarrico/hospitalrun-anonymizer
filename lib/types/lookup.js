var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  switch (record.id) {
    case 'lookup_2_anesthesiologists': {
      docToUpdate.modifiedBy = scrubber.getFullName();
      docToUpdate.value = [scrubber.getFullName('anesthesiologists')];
      break;
    }
    case 'lookup_2_physician_list': {
      docToUpdate.modifiedBy = scrubber.getFullName();
      docToUpdate.value = [scrubber.getFullName('physicians')];
      break;
    }
    case 'lookup_2_radiologists': {
      docToUpdate.modifiedBy = scrubber.getFullName();
      docToUpdate.value = [scrubber.getFullName('radiologists')];
      break;
    }
    default: {
      return record;
    }
  }

  record.doc.data = docToUpdate;

  return record;
};
