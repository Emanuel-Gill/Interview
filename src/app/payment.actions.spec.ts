import * as PaymentActions from './payment.actions';

describe('Payment', () => {
  it('should create an instance', () => {
    expect(new PaymentActions.LoadPayments()).toBeTruthy();
  });
});
