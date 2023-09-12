// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var i = 1;
while (i <= 100) {
  console.log(i);
  i = i + 2;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var j = 3;
do {
  console.log(j);
  i = i + 3;
} while (j <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for(let p=1; p<=100; p++){
  let prime=0;
  for(let j=2;j<p;p++){
    if(p%j==0){
      prime=1;
      break;
    }
  }
    if(p>0&&prime==0){
      console.log(p);
    }
  }
