// Fetch example

// Like isaiah previously mentioned a fetch has 2 parameters, today we will only be using one - the URL 

//1. We invoke our fetch method and pass our parameter, which is going to be a poetry API hitting the authors endpoint. 

//2. Resolve the promise created by the API and apply the json() method to the response variable, creating a new promise

// 3. Resolve the remaining promise using a .then() statement, and console.log the results

// 4. Create an error handler, .catch(), to print any rejected promises 

//1
fetch('https://poetrydb.org/author')

//2
.then(response => response.json())

// 3
.then(json => console.log(json))

// 4
.catch(error => console.log(error))