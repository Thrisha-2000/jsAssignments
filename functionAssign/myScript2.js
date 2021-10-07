// Question 2

function callOther(){
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    text = fullName(firstName, lastName);
    document.getElementById("display").innerHTML = text;
}

const fullName = (firstName, lastName) => (firstName.charAt(0) + lastName.charAt(0));
