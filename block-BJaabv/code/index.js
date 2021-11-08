// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogAge,conversion_rate) {
  // Your code goes here
  return dogAge*conversion_rate;
} 

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,movies_per_week) {
  // Your code goes here
  const max_age=100;
  let numberOfMovies=(max_age-age)*12*4*movies_per_week;
  return numberOfMovies;
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  // Your code goes here
  return `${celsius*9/5+32}°F is ${celsius}°C`;
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here
  return `${fahrenheit}°F is ${(fahrenheit-32)*5/9}°C`

}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  // Your code goes here
  if(n<0)
  {
    return `The number below 1 is not allowed`;
  }
  else
  {
    return n**x;
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n,choice) {
  // Your code goes here
  switch(choice)
  {
    case 'sum':
      let sum=0;
      for(let i=1;i<=n;i++)
      {
        sum=sum+i;
      }
      return sum;
      break;
      case 'prod':
        let prod=1;
        for(let j=1;j<=n;j++)
        {
          prod=prod*j
        }
        return prod;
        break;
        default:
          alert(`Not a valid Input`);
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  let sum=0;
  let j=0;
  while(j<=n)
  {
    sum=sum+j;
    j++;
  }
  return sum;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here

function sumOfN(n) {
  // Your code goes here
let sum=0;
let j=0;
  while(j<=n)
  {
    if(j%5==0 || j%7==0)
    {
      sum=sum+j;
      j++;
    }
  }
  return sum;
}
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  // Your code goes here
  return a<b?a:b;
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(num) {
  // Your code goes here
  return typeof(num);
}
