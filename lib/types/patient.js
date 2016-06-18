var scrubber = require('../Scrubber');

module.exports = function(record) {
  var docToUpdate = record.doc.data;

  docToUpdate.modifiedBy = scrubber.getFullName();

  docToUpdate.country = 'United States';
  delete docToUpdate.additionalContacts;
  delete docToUpdate.address;
  delete docToUpdate.address2;
  delete docToUpdate.address3;
  delete docToUpdate.address4;
  delete docToUpdate.clinic;
  delete docToUpdate.economicClassification;
  delete docToUpdate.email;
  delete docToUpdate.expenses;
  delete docToUpdate.externalPatientId;
  delete docToUpdate.familySupport1;
  delete docToUpdate.familySupport2;
  delete docToUpdate.familySupport3;
  delete docToUpdate.familySupport4;
  delete docToUpdate.familySupport5;
  if (docToUpdate.friendlyId) {
    docToUpdate.friendlyId = docToUpdate.friendlyId.replace('TCH ','');
  }
  delete docToUpdate.familyInfo;
  docToUpdate.firstName = scrubber.getRandomString('names');
  docToUpdate.history = scrubber.getRandomString('paragraphs');
  delete docToUpdate.insurance;
  docToUpdate.lastName = scrubber.getRandomString('names');
  delete docToUpdate.livingArrangement;
  if (docToUpdate.middleName && docToUpdate.middleName !== '') {
    docToUpdate.middleName = scrubber.getRandomString('names');
  }
  delete docToUpdate.notes;
  delete docToUpdate.otherIncome;
  delete docToUpdate.payments;
  docToUpdate.parent = scrubber.getRandomString('names') + ' ' + docToUpdate.lastName;
  delete docToUpdate.phone;
  delete docToUpdate.placeOfBirth;
  delete docToUpdate.referredBy;
  delete docToUpdate.socialActionTaken;
  delete docToUpdate.socialRecommendation;

  record.doc.data = docToUpdate;

  return record;
};
