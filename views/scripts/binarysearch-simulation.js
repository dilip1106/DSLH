var pt = -1;
var ia = [];
var xa = [];
var issorting = false;
var number = document.getElementById("input");
var arr = [];
var arrow = document.querySelector("#front-no");
var startp = document.querySelector("#front-start");
startp.style.opacity = 0;
var midp = document.querySelector("#front-mid");
midp.style.opacity = 0;
var highp = document.querySelector("#front-high");
highp.style.opacity = 0;
var box = document.querySelector(".box");
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    number.value = "";
  } else if (e.key === "C" || e.key === "c") {
    cleararr();
  } else if (e.key === "R" || e.key === "r") {
    remove();
  } else if (e.key === "S" || e.key === "s") {
    linear();
  }
});

function disable() {
  document.getElementById("push").disabled = true;
  document.getElementById("pop").disabled = true;
  document.getElementById("clear").disabled = true;
  document.getElementById("binary").disabled = true;
}
function enable() {
  document.getElementById("push").disabled = false;
  document.getElementById("pop").disabled = false;
  document.getElementById("clear").disabled = false;
  document.getElementById("binary").disabled = false;
}
function off() {
  var alert = document.querySelector(".alert");
  alert.classList.remove("on");
}

function add() {
  arrow.style.opacity = 1;
  if (pt >= 6) {
    var alert = document.querySelector(".alert");
    var para = document.querySelector(".para");
    para.innerHTML = "ARRAY IS OVERFLOW";
    alert.classList.add("on");
  } else if (number.value == "") {
    var alert = document.querySelector(".alert");
    var para = document.querySelector(".para");
    para.innerHTML = "ENTER A VALID NO PLEASE !";
    alert.classList.add("on");
  } else {
    pt++;
    arr.push(number.value);
    document.querySelector(`.box${pt}`).innerHTML = number.value;
    var box = document.querySelector(`.box${pt}`);
    box.classList.add("active");
    var left = arrow.offsetLeft;
    left = left + 160;
    arrow.style.left = left + "px";
    number.value = "";
    console.log(arr);
  }
  console.log(pt);
}
function remove() {
  arrow.style.opacity = 1;
  if (pt == -1) {
    var alert = document.querySelector(".alert");
    var para = document.querySelector(".para");
    para.innerHTML = "CANNOT REMOVE !";
    alert.classList.add("on");
  } else {
    arr.pop();
    var boxexit = document.querySelector(`.box${pt}`);
    boxexit.classList.remove("active");

    var left = arrow.offsetLeft;
    left = left - 160;
    arrow.style.left = left + "px";
    pt--;
    console.log(arr);
  }
}

function cleararr() {
  arrow.style.opacity = 1;
  if (pt == -1) {
    var alert = document.querySelector(".alert");
    var para = document.querySelector(".para");
    para.innerHTML = "OOP's!! IT SEEMS LIKE EMPTY.";
    alert.classList.add("on");
  } else {
    while (pt != -1) {
      arr.pop();
      var boxexit = document.querySelector(`.box${pt}`);
      boxexit.classList.remove("active");

      var left = arrow.offsetLeft;
      left = left - 160;
      arrow.style.left = left + "px";
      pt--;
    }
    console.log(arr);
  }
}

function arraySortedOrNot() {
  // Array has one or no element
  var n = arr.length;

  for (let i = 1; i < n; i++)
    // Unsorted pair found
    if (parseInt(arr[i - 1]) > parseInt(arr[i])) {
      return false;
    }

  // No unsorted pair found
  return true;
}
var startarr = [];
var endarr = [];
var midarr = [];
var y;
var i = 0;

function binary() {
  var key = document.querySelector("#input");
  var x = key.value;
  var alert = document.querySelector(".alert");
  var para = document.querySelector(".para");
  var flag = 0;
  var i = 0;
  var j = 0;
  if (!arraySortedOrNot()) {
    para.innerHTML = "Please Enter a sorted Array";
    alert.classList.add("on");
    console.log("mai chal gaya");
  } else if (key.value === "") {
    para.innerHTML = "Please Enter the key to search";
    alert.classList.add("on");
  } else {
    y = binarysearch();
    arrow.style.opacity = 0;
    midp.style.opacity = 1;
    startp.style.opacity = 1;
    highp.style.opacity = 1;
    console.log(startarr);
    console.log(endarr);
    console.log(midarr);
    console.log(y);
    function myLoop() {
      //  create a loop function
      setTimeout(function () {
        //  call a 3s setTimeout when the loop is called
        var midbox = document.querySelector(`.box${midarr[i]}`);
        console.log(midarr[i]);
        midp.style.left = "0px";
        startp.style.left = "0px";
        highp.style.left = "0px";
        startp.style.left = 360 + startarr[i] * 160 + "px";
        midp.style.left = 360 + midarr[i] * 160 + "px";
        highp.style.left = 365 + endarr[i] * 160 + "px";
        midbox.classList.add("up");
        for (let k = 0; k < 7; k++) {
          var box = document.querySelector(`.box${k}`);
          box.style.opacity = 0.5;
        }
        for (let k = startarr[i]; k <= endarr[i]; k++) {
          var box = document.querySelector(`.box${k}`);
          box.style.opacity = 1;
        }
        setTimeout(() => {
          if (midbox.innerHTML == x) {
            flag = 1;
            midbox.style.backgroundColor = "green";
          } else {
            midbox.style.backgroundColor = "red";
          }

          i++;
        }, 1000);
        setTimeout(() => {
          midbox.classList.remove("up");
          midbox.style.backgroundColor = "white";
        }, 2000); //  your code here

        j++; //  increment the counter
        if (j < midarr.length) {
          //  if the counter < 10, call the loop function
          myLoop(); //  ..  again which will trigger another
        } //  ..  setTimeout()
      }, 2000);
    }
    myLoop();
    setTimeout(() => {
      if (flag == 1) {
        para.innerHTML = `Element Found at ${y}`;
      } else {
        para.innerHTML = "Element Not Found";
      }
      alert.classList.add("on");
    }, midarr.length * 2550);
    setTimeout(() => {
      enable();
    }, 20000);
  }
}

function binarysearch() {
  let key = document.querySelector("#input");
  let x = key.value;
  let start = 0;
  let end = arr.length - 1;
  var mid1;
  console.log("Arr hu mai ", arr);
  // Iterate while start not meets end
  while (start <= end) {
    mid1 = Math.floor((start + end) / 2);
    midarr.push(mid1);
    startarr.push(start);
    endarr.push(end);
    if (parseInt(arr[mid1]) == parseInt(x)) {
      return mid1;
    } else if (parseInt(arr[mid1]) < parseInt(x)) {
      start = mid1 + 1;
    } else {
      end = mid1 - 1;
    }
  }

  return -1;
}
