//Event listener for form submission
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); //prevent form from submitting

    //get the length of the password from the input field
    var length = document.querySelector("#length").value;

    //call the generatePassword function and pass the length as a parameter
    var password = generatePassword(length);

    //display the generated password in the "password" div
    document.getElementById("pass").value = password;
  });
  
  //Event listener for copy button
  function copy() {
    //get password from input text field
    var copyText = document.getElementById("pass");
    // Set selection range to copy longer text on mobile devices
    copyText.setSelectionRange(0, 9999);
    //Copy the text from the text field 
    navigator.clipboard.writeText(copyText.value);
    // Get the toast container
    var x = document.getElementById("toast")
    // Add the "show" class to the container
    x.className = "show";
    //Show toast for 3sec
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
  }
  

  function generatePassword(length) {
    //string of possible characters to use in the password
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
      //get a random character from the characters string
      var randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
      password += randomChar;
    }
    return password;
  }