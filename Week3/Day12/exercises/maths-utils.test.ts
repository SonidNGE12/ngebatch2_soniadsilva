/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
  it('should add two integers', () => {
    // Arrange: Setup variables here
    let result;

    // Act: Call function here
    result = add(40,50);

    // Assert: Check results here
    expect(result).toBe(90);
  })

  it('will add strings and numbers', () => {
    // Arrange: Setup variables here
    let result:number;

    // Act: Call function here
    result = add('abcd',20);

    // Assert: Check results here
    expect(result).toBe('abcd20');
  })
})

describe('When calling the safeMultiply function', () => {

  it('should multiply two integers', () => {
    // Arrange: Setup variables here
    // Hint: happy case
    let result : number;
    // Act: Call function here
      result = safeMultiply(5,7);
    // Assert: Check results here
    expect(result).toBe(35);
  })

  it('will throw an error when parameter a is bad', () => {
    // Arrange: Setup variables here
    let result;
    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
        result = safeMultiply('abcd',20);
    // Assert
    // Hint: use "toThrow()"
    expect(result).toThrow();
  })
    
  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
        let result;
    // Act: Call function here
        result = safeMultiply(15,'abcd');
    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
      expect(result).toThrow();
  })
})
