var expect = require('chai').expect;

require('../support/disableRandom');

var anonymize = require('../../lib/types/lookup');
var scrubber = require('../../lib/Scrubber');

describe('lookup anonymizer', function() {
  beforeEach(function() {
    scrubber.reset();
  });

  context('when the record type is lookup_2_physician_list', function() {
    var record = {
      id: 'lookup_2_physician_list',
      key: 'lookup_2_physician_list',
      value: { rev: '1-99c8212cef905d552ab95fc88b8c3d5b' },
      doc: {
        _id: 'lookup_2_physician_list',
        _rev: '1-99c8212cef905d552ab95fc88b8c3d5b',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'Dr Nick' ],
          modifiedBy: 'Taylor Krustofski'
        }
      }
    };

    var anomymizedRecord = {
      id: 'lookup_2_physician_list',
      key: 'lookup_2_physician_list',
      value: { rev: '1-99c8212cef905d552ab95fc88b8c3d5b' },
      doc: {
        _id: 'lookup_2_physician_list',
        _rev: '1-99c8212cef905d552ab95fc88b8c3d5b',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'Abraham Abraham' ],
          modifiedBy: 'Abraham Abraham'
        }
      }
    };

    it('anonymizes the record', function() {
      expect(anonymize(record)).to.eql(anomymizedRecord);
    });
  });

  context('when the record type is lookup_2_radiologists', function() {
    var record = {
      id: 'lookup_2_radiologists',
      key: 'lookup_2_radiologists',
      value: { rev: '1-f029e944b51dcc7fd6f980d72c7027c7' },
      doc: {
        _id: 'lookup_2_radiologists',
        _rev: '1-f029e944b51dcc7fd6f980d72c7027c7',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'Dr Xray' ],
          modifiedBy: 'Hoover Rainier'
        }
      }
    };

    var anomymizedRecord = {
      id: 'lookup_2_radiologists',
      key: 'lookup_2_radiologists',
      value: { rev: '1-f029e944b51dcc7fd6f980d72c7027c7' },
      doc: {
        _id: 'lookup_2_radiologists',
        _rev: '1-f029e944b51dcc7fd6f980d72c7027c7',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'Abraham Abraham' ],
          modifiedBy: 'Abraham Abraham'
        }
      }
    };

    it('anonymizes the record', function() {
      expect(anonymize(record)).to.eql(anomymizedRecord);
    });
  });

  context('when the record type is lookup_2_anesthesiologists', function() {
    var record = {
      id: 'lookup_2_anesthesiologists',
      key: 'lookup_2_anesthesiologists',
      value: { rev: '1-d373d65b719c266173d92d3bb8f14e9f' },
      doc: {
        _id: 'lookup_2_anesthesiologists',
        _rev: '1-d373d65b719c266173d92d3bb8f14e9f',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'Hospital' ],
          modifiedBy: 'Kwan Pryor'
        }
      }
    };

    var anomymizedRecord = {
      id: 'lookup_2_anesthesiologists',
      key: 'lookup_2_anesthesiologists',
      value: { rev: '1-d373d65b719c266173d92d3bb8f14e9f' },
      doc: {
        _id: 'lookup_2_anesthesiologists',
        _rev: '1-d373d65b719c266173d92d3bb8f14e9f',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'Abraham Abraham' ],
          modifiedBy: 'Abraham Abraham'
        }
      }
    };

    it('anonymizes the record', function() {
      expect(anonymize(record)).to.eql(anomymizedRecord);
    });
  });

  context('when the record type is another type of lookup', function() {
    var record = {
      id: 'lookup_2_aisle_location_list',
      key: 'lookup_2_aisle_location_list',
      value: { rev: '1-255c62c74fb06e5c13664e9e70aebef5' },
      doc: {
        _id: 'lookup_2_aisle_location_list',
        _rev: '1-255c62c74fb06e5c13664e9e70aebef5',
        data: {
          importFile: false,
          organizeByType: false,
          userCanAdd: true,
          value: [ 'A1' ],
          modifiedBy: 'Eddie Krusty'
        }
      }
    };

    it('does not anonymize the record', function() {
      expect(anonymize(record)).to.eql(record);
    });
  });
});
