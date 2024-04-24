var pt = -1;
var duparr=[];
var ia = [];
var xa = [];
var issorting = false;
var number = document.getElementById("input");
var arr = [];
var arrow = document.querySelector("#front-no");
var ipointer = document.querySelector("#front-i");
ipointer.style.opacity = 0;
var jpointer = document.querySelector("#front-j");
jpointer.style.opacity = 0;
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    number.value = "";
  } else if (e.key === "C" || e.key === "c") {
    cleararr();
  } else if (e.key === "R" || e.key === "r") {
    remove();
  } else if (e.key === "S" || e.key === "s") {
    bubble();
  } else if (e.key === "f" || e.key === "F") {
  fillarr();
}
});

function disable() {
  document.getElementById("push").disabled = true;
  document.getElementById("pop").disabled = true;
  document.getElementById("clear").disabled = true;
  document.getElementById("sort").disabled = true;
}
function enable() {
  document.getElementById("push").disabled = false;
  document.getElementById("pop").disabled = false;
  document.getElementById("clear").disabled = false;
  document.getElementById("sort").disabled = false;
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
  number.value = "";
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
  number.value = "";
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
function autofill(number) {
  number.value = "";
  pt++;
  arr.push(number);
  document.querySelector(`.box${pt}`).innerHTML = number;
  var box = document.querySelector(`.box${pt}`);
  box.classList.add("active");

  var left = arrow.offsetLeft;
  left = left + 160;
  arrow.style.left = left + "px";
  console.log(arr);
}
function fillarr() {
  const randomset = new Set();
  while (randomset.size < 7) {
    randomset.add(Math.floor(Math.random() * 1000));
  }
  let myArr = Array.from(randomset);
  console.log(myArr);
  for (let i = 0; i < 7; i++) {
    var num = myArr[i];
    autofill(num);
  }
}

  function userinput() {
    const hello = document.querySelector(".unsorted");
    if (hello.classList.contains("fade-out")) {
      hello.classList.remove("fade-out");
    } else {
      hello.classList.add("fade-out");
    }
}

function displayunsorted(){
  var unsorted=document.querySelector('.unsorted');
  for(let q=0;q<duparr.length;q++){
    var ubox=document.querySelector(`.ubox${q}`);
    ubox.innerHTML=duparr[q];
  }
  unsorted.style.opacity=1;
}

var iarr = [6, 11, 15, 18, 20, 21];
var jp = 0;
var k = 0;
var z = 0;
var ct = 0;

function sortedloop() {
  //  create a loop function
  setTimeout(function () {
    //  call a 3s setTimeout when the loop is called
    arrow.style.opacity = 0;
    ipointer.style.opacity = 1;
    jpointer.style.opacity = 1;
    var boxj = document.querySelector(`.box${jp}`);
    var boxj1 = document.querySelector(`.box${jp + 1}`);
    ipointer.style.left = "0px";
    jpointer.style.left = "0px";
    ipointer.style.left = jp * 160 + 370 + "px";
    jpointer.style.left = jp * 160 + 530 + "px";
    boxj.classList.add("up");
    boxj1.classList.add("up");

    setTimeout(() => {
      boxj.style.backgroundColor = "green";
      boxj1.style.backgroundColor = "green";
    }, 500);
    setTimeout(() => {
      boxj.classList.remove("up");
      boxj1.classList.remove("up");
      boxj.style.backgroundColor = "white";
      boxj1.style.backgroundColor = "white";
    }, 1000); //  your code here

    // j++; //  increment the counter
    if (jp++ < 5) {
      ct++; //  if the counter < 10, call the loop function
      sortedloop(); //  ..  again which will trigger another
    } //  ..  setTimeout()
    if(jp==6){
      // displayunsorted();
    }
  }, 2000);
}

function bubble() {
  number.value = "";
  duparr=arr.slice();
  if (pt == -1) {
    var alert = document.querySelector(".alert");
    var para = document.querySelector(".para");
    para.innerHTML = "OOP's!! IT SEEMS LIKE EMPTY.";
    alert.classList.add("on");
  } else {

    var n = arr.length;
    var i, j, temp;
    var swapped;
    var count = 0;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          count++;
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      // IF no two elements were
      // swapped by inner loop, then break
      if (swapped == false) {
        break;
      }
    }
    if (count == 0) {
      console.log("beter wala run hua");
      sortedloop();
    } else {
      myLoop();
    }
    console.log(arr);
  }
}
function myLoop() {
  //  create a loop function
  setTimeout(function () {
    if (ct == iarr[k]) {
      jp = 0;
      k++;
    }
    arrow.style.opacity = 0;
    ipointer.style.opacity = 1;
    jpointer.style.opacity = 1;
    //  call a 3s setTimeout when the loop is called
    var boxj = document.querySelector(`.box${jp}`);
    var boxj1 = document.querySelector(`.box${jp + 1}`);
    ipointer.style.left = "0px";
    jpointer.style.left = "0px";
    ipointer.style.left = jp * 160 + 370 + "px";
    jpointer.style.left = jp * 160 + 530 + "px";
    boxj.classList.add("up");
    boxj1.classList.add("up");
    jp++;
    setTimeout(() => {
      if (parseInt(boxj.innerHTML) > parseInt(boxj1.innerHTML)) {
        boxj.style.backgroundColor = "red";
        boxj1.style.backgroundColor = "red";
        var temp = boxj.innerHTML;
        boxj.innerHTML = boxj1.innerHTML;
        boxj1.innerHTML = temp;
      } else {
        boxj.style.backgroundColor = "green";
        boxj1.style.backgroundColor = "green";
      }
    }, 500);
    setTimeout(() => {
      boxj.classList.remove("up");
      boxj1.classList.remove("up");
      boxj.style.backgroundColor = "white";
      boxj1.style.backgroundColor = "white";
    }, 1000); //  your code here

    // j++; //  increment the counter
    if (z++ < 20) {
      ct++; //  if the counter < 10, call the loop function
      myLoop(); //  ..  again which will trigger another
    } //  ..  setTimeout()
    if(z==21){
      displayunsorted();
    }
  }, 2000);
}
