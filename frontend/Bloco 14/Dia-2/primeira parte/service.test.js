const service = require('./service');
const { test, expect } = require('@jest/globals');


test('Verify if randomNumber fuction works propperly', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})