var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/appointment');
var scrubber = require('../../lib/Scrubber');

describe('appointment anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  var record = {
    id: 'appointment_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
    key: 'appointment_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
    value: { rev: '2-44597ea8b1cdd20dc8d2c0ad9b2edbb6' },
    doc: {
      _id: 'appointment_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
      _rev: '2-44597ea8b1cdd20dc8d2c0ad9b2edbb6',
      data: {
        allDay: true,
        provider: 'Dr Nick',
        location: 'Hospital',
        appointmentType: 'Followup',
        startDate: '2015-12-30T06:00:00.000Z',
        endDate: '2015-12-30T06:00:00.000Z',
        notes: null,
        status: 'Scheduled',
        lastModified: '2015-12-29T04:14:36.585Z',
        modifiedBy: 'Constance Martin',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        modifiedFields: {
          appointmentType: '2015-12-29T04:14:21.124Z',
          allDay: '2015-12-29T04:14:21.124Z',
          startDate: '2015-12-29T04:14:36.585Z',
          endDate: '2015-12-29T04:14:36.585Z',
          location: '2015-12-29T04:14:21.124Z',
          provider: '2015-12-29T04:14:21.124Z'
        }
      }
    }
  };

  var anomymizedRecord = {
    id: 'appointment_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
    key: 'appointment_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
    value: { rev: '2-44597ea8b1cdd20dc8d2c0ad9b2edbb6' },
    doc: {
      _id: 'appointment_2_C47BE127-E509-6322-BB33-2E6ABE03D0F0',
      _rev: '2-44597ea8b1cdd20dc8d2c0ad9b2edbb6',
      data: {
        allDay: true,
        provider: 'Abraham Abraham',
        location: 'Springfield Hospital',
        appointmentType: 'Followup',
        startDate: '2015-12-30T06:00:00.000Z',
        endDate: '2015-12-30T06:00:00.000Z',
        notes: 'You don\'t believe in the Force, do you? She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There\'ll be no one to stop us this time!',
        status: 'Scheduled',
        lastModified: '2015-12-29T04:14:36.585Z',
        modifiedBy: 'Abraham Abraham',
        patient: 'C87BFCB2-F772-7A7B-8FC7-AD00C018C32A',
        modifiedFields: {
          appointmentType: '2015-12-29T04:14:21.124Z',
          allDay: '2015-12-29T04:14:21.124Z',
          startDate: '2015-12-29T04:14:36.585Z',
          endDate: '2015-12-29T04:14:36.585Z',
          location: '2015-12-29T04:14:21.124Z',
          provider: '2015-12-29T04:14:21.124Z'
        }
      }
    }
  };

  it('anonymizes the record', function() {
    expect(anonymize(record)).to.eql(anomymizedRecord);
  });
});