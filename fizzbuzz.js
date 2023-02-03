const fizzBuzz = (n) => { 

    let fbArray = []; 

    for (let i =1; i<=n; i++) { 

        let m =""; 
        
        if ((i%3 ===0) || (i.toString().includes(3))) m+= "Fizz"; 
        if (i%5 ===0) m+= "Buzz"; 
        if (m === '') m=i; 

        fbArray.push(m)
    }  

    return fbArray
} 

console.log(fizzBuzz(23))
module.exports = fizzBuzz