/*
Run this with
> npm install
> npm test zoo-animals
*/

import { addDolphinToPool, petThePenguins } from './zoo-animals'

describe('When adding a dolphin to the pool', () => {

  test('And speed is over 30 we get Speedy Alice', () => {
    // Arrange
      let result;
    // Act 
      result = addDolphinToPool(45);

    // Assert
    // Hint: expect.objectContaining on name only
      expect(result).toEqual(expect.objectContaining({
        name: expect.any('Speedy Alice')
      }))
  })

  test('And speed is under 30 we get Slow Bob', () => {
    // Arrange
    let result;
    // Act 
    result = addDolphinToPool(25);
    // Assert
    // Hint: expect.objectContaining on name only
    const expected = expect.objectContaining(result.name)
    expect(expected).toEqual('Slow Bob');
  })

  test('Speedy Alice is a fast mammal with two flippers', () => {
    // Arrange
    let result;
    // Act 
    result = addDolphinToPool(45);
    // Assert
    // Hint: toStrictEqual the whole object
    expect.objectContaining(result.flippers).toStrictEqual(2);
  })

  test('Slow Bob is a slow mammal with two flippers', () => {
    let result;
    // Act 
    result = addDolphinToPool(25);
    // Assert
    // Hint: toStrictEqual the whole object
    expect.objectContaining(result.flippers).toStrictEqual(2);
  })
})

describe('When petting the penguins', () => {

  test('One penguin with one fish will be fed', () => {
    // Arrange
    let result;
    // Act 
    result = petThePenguins(1,1);
    // Assert
    // Hint: toStrictEqual the whole array
    expect(result.values).toStrictEqual(['A',false,2,false]);
  })

  test('One penguin with no fish will be hungry', () => {
    // Arrange
    let result;
    // Act 
    result = petThePenguins(1,0);
    // Assert
    // Hint: toStrictEqual the whole array
    expect(result.values).toStrictEqual(['A',true,2,false])
  })

  describe('And there are not enough fish', () => {

    test('At least one penguin will be hungry', () => {
      // Arrange

      // Act 

      // Assert
      // Hint: expect.arrayContaining on one penguin
    })
  })

})
