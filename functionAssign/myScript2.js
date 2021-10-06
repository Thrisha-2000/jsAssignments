// Question 2

function callOther(){
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    text = fullName(firstName, lastName);
    document.getElementById("display").innerHTML = text;
}

const fullName = (firstName, lastName) => (firstName[0] + lastName[0]);


