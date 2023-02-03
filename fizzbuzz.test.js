const fbTest = require("./fizzbuzz")

describe('testing FizzBuzz', () => {
    test("Return array from 1 to n", () => {
        let n = 2; 
        let expected = [1,2] 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    }) 
    test("If n divisible by 3, return Fizz instead of number", () => {
        let n = 6; 
        let expected = [1,2,"Fizz",4,5,"Fizz"]; 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    })
})