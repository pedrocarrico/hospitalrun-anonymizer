var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/photo');
var scrubber = require('../../lib/Scrubber');

describe('photo anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'photo_2_81B6888C-CE1F-7A87-AB9A-FDE3C6DFE95B',
    key: 'photo_2_81B6888C-CE1F-7A87-AB9A-FDE3C6DFE95B',
    value: { rev: '2-d101d6505a06e56bd2a19eef62a999d9' },
    doc: {
      _id: 'photo_2_81B6888C-CE1F-7A87-AB9A-FDE3C6DFE95B',
      _rev: '2-d101d6505a06e56bd2a19eef62a999d9',
      data: {
        coverImage: false,
        fileName: '/C87BFCB2-F772-7A7B-8FC7-AD00C018C32A/photos/1466259257485.png',
        localFile: true,
        caption: 'Hello there!',
        url: 'filesystem:http://localhost:4200/persistent/C87BFCB2-F772-7A7B-8FC7-AD00C018C32A/photos/1466259257485.png',
        lastModified: '2016-06-18T14:14:17.550Z',
        modifiedBy: 'Groundskeeper Blue',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        modifiedFields: {
          localFile: '2016-06-18T14:14:17.435Z',
          caption: '2016-06-18T14:14:17.435Z',
          fileName: '2016-06-18T14:14:17.550Z',
          url: '2016-06-18T14:14:17.550Z',
          _attachments: '2016-06-18T14:14:17.550Z'
        },
        _attachments: {
          file: {
            content_type: 'image/png',
            data: '<PHOTO>'
          }
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'photo_2_81B6888C-CE1F-7A87-AB9A-FDE3C6DFE95B',
    key: 'photo_2_81B6888C-CE1F-7A87-AB9A-FDE3C6DFE95B',
    value: { rev: '2-d101d6505a06e56bd2a19eef62a999d9' },
    doc: {
      _deleted: true,
      _id: 'photo_2_81B6888C-CE1F-7A87-AB9A-FDE3C6DFE95B',
      _rev: '2-d101d6505a06e56bd2a19eef62a999d9',
      data: {
        coverImage: false,
        fileName: '/C87BFCB2-F772-7A7B-8FC7-AD00C018C32A/photos/1466259257485.png',
        localFile: true,
        caption: 'Hello there!',
        url: 'filesystem:http://localhost:4200/persistent/C87BFCB2-F772-7A7B-8FC7-AD00C018C32A/photos/1466259257485.png',
        lastModified: '2016-06-18T14:14:17.550Z',
        modifiedBy: 'Groundskeeper Blue',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        modifiedFields: {
          localFile: '2016-06-18T14:14:17.435Z',
          caption: '2016-06-18T14:14:17.435Z',
          fileName: '2016-06-18T14:14:17.550Z',
          url: '2016-06-18T14:14:17.550Z',
          _attachments: '2016-06-18T14:14:17.550Z'
        },
        _attachments: {
          file: {
            content_type: 'image/png',
            data: '<PHOTO>'
          }
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});
