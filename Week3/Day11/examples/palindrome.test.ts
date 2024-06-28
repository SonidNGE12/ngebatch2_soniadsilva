/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'

describe('When calling the palindrome function', () => {
  let result : boolean;

  beforeEach(()=>{
    result = palindrome('1234');
  })
  
  it('will return true or false when called', () => {
    //Arrange

    //Act
    

    //Assert
    expect(result).toBe(true);
  })

  it('will return false for invalid inputs', () => {
    //Arrange

    //Act
  

    //Assert
    expect(result).toBe(false);
  })

  it('will return true for text that is a palindrome', () => {
    //Arrange

    //Act

    //Assert
    expect(result).toBe(true);

  })
})
