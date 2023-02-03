const fizzBuzz = (n) => { 

    let fbArray = []; 

    for (let i =1; i<=n; i++) {
        
        if (i%3 ===0) {
            fbArray.push("Fizz")
        } else {
            fbArray.push(i)
        }
    }  

    return fbArray
} 


module.exports = fizzBuzz