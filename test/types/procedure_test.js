var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/procedure');
var scrubber = require('../../lib/Scrubber');

describe('procedure anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'procedure_2_398B4F58-152F-1476-8ED1-329C4D85E25F',
    key: 'procedure_2_398B4F58-152F-1476-8ED1-329C4D85E25F',
    value: { rev: '5-979bd8081e0ae3ccebf595c28bafd145' },
    doc: {
      _id: 'procedure_2_398B4F58-152F-1476-8ED1-329C4D85E25F',
      _rev: '5-979bd8081e0ae3ccebf595c28bafd145',
      data: {
        anesthesiaType: '',
        anesthesiologist: null,
        assistant: null,
        description: 'hip adductor release',
        cptCode: '27001',
        location: null,
        notes: null,
        physician: 'Dr Nick',
        procedureDate: '2015-12-01T06:00:00.000Z',
        timeStarted: null,
        timeEnded: null,
        lastModified: '2015-12-29T04:00:33.229Z',
        modifiedBy: 'Frink Gunter',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        charges: [ '0AD46995-188B-EFB9-8A33-E47B3980476C' ],
        modifiedFields: {
          procedureDate: '2015-12-29T03:59:55.401Z',
          description: '2015-12-29T03:59:37.244Z',
          physician: '2015-12-29T03:59:37.244Z',
          anesthesiaType: '2015-12-29T03:59:37.244Z',
          cptCode: '2015-12-29T04:00:33.229Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'procedure_2_398B4F58-152F-1476-8ED1-329C4D85E25F',
    key: 'procedure_2_398B4F58-152F-1476-8ED1-329C4D85E25F',
    value: { rev: '5-979bd8081e0ae3ccebf595c28bafd145' },
    doc: {
      _id: 'procedure_2_398B4F58-152F-1476-8ED1-329C4D85E25F',
      _rev: '5-979bd8081e0ae3ccebf595c28bafd145',
      data: {
        anesthesiaType: '',
        anesthesiologist: 'Abraham Abraham',
        assistant: 'Abraham Abraham',
        description: 'hip adductor release',
        cptCode: '27001',
        location: 'OR Room 1',
        notes: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        physician: 'Abraham Abraham',
        procedureDate: '2015-12-01T06:00:00.000Z',
        timeStarted: null,
        timeEnded: null,
        lastModified: '2015-12-29T04:00:33.229Z',
        modifiedBy: 'Abraham Abraham',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        charges: [ '0AD46995-188B-EFB9-8A33-E47B3980476C' ],
        modifiedFields: {
          procedureDate: '2015-12-29T03:59:55.401Z',
          description: '2015-12-29T03:59:37.244Z',
          physician: '2015-12-29T03:59:37.244Z',
          anesthesiaType: '2015-12-29T03:59:37.244Z',
          cptCode: '2015-12-29T04:00:33.229Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});
