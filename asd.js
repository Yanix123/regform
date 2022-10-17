document.addEventListener("DOMContentLoaded", function (event) {
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
 
  document.getElementById("submit").onclick = function (e) {
    e.preventDefault();
    const pass = document.getElementById("pass").value;
    const passconf = document.getElementById("confpass").value;
    const email = document.getElementById("email").value;
 
    if (email == "") {
      alert("enter email");
    } else if (!validateEmail(email)) {
      alert("email is not valid");
    } else if (pass == "") {
      alert("enter password");
    } else if (passconf == "") {
      alert("confirm password");
    } else if (pass != passconf) {
      alert("Passwords do not match");
    } else if (validateEmail(email) && pass == passconf) {
      const allExistingEmailsArray =
        JSON.parse(localStorage.getItem("emails")) || [];
      let isSuchEmailAlreadyExists = false;
      allExistingEmailsArray.forEach((existingEmail) => {
        if (existingEmail === email) {
          isSuchEmailAlreadyExists = true;
        }
      });
      if (isSuchEmailAlreadyExists) {
        return alert("email is already used");
      }
      allExistingEmailsArray.push(email);
      localStorage.setItem("emails", JSON.stringify(allExistingEmailsArray));
      alert("you are registred ");
    }
  };
});
    

   