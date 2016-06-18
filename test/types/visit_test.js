var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/visit');
var scrubber = require('../../lib/Scrubber');

describe('visit anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'visit_2_03C7BF8B-04E0-DD9E-9469-96A5604F5340',
    key: 'visit_2_03C7BF8B-04E0-DD9E-9469-96A5604F5340',
    value: { rev: '13-26b0bbf754fa79eff1a3fc6b2a649dbd' },
    doc: {
      _id: 'visit_2_03C7BF8B-04E0-DD9E-9469-96A5604F5340',
      _rev: '13-26b0bbf754fa79eff1a3fc6b2a649dbd',
      data: {
        dischargeInfo: null,
        endDate: '2015-12-29T04:11:00.724Z',
        examiner: 'Dr Nick',
        history: null,
        historySince: null,
        location: null,
        notes: null,
        outPatient: false,
        primaryDiagnosis: 'Fall from in-line roller-skates, initial encounter',
        primaryBillingDiagnosis: null,
        primaryBillingDiagnosisId: null,
        startDate: '2015-12-01T15:53:00.000Z',
        status: 'Discharged',
        visitType: 'Admission',
        lastModified: '2015-12-29T04:11:47.272Z',
        modifiedBy: 'Richard Aristotle',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        vitals: [ 'B9FDB59B-BA3F-40A2-9D42-2A9B0E7270FC' ],
        procedures: [ '398B4F58-152F-1476-8ED1-329C4D85E25F' ],
        patientNotes: [ '35A454A9-544B-A6ED-A2BA-2AF041FD8CAD' ],
        medication: [
          '9187CEE0-13EC-1816-A2A4-95E9797999BF',
          '7B63E873-D056-CCC5-A69C-60064472A16E'
        ],
        labs: [
          'C9274C34-248C-FF7C-9E8B-F3110467C941',
          'EE3063E6-832D-930D-AD4E-D27341709886'
        ],
        imaging: [
          '51AFF85A-69C0-97C1-B22C-716A1BA7B80B',
          '12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7'
        ],
        charges: [],
        modifiedFields: {
          visitType: '2015-12-29T03:53:58.543Z',
          startDate: '2015-12-29T04:11:47.272Z',
          status: '2015-12-29T04:11:47.272Z',
          outPatient: '2015-12-29T03:53:58.543Z',
          primaryDiagnosis: '2015-12-29T03:59:37.312Z',
          examiner: '2015-12-29T04:06:19.274Z',
          endDate: '2015-12-29T04:11:47.272Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'visit_2_03C7BF8B-04E0-DD9E-9469-96A5604F5340',
    key: 'visit_2_03C7BF8B-04E0-DD9E-9469-96A5604F5340',
    value: { rev: '13-26b0bbf754fa79eff1a3fc6b2a649dbd' },
    doc: {
      _id: 'visit_2_03C7BF8B-04E0-DD9E-9469-96A5604F5340',
      _rev: '13-26b0bbf754fa79eff1a3fc6b2a649dbd',
      data: {
        dischargeInfo: null,
        endDate: '2015-12-29T04:11:00.724Z',
        examiner: 'Abraham Abraham',
        history: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        historySince: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        location: 'Springfield Hospital',
        notes: null,
        outPatient: false,
        primaryDiagnosis: 'Fall from in-line roller-skates, initial encounter',
        primaryBillingDiagnosis: null,
        primaryBillingDiagnosisId: null,
        startDate: '2015-12-01T15:53:00.000Z',
        status: 'Discharged',
        visitType: 'Admission',
        lastModified: '2015-12-29T04:11:47.272Z',
        modifiedBy: 'Abraham Abraham',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        vitals: [ 'B9FDB59B-BA3F-40A2-9D42-2A9B0E7270FC' ],
        procedures: [ '398B4F58-152F-1476-8ED1-329C4D85E25F' ],
        patientNotes: [ '35A454A9-544B-A6ED-A2BA-2AF041FD8CAD' ],
        medication: [
          '9187CEE0-13EC-1816-A2A4-95E9797999BF',
          '7B63E873-D056-CCC5-A69C-60064472A16E'
        ],
        labs: [
          'C9274C34-248C-FF7C-9E8B-F3110467C941',
          'EE3063E6-832D-930D-AD4E-D27341709886'
        ],
        imaging: [
          '51AFF85A-69C0-97C1-B22C-716A1BA7B80B',
          '12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7'
        ],
        charges: [],
        modifiedFields: {
          visitType: '2015-12-29T03:53:58.543Z',
          startDate: '2015-12-29T04:11:47.272Z',
          status: '2015-12-29T04:11:47.272Z',
          outPatient: '2015-12-29T03:53:58.543Z',
          primaryDiagnosis: '2015-12-29T03:59:37.312Z',
          examiner: '2015-12-29T04:06:19.274Z',
          endDate: '2015-12-29T04:11:47.272Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});
