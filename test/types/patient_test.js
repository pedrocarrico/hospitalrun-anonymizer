var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/patient');
var scrubber = require('../../lib/Scrubber');

describe('patient anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'patient_2_C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
    key: 'patient_2_C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
    value: { rev: '4-1c58ffef18d0e8a6cf67f5af11541f71' },
    doc: {
      _id: 'patient_2_C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
      _rev: '4-1c58ffef18d0e8a6cf67f5af11541f71',
      data: {
        admitted: true,
        address: null,
        address2: null,
        address3: null,
        address4: null,
        bloodType: null,
        clinic: null,
        country: null,
        dateOfBirth: '2013-08-06T05:00:00.000Z',
        economicClassification: null,
        email: null,
        externalPatientId: null,
        familySupport1: null,
        familySupport2: null,
        familySupport3: null,
        familySupport4: null,
        familySupport5: null,
        friendlyId: 'P00001',
        firstName: 'Joe',
        sex: 'Male',
        history: null,
        insurance: null,
        lastName: 'Bagadonuts',
        livingArrangement: null,
        middleName: '',
        notes: null,
        otherIncome: null,
        patientType: null,
        parent: null,
        phone: null,
        placeOfBirth: null,
        referredDate: null,
        referredBy: null,
        religion: null,
        socialActionTaken: null,
        socialRecommendation: null,
        status: 'Scheduled for surgery',
        lastModified: '2015-12-29T03:53:58.574Z',
        modifiedBy: 'Gloria Mann',
        paymentProfile: null,
        payments: [],
        modifiedFields: {
          friendlyId: '2015-12-29T03:51:02.781Z',
          firstName: '2015-12-29T03:51:02.781Z',
          middleName: '2015-12-29T03:51:02.781Z',
          lastName: '2015-12-29T03:51:02.781Z',
          gender: '2015-12-29T03:51:02.781Z',
          dateOfBirth: '2015-12-29T03:51:02.781Z',
          status: '2015-12-29T03:53:17.032Z',
          admitted: '2015-12-29T03:53:58.574Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'patient_2_C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
    key: 'patient_2_C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
    value: { rev: '4-1c58ffef18d0e8a6cf67f5af11541f71' },
    doc: {
      _id: 'patient_2_C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
      _rev: '4-1c58ffef18d0e8a6cf67f5af11541f71',
      data: {
        admitted: true,
        bloodType: null,
        country: 'United States',
        dateOfBirth: '2013-08-06T05:00:00.000Z',
        friendlyId: 'P00001',
        firstName: 'Abraham',
        sex: 'Male',
        history: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        lastName: 'Abraham',
        middleName: '',
        patientType: null,
        parent: 'Abraham Abraham',
        referredDate: null,
        religion: null,
        status: 'Scheduled for surgery',
        lastModified: '2015-12-29T03:53:58.574Z',
        modifiedBy: 'Abraham Abraham',
        paymentProfile: null,
        modifiedFields: {
          friendlyId: '2015-12-29T03:51:02.781Z',
          firstName: '2015-12-29T03:51:02.781Z',
          middleName: '2015-12-29T03:51:02.781Z',
          lastName: '2015-12-29T03:51:02.781Z',
          gender: '2015-12-29T03:51:02.781Z',
          dateOfBirth: '2015-12-29T03:51:02.781Z',
          status: '2015-12-29T03:53:17.032Z',
          admitted: '2015-12-29T03:53:58.574Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});