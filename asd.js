function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    const b = this.localStorage.getItem("email");
  
    document.getElementById("submit").onclick = function () {
      console.log('submit1')
      const a = document.getElementById("email").value;
      console.log("a", a);
      console.log('localStorage.getItem("email")', localStorage.getItem("email"));
      if (!validateEmail(a)) {
        window.alert(`Email is not valid: ${a}`);
        return;
      }
      if (a === localStorage.getItem("email")) {
        window.alert("already used");
      } else {
        window.alert("you're registred ");
        
        localStorage.setItem("email", a);
      }
  
    };
  });