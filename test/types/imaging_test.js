var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/imaging');
var scrubber = require('../../lib/Scrubber');

describe('imaging anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'imaging_2_12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7',
    key: 'imaging_2_12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7',
    value: { rev: '1-3237f1a60f7ef9869553893a25e91e87' },
    doc: {
      _id: 'imaging_2_12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7',
      _rev: '1-3237f1a60f7ef9869553893a25e91e87',
      data: {
        imagingDate: null,
        notes: null,
        radiologist: '',
        requestedBy: 'Admin User',
        requestedDate: '2015-12-29T04:15:41.380Z',
        result: null,
        status: 'Requested',
        lastModified: '2015-12-29T04:15:41.382Z',
        modifiedBy: 'Chalmers Groundskeeper',
        imagingType: 'B93625F1-3C41-2D3E-94B9-3A8BAF87EBE8',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        charges: [],
        modifiedFields: {
          radiologist: '2015-12-29T04:15:41.382Z',
          status: '2015-12-29T04:15:41.382Z',
          requestedBy: '2015-12-29T04:15:41.382Z',
          requestedDate: '2015-12-29T04:15:41.382Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'imaging_2_12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7',
    key: 'imaging_2_12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7',
    value: { rev: '1-3237f1a60f7ef9869553893a25e91e87' },
    doc: {
      _id: 'imaging_2_12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7',
      _rev: '1-3237f1a60f7ef9869553893a25e91e87',
      data: {
        imagingDate: null,
        notes: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        radiologist: 'Abraham Abraham',
        requestedBy: 'Abraham Abraham',
        requestedDate: '2015-12-29T04:15:41.380Z',
        result: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        status: 'Requested',
        lastModified: '2015-12-29T04:15:41.382Z',
        modifiedBy: 'Abraham Abraham',
        imagingType: 'B93625F1-3C41-2D3E-94B9-3A8BAF87EBE8',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        charges: [],
        modifiedFields: {
          radiologist: '2015-12-29T04:15:41.382Z',
          status: '2015-12-29T04:15:41.382Z',
          requestedBy: '2015-12-29T04:15:41.382Z',
          requestedDate: '2015-12-29T04:15:41.382Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});