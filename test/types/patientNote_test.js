var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/patientNote');
var scrubber = require('../../lib/Scrubber');

describe('patientNote anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'patientNote_2_35A454A9-544B-A6ED-A2BA-2AF041FD8CAD',
    key: 'patientNote_2_35A454A9-544B-A6ED-A2BA-2AF041FD8CAD',
    value: { rev: '1-09161797cafe931c8efa3e4d5b4a1a9f' },
    doc: {
      _id: 'patientNote_2_35A454A9-544B-A6ED-A2BA-2AF041FD8CAD',
      _rev: '1-09161797cafe931c8efa3e4d5b4a1a9f',
      data: {
        attribution: 'Mr. Bojangles',
        content: 'Hello world!',
        createdBy: 'hradmin',
        date: '2016-06-18T14:09:38.656Z',
        noteType: 'Post-op',
        lastModified: '2016-06-18T14:09:38.657Z',
        modifiedBy: 'Mel Lionel',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        modifiedFields: {
          createdBy: '2016-06-18T14:09:38.657Z',
           content: '2016-06-18T14:09:38.657Z',
          noteType: '2016-06-18T14:09:38.657Z',
          attribution: '2016-06-18T14:09:38.657Z',
          date: '2016-06-18T14:09:38.657Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'patientNote_2_35A454A9-544B-A6ED-A2BA-2AF041FD8CAD',
    key: 'patientNote_2_35A454A9-544B-A6ED-A2BA-2AF041FD8CAD',
    value: { rev: '1-09161797cafe931c8efa3e4d5b4a1a9f' },
    doc: {
      _id: 'patientNote_2_35A454A9-544B-A6ED-A2BA-2AF041FD8CAD',
      _rev: '1-09161797cafe931c8efa3e4d5b4a1a9f',
      data: {
        attribution: 'Mr. Bojangles',
        content: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        createdBy: 'Abraham Abraham',
        date: '2016-06-18T14:09:38.656Z',
        noteType: 'Post-op',
        lastModified: '2016-06-18T14:09:38.657Z',
        modifiedBy: 'Abraham Abraham',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        modifiedFields: {
          createdBy: '2016-06-18T14:09:38.657Z',
           content: '2016-06-18T14:09:38.657Z',
          noteType: '2016-06-18T14:09:38.657Z',
          attribution: '2016-06-18T14:09:38.657Z',
          date: '2016-06-18T14:09:38.657Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});