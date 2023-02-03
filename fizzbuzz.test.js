const fbTest = require("./fizzbuzz")

describe('first test', () => {
    test("Return array from 1 to n", () => {
        let n = 4; 
        let expected = [1,2,3,4] 

        let result = fbTest(n); 
        expect (result).toEqual(expected); 
    })
})