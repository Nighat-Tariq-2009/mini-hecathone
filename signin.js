import { auth,
    onAuthStateChanged ,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "./firebase.js"

    
 let signin = () => {
    let signinEmail = document.getElementById("signinEmail")
    let signinPassword = document.getElementById("signinPassword");
   
    // Check if email and password fields are not empty
    if (signinEmail.value.trim() && signinPassword.value.trim()) {
    signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
  .then((userCredential) => {
   console.log("user logged in", userCredential)

     // Successful sign-in
     Swal.fire({
      title: "Congratulations",
      text: "Signed in successfully",
      icon: "success",
  });
  
  // Redirect to profile page after a short delay
  setTimeout(() => {
      location.href = "dashboard.html";
  }, 1000);
 
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;      
    console.log("failed to login")

      // Check for specific sign-in error codes
      if (errorCode === "auth/user-not-found") {
        // Show alert if email is not found
        Swal.fire({
            icon: "error",
            title: "Email Not Found",
            text: "The email you entered does not match any account. Please try again or sign up.",
        });
    } else if (errorCode === "auth/wrong-password") {
        // Show alert if password is incorrect
        Swal.fire({
            icon: "error",
            title: "Invalid Password",
            text: "The password should be at least 6 characters long.",
        });
    } else {
        // Show a general error alert for other cases
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "The email you entered is incorrect. Please try again!",
        });
    }
});

}else {
  // Show warning alert if fields are empty
  Swal.fire({
      icon: "warning",
      title: "Warning",
      text: "Please fill all fields before submitting!",
  });
}
};


 let signinBtn = document.getElementById("signinBtn");

 signinBtn.addEventListener("click", signin)