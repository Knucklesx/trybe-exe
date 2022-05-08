const service = require('./service');
const { test, expect, mockImplementationOnce } = require('@jest/globals');


test('Verify if randomNumber fuction works propperly', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

test('Verify if randomNumber function is capable of others maths tricks' , () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a/b);

  expect(service.randomNumber(25,5)).toBe(5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(25,5);
})

test('Verify the mockimplementation two cases, thre numbers multiplication and one number times two', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

  
  expect(service.randomNumber(25,5,2)).toBe(250);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(25,5,2);

  service.randomNumber.mockReset();
  service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);

  expect(service.randomNumber(25)).toBe(50);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(25);
  
})

test('Verify the allUpperCase function implemented to lower cases', () => {
  // service.allUpperCase = jest.fn().mockImplementationOnce((string) => string.toLowerCase());

  // expect(service.allUpperCase('HELLO WORLD')).toBe('hello world');

  const mockUpperCase = jest.spyOn(service, 'allUpperCase').mockImplementationOnce((string) => string.toLowerCase());

  expect(mockUpperCase('HELLO WORLD')).toBe('hello world');

})

test('Verify the justFirstLetter function implemented to return just the last letter', () => {
  service.justFirstLetter = jest.fn().mockImplementationOnce((string) => string.slice(-1));

  expect(service.justFirstLetter('Casaco')).toBe('o');
})

test('Verify if the concatTwoStrings function works with three strings', () => {
  service.concatTwoStrings = jest.fn().mockImplementationOnce((string1, string2, string3) => string1.concat(string2, string3));
  
  expect(service.concatTwoStrings('Hello', 'world', '!')).toBe('Helloworld!');
})

test('Verify the allUpperCase function with the original functionality', () => {
  service.allUpperCase.mockRestore();
  
  expect(service.allUpperCase("ditado")).toBe("DITADO");
})