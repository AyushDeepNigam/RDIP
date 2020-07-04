function dispDate() {
    document.getElementById("date").value = "2020-07-04";
  }
  
  function dispMessage() {
    document.getElementById("chTime").innerHTML = Date();
    alert("The time is displayed.");
  }
  
  function checkNum() {
    var numCheck = document.getElementById("numInput").value;
    if (numCheck > 9 && numCheck < 101) {
      var n;
      var fn = [];
  
      fn[0] = 0;
      fn[1] = 1;
      for (n = 2; n <= numCheck; n++) {
        fn[n] = fn[n - 2] + fn[n - 1];
      }
  
      alert(
        "The number is between 10 and 100\nAnd here is the fibonacci sequence for the number:\n" +
          fn +
          "\n"
      );
    } else {
      alert("The number is not between 10 and 100");
    }
  }
  
  function checkVal() {
    var num, q;
    num = document.getElementById("check");
    num.innerHTML = "";
    q = document.getElementById("exp").value;
    try {
      if (q == "") throw "No Input!!";
      if (isNaN(q)) throw "Only numeric values allowed!";
      if (q > 100) throw "Number should not be greater than 100!";
      if (q < 10) throw "Number should not be lower than 10!";
    } catch (err) {
      num.innerHTML =  err;
    } finally {
      document.getElementById("exp").value = "";
    }
  }
  var str = "HTML is the most basic building block of the Web.";
  var res = str.split(" ");
  function word(p) {
    alert(res[p - 1]);
  }
  