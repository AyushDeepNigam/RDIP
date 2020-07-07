//----------Calculator----------//

//Function for clearing the display
function clr() {
  document.getElementById("calInp").value = "";
  return "";
}

//Clear button
function clearr(val) {
  document.getElementById("calInp").value = 0;
  clr();
  return 0;
}

//Function takes the input from the calculator buttons
function input(val) {
  document.getElementById("calInp").value += val;
  return document.getElementById("calInp").value;
}

//When + is pressed
function add() {
  x = document.getElementById("calInp").value;
  document.getElementById("calInp").value = 0;
  clr();
  op = "add";
  return "adds";
}

//Adds the numbers
function addition() {
  document.getElementById("calInp").value = parseFloat(x) + parseFloat(y);
  return x + y;
}

//When - is pressed
function sub() {
  x = document.getElementById("calInp").value;
  document.getElementById("calInp").value = 0;
  clr();
  op = "sub";
  return "sub";
}

//Subtract the numbers
function subtraction() {
  document.getElementById("calInp").value = parseFloat(x) - parseFloat(y);
  return x - y;
}

//When * is pressed
function mul() {
  x = document.getElementById("calInp").value;
  document.getElementById("calInp").value = 0;
  clr();
  op = "mul";
  return "mul";
}

//Multiplies the numbers
function multiplication() {
  document.getElementById("calInp").value = parseFloat(x) * parseFloat(y);
  return x * y;
}

//When / is pressed
function div() {
  x = document.getElementById("calInp").value;
  document.getElementById("calInp").value = 0;
  clr();
  op = "div";
  return "div";
}

//Multiplies the numbers
function division() {
  document.getElementById("calInp").value = parseFloat(x) / parseFloat(y);
  return x / y;
}

//When % is pressed
function per() {
  x = document.getElementById("calInp").value;
  x = x / 100;
  document.getElementById("calInp").value = 0;
  clr();
  op = "per";
  return x / y, "per";
}

//Calculates the percentage
function percentage() {
  document.getElementById("calInp").value = parseFloat(x) * parseFloat(y);
  return x * y;
}

function neg() {
  x = document.getElementById("calInp").value;
  document.getElementById("calInp").value = 0;
  clr();
  document.getElementById("calInp").value = "-" + x;
  return "-";
}

//Gives absolute value
function absolute() {
  Math.abs(x);
  document.getElementById("calInp").value = x;
  return x;
}
//Squareroot
function sqroot() {
  x = document.getElementById("calInp").value;
  // p = Number(x);
  r = Math.sqrt(x);

  if (Number.isInteger(r) == true) {
    document.getElementById("calInp").value = r;
    //     return r;
  } else {
    document.getElementById("calInp").value = r.toFixed(3);
  }
  return r;
}
//Function for displaying output
function solve() {
  y = document.getElementById("calInp").value;
  switch (op) {
    case "add":
      addition();
      break;
    case "sub":
      subtraction();
      break;
    case "mul":
      multiplication();
      break;
    case "div":
      division();
      break;
    case "per":
      percentage();
      break;
    default:
      alert("ok");
  }
  return "ok";
}

//----------Form Validation----------//

function valName() {
  var letters = /^[A-Za-z]/;
  var inpName = document.getElementById("valName").value;
  if (inpName.match(letters)) {
    document.getElementById("valNm").innerHTML = "&#10003; Name accepted.";
    return "&#10003; Name accepted.";
  } else {
    document.getElementById("valNm").innerHTML = "&#10060; Not a valid name!!";
    return "&#10060; Not a valid name!!";
  }
}
function valNum() {
  var num;
  num = document.getElementById("valPhn").value;
  var numbers = /^[0-9]{10}$/;
  if (num.match(numbers)) {
    document.getElementById("valPh").innerHTML = "&#10003; Number accepted.";
    return "&#10003; Number accepted.";
  } else {
    document.getElementById("valPh").innerHTML =
      "&#10060; Not a valid number!!";
    return "&#10060; Not a valid number!!";
  }
}
function valEMail() {
  var mail = document.getElementById("valMail").value;
  var emPat = /.+@.+\..+/;
  if (mail.match(emPat)) {
    document.getElementById("valEm").innerHTML = "&#10003; Email accepted.";
    return "&#10003; Email accepted.";
  } else {
    document.getElementById("valEm").innerHTML = "&#10060; Not a valid email!!";
    return "&#10003; Not a valid email!!";
  }
}
function valForm() {
  valName();
  valNum();
  valEMail();
  alert("You pressed submit");
  return "You pressed submit";
}

//----------Palindrome-Anagram----------//
function palindrome() {
  var palin = document.getElementById("pal").value;
  if ((palin = " ")) {
    document.getElementById("palMsg").innerHTML =
      "You have to enter <i>something</i> to make it work <span style='font-size:30px'> &#9786;</span>";
  } else {
    var rpalin = "";
    var len = palin.length - 1;
    for (i = len; i >= 0; i--) {
      rpalin += palin[i];
    }
    if (palin == rpalin) {
      document.getElementById("palMsg").innerHTML = "&#10003; Palindrome";
      return true;
    } else {
      document.getElementById("palMsg").innerHTML = "&#10060; Not a palindrome";
      return false;
    }
  }
}

function anagram() {
  var anaS = document.getElementById("anaStr").value;
  var anaW = document.getElementById("word").value;
    var a1;
    var a2;
    var a3 = anaS.split(" ").join("");
    var a4 = anaW.split(" ").join("");
    a1 = a3.toUpperCase().split("").sort().join("");
    a2 = a4.toUpperCase().split("").sort().join("");
    if (a1 == a2) {

      document.getElementById("anaMsg").innerHTML = "&#10003; Anagram";
      return true;}
     else {
      document.getElementById("anaMsg").innerHTML = "&#10060; Not an anagram";
      return false;
    }
  
}

//----------Game----------//
function game(){
	var a=Math.floor(Math.random()*1000);
	var b=Math.floor(Math.random()*1000);
	var players=["Human","Cockroach","Nuke"];
	var x=a%3;
	var y=b%3;
	var playerA=players[x];     
	var playerB=players[y];
	var winner="";
	if(playerA=="Cockroach"){
		if(playerB=="Human"){
			winner="Human";
		}
		else if(playerB=="Nuke"){
			winner="Cockroach";
		}
		else{
			winner="It's a tie!";
		}
		}
	if(playerA=="Human"){
		if(playerB=="Cockroach"){
			winner="Human";
		}
		else if(playerB=="Nuke"){
			winner="Nuke";
		}
		else{
			winner="It's a tie!";
		}
	}
	if(playerA=="Nuke"){
		if(playerB=="Human"){
			winner="Nuke"; 
		}
		else if(playerB=="Cockroach"){
			winner="Cockroach";
		}
		else{
			winner="It's a tie!";
		}
	}
	document.getElementById("PlayerA").innerHTML="Player 1 is <b>"+playerA+"</b>";
	document.getElementById("PlayerB").innerHTML="Player 2 is <b>"+playerB+"</b>";
	document.getElementById("val1").value=a;
	document.getElementById("val2").value=b;
	return winner;
}