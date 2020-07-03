document.write("<h1>1) A little about javascript</h1>");
document.write(
  "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. <br><p> Do not confuse JavaScript with the Java programming language. Both Java and JavaScript are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have a very different syntax, semantic, and use.</p>"
);

var x = 7;
var y = 8;
document.write(
  "<h1>2) Define and print two variables</h1>",
  "Variable x = ",
  x,
  " and variable y = ",
  y
);

var array = [1, 2, 3, 4, 5];
document.write(
  "<h1>3) Array type cast</h1>",
  "Given array ",
  array,
  "<br>Element at index three (assuming index starting from zero: ",
  array[3],
  "<br>"
);
document.write(
  "Third element of array / assuming index starting from one: ",
  array[2]
);
document.write("<br>Type before typecast: ", typeof array[3]);
var z = array[3].toString();
document.write("<br>Type after typecast: ", typeof z);

document.write("<br><h1>4) Tables and Operators</h1><br>");
var ip = 78,
  dc = 81,
  ml = 69;
var tot = ip + dc + ml;
var avg = tot / 3;
document.getElementById("table");

function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    alert("Input accepted.");
    return true;
  } else {
    alert("Only alphabets accepted.");
    return false;
  }
}

function validateForm() {
  return validatePhoneNumber() && validateSubjectSelection();
}

function validatePhoneNumber() {
  var num = document.phnum.num.value;
  if (isNaN(num) == true) {
    document.getElementById("number").innerHTML = " Enter Numeric values!!";
    return false;
  } else {
    return true;
  }
}

function validateSubjectSelection() {

    if (
      !document.getElementById("c1").checked &&
      !document.getElementById("c2").checked
    ) {
      console.log("Required");document.getElementById("number").innerHTML = " Select at least one checkbox!!";
      return false;
    } else {
      return true;
    }
}
