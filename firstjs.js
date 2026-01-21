// alert("hi")

// var IsLowPaying ("enter the amaont")
// IsLowPaying = IsLowPaying > IsLowPaying
// var ISMEDIUMPAYING = prompt("enter the charges")
// var IsHighPaying = prompt("enter the charges")
// IsLowPaying = IsLowPaying/100*10
// ISMEDIUMPAYING = ISMEDIUMPAYING/100*15
// if (IsLowPaying){
//     +alert(IsLowPaying)

// }else{IsHighPaying}(
//     alert(IsHighPaying)
// )

// var userEmail1 = "abdullah@gmail.com";
// var userEmail = "mashadraza2000@gmail.com";
// var userPwd = "Password@123";
// var userpassword1 = "shayan@123"
// var email = prompt("Enter your email");
// var email1 = prompt("Enter your email") 
// var pwd = prompt("Enter your password");
// var pwd1 = prompt("enter your password")
// var isEmailCorrect = email === userEmail;
// var isEmailCorrect1 = email1 === userEmail;
// var isPasswordCorrect = pwd === userPwd;
// var isPasswordCorrect1 = pwd1 === userpassword1;
// if (isEmailCorrect) {
//   if (pwd === userPwd) {
//   }
//   console.log("");
// }
// isPasswordCorrect1 = true
// if (isPasswordCorrect1) {
//   if  (isPasswordCorrect1) {
//   alert ("credentials found")
//   }  
// }
// else {
//     alert("credential not found")
// }



// var userEmail = "abdullah@gmail.com";
// var userPwd = "Password@123";
// var email = prompt("Enter your email");
// var pwd = prompt("Enter your password");

// var isEmailCorrect = email === userEmail;
// var isPasswordCorrect = pwd === userPwd;
// if (isEmailCorrect) {
//   if (pwd === userPwd) {
//   }
//   console.log("");
// }

// if (email == userEmail) {
//   if (pwd == userPwd) {
//     alert("Login Successfully");
//   } else {
//     alert("Credential not found");
//   }
// } else {
//   alert("Credential not found");
// }

// let age = 20;
// let hasCNIC = true;


// const students = ["ali","roshan","sameer","shayan"]; 
// console.log(students)
// students.push("shahmeer")
// students.pop()
//console.log(students)
// const removedStudents = students.shift() 
// alert("removed students",removedStudents)

// var a = "shayan"
// var b = "shayan"

// var crct = a == b
// if (crct){
//     console.log(true)
// }
// else {
// (
//      console.log(false)
// )
// }


// const a1 = [1,2,3,4+]


// const b1 = [a1[1,2,3,4,5,6,7,8,9,10]];
// console.log.(b1)

// var correctvalue = students3.splice(2,0, "khan")
// console.log(correctvalue)
// const assignment = prompt("enter your value");
// const students3 = ["ali", "roshan", "sameer", "shayan",[assignment]]
// alert(students3)

  // Already existing array
//   var names = ["SAMEER", "ALE", "SARIM", "AZAAN"];

//   // Ask user for input
//   var userValue = prompt("Enter your value:");

//   // Add user value into array
//   if (userValue !== null && userValue.trim() !== "") {
//     names.push(userValue.toUpperCase());
//   }

//   // Show array in alert
//   alert("Array is:\n" + names.join(", "));
 // Default array
  var defaultNames = ["SAMEER", "ALI", "SARIM", "AZAAN"];

  // Get saved array from localStorage
  var savedNames = localStorage.getItem("");

  // If no saved array, use default
  var names = savedNames ? JSON.parse(savedNames) : defaultNames;

  // Prompt user
  var userValue = prompt("Enter your value:");

  if (userValue !== null && userValue.trim() !== "") {
    names.push(userValue.toUpperCase());
  }

  // Save updated array
  localStorage.setItem("nameArray", JSON.stringify(names));

  // Show alert
  alert("Array is:\n" + names.join(", "));

