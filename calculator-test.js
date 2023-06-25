
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 5000, years: 5, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('93.22');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 7600, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('99.14');
});
