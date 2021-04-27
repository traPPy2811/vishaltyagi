
  formcarry({
form: "b3_EuwKxV4f",
// id or the class name of the form element, only form element allowed
// works with css selectors
// # <= for id
// . <= for class
element: "#my-formcarry",
extraData: {
 // add whatever you want
 screenSize: `${window.screen.width}x${window.screen.height}`,
 language: window.navigator.language,
 browser:window.navigator.appName,
 browserVersion:window.navigator.appVersion,
},
// Success callback, you can show alert messages
// or redirect the user in this function
onSuccess: function(response){
  alert("Message sent! Thank you for contacting.")
   Uname.value=""
   subject.value=""
   email.value=""
   message.value=""
},
// Error callback, a good place to show errors 🗿
onError: function(error){
   alert("Something went wrong! Please try again.")
   Uname.value=""
   subject.value=""
   email.value=""
   message.value=""
}

});