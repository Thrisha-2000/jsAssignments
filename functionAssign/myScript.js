
function myfunct(name, method_name){
    method_name(name);
}

function callOther(){
    let name = document.getElementById("demo").value;
    myfunct(name,displayName);
}

function displayName(name){
    document.getElementById("display").innerHTML = 
    "Hi " + name;
}
