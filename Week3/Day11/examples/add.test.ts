import {add} from './add';

describe('To test the add module',()=>{
    let result : number;

 
        console.log('To setup the data'); //Arrange


        console.log('Call the function'); //Act

        beforeEach(()=>{
            result = add(45,55)
        })

        it('add two numbers 45 and 55 to be 100',()=>{
        //console.log('Compare the expected and actual results') //Assert
        expect(result).toBe(100);
        })
        

    })

describe('To test the add module with negative numbers',()=>{
    let result : number;
    console.log('To setup the data'); //Arrange
    
    console.log('Call the function'); //Act
    
    beforeEach(()=>{
        result = add(-45,-45)
    })
    
    it('add two negative numbers -45 and -55 to be 100',()=>{
    //console.log('Compare the expected and actual results') //Assert
        expect(result).toBe(100);
    })
})

describe('To test the add module with one positive and one negative number',()=>{
    let result : number;

 
        console.log('To setup the data'); //Arrange


        console.log('Call the function'); //Act

        beforeEach(()=>{
            result = add(45,-55)
        })

        it('add two numbers 45 and -55 to be 100',()=>{
        //console.log('Compare the expected and actual results') //Assert
        expect(result).toBe(100);
        })
        

    })