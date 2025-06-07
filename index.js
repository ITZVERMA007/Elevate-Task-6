document.getElementById("validation-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let isValid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("Email-Id").value;

    let nameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Name check

    if(!nameRegex.test(name)){
        document.getElementById("nameError").textContent = "Invalid Name";
        isValid = false;
    }
    else{
        document.getElementById("nameError").textContent = "";
    }

    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent = "Invalid Email";
        isValid = false;
    }
    else{
        document.getElementById("emailError").textContent = "";

    }

    if (isValid) {
        alert("Form submitted Successfully!");
        document.getElementById("validation-form").reset();
    }

});