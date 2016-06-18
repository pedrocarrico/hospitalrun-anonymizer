var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/lab');
var scrubber = require('../../lib/Scrubber');

describe('lab anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'lab_2_C9274C34-248C-FF7C-9E8B-F3110467C941',
    key: 'lab_2_C9274C34-248C-FF7C-9E8B-F3110467C941',
    value: { rev: '2-78aaf934410f626a7dc64c8ce640ad17' },
    doc: {
      _id: 'lab_2_C9274C34-248C-FF7C-9E8B-F3110467C941',
      _rev: '2-78aaf934410f626a7dc64c8ce640ad17',
      data: {
        labDate: '2015-12-29T04:07:25.725Z',
        notes: null,
        requestedBy: 'Admin User',
        requestedDate: '2015-12-29T04:03:22.879Z',
        result: 'Normal',
        status: 'Completed',
        lastModified: '2015-12-29T04:07:25.725Z',
        modifiedBy: 'Scratchy Sherri',
        labType: 'A33BFA09-AFBB-CA35-A01C-702B568FFAE8',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        charges: [],
        modifiedFields: {
          status: '2015-12-29T04:07:25.725Z',
          requestedBy: '2015-12-29T04:03:22.927Z',
          requestedDate: '2015-12-29T04:03:22.927Z',
          result: '2015-12-29T04:07:25.725Z',
          labDate: '2015-12-29T04:07:25.725Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'lab_2_C9274C34-248C-FF7C-9E8B-F3110467C941',
    key: 'lab_2_C9274C34-248C-FF7C-9E8B-F3110467C941',
    value: { rev: '2-78aaf934410f626a7dc64c8ce640ad17' },
    doc: {
      _id: 'lab_2_C9274C34-248C-FF7C-9E8B-F3110467C941',
      _rev: '2-78aaf934410f626a7dc64c8ce640ad17',
      data: {
        labDate: '2015-12-29T04:07:25.725Z',
        notes: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        requestedBy: 'Abraham Abraham',
        requestedDate: '2015-12-29T04:03:22.879Z',
        result: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        status: 'Completed',
        lastModified: '2015-12-29T04:07:25.725Z',
        modifiedBy: 'Abraham Abraham',
        labType: 'A33BFA09-AFBB-CA35-A01C-702B568FFAE8',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        visit: '03C7BF8B-04E0-DD9E-9469-96A5604F5340',
        charges: [],
        modifiedFields: {
          status: '2015-12-29T04:07:25.725Z',
          requestedBy: '2015-12-29T04:03:22.927Z',
          requestedDate: '2015-12-29T04:03:22.927Z',
          result: '2015-12-29T04:07:25.725Z',
          labDate: '2015-12-29T04:07:25.725Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});