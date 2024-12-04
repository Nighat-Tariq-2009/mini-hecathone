import { auth, createUserWithEmailAndPassword,
    onAuthStateChanged ,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    provider,
 } from "./firebase.js";





// onstatechange
 onAuthStateChanged(auth, (user) => {
  if (user) {
  
    // const uid = user.uid;
    console.log("user exist", user )

  } else {
    console.log("user is not exist")
 
  }
});


// createUserWithEmailAndPassword
let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value === "" || password.value === "") {
      
      // sweet alert
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please fill all fields before submitting!"
    });
  }
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
  
   console.log("user", res.user)

         // sweet alert
         const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed up successfully"
        });
setTimeout(() => {
  location.href = "signin.html";
}, 2000);


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error", error)


    if (errorCode === "auth/email-already-in-use") {
    
      Swal.fire({
        title: "Email Already Exists",
        text: "Please sign in instead.",
        icon: "error"
      })
    } else if (errorCode === "auth/weak-password") {
      Swal.fire({
        title: "Incorrect Password",
        text: "The password should be at least 6 characters long.",
        icon: "error"
      });
    } else{
      Swal.fire({
      title: "Invalid email ",
      text: "try again",
      icon: "error",
    });
  };
  
  });
  
  email.value = "";
  password.value = "";
  
}







  


let signupBtn =document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup)

// signup with google
let signupWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
 
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
 
    const user = result.user;
    console.log("token",token)
    console.log("user", user)
    location.href = "profile.html"
   
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;
  
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errorCode",errorCode, credential)

  
  })

}
// let signupBtn = document.getElementById("signupBtn");
// signupBtn.addEventListener("click", signUp);


let googleBtn = document.getElementById("googleBtn");

googleBtn.addEventListener("click", signupWithGoogle)