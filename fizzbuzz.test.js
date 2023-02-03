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
        let expected = [1,2,"Fizz",4,"Buzz","Fizz"]; 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    }) 
    test("If n divisible by 5, return Buzz instead of number", () => {
        let n = 10; 
        let expected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]; 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    }) 
    test("If n divisible by 3 and 5, return FizzBuzz instead of number", () => {
        let n = 15; 
        let expected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",'Fizz',14,"FizzBuzz"]; 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    }) 
    test("If n is divisible by 3 or contains 3, return Fizz", () => {
        let n = 23; 
        let expected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz",14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,"Fizz"]; 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    }) 
    test("If n is divisible by 5 or contains 5, return Buzz", () => {
        let n = 51; 
        let expected = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz","Fizz",14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,"Fizz","Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz","Fizz","Fizz","Fizz","Fizz","FizzBuzz","Fizz","Fizz","Fizz","Fizz","Buzz",41,"Fizz","Fizz",44,"FizzBuzz",46,47,"Fizz",49,"Buzz","Fizz"]; 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    })
})