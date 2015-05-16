describe('it', function () {
  it('should work', function () {
    var a1 = require('../file');
    console.log(a1);

    var a2 = require('jama/file');
    console.log(a2);

    console.log(require('moment'));
    console.log(require('../../__testutils__/testUtil'));
  });
});