let firstName = "Tafari";
let title = `Training Class`;
let lastName = "Hunter";
let fullName = firstName + " " + lastName;

fullName = `${firstName} ${lastName}`
console.log(fullName)


console.log("1");
//Usung back ticks will allow for you to add more readable multi line strings.
let back_Tick = `Hello, My name is Tafari Hunter
 and Welcome to my Page.`;

 console.log(back_Tick)
console.log(fullName)
//Uppercase and Lowercase
let uppercaseName = fullName.toUpperCase();
let lowercaseName = fullName.toLowerCase();
console.log(uppercaseName)
console.log(lowercaseName)

// Finding a substring

let idx1 = fullName.indexOf("Hun");
console.log(idx1)

let idx2 = fullName.indexOf("fari");
console.log(idx2)


//Does a string contains a substring. It should return a Boolean
 let doesContain = fullName.includes("Tafari");
 console.log(doesContain)