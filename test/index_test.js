var expect = require('chai').expect;

var anonymize = require('../lib/index');

describe('anonymizer', function() {
  it('doesn\'t anonymize unsupported types' , function() {
    var record = {
      id: 'unsupported_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
      key: 'unsupported_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
      value: { rev: '2-44597ea8b1cdd20dc8d2c0ad9' },
      doc: {
        _id: 'unsupported_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
        _rev: '2-44597ea8b1cdd20dc8d2c0ad9b2edbb6',
        data: {
          allDay: true,
          provider: 'Dr Nick',
          location: 'Hospital',
          appointmentType: 'Unsupported',
          startDate: '2015-12-30T06:00:00.000Z',
          endDate: '2015-12-30T06:00:00.000Z',
          lastModified: '2015-12-29T04:14:36.585Z',
          modifiedBy: 'Constance Martin',
          patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A'
        }
      }
    };
    expect(anonymize(record)).to.eql(record);
  });
});