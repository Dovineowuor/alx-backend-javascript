const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should log the correct message for 100 and 20', () => {
    sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWithExactly(spy, 'The total is: 120');
  });

  it('should log the correct message for 10 and 10', () => {
    sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWithExactly(spy, 'The total is: 20');
  });
});
