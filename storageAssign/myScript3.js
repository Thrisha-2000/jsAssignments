function clickCounter(){
    if(typeof(Storage) !== "undefined") {

        //local storage counter
        if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
          localStorage.clickcount = 1;
        }
        document.getElementById("localCounter").innerHTML = "Local Counter Value = " + localStorage.clickcount;


        //session storage counter
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
          } else {
            sessionStorage.clickcount = 1;
          }
          document.getElementById("sessionCounter").innerHTML = "Session Counter Value = " + sessionStorage.clickcount;
    }
    
    else {
        document.getElementById("error").innerHTML = "Sorry, your browser does not support web storage...";
    }
}