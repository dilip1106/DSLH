var pt = -1;
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
    number.value = "";
    cleararr();

  } else if (e.key === "R" || e.key === "r") {
    number.value = "";
    remove();
   
  } else if (e.key === "Enter" ) {
    number.value = "";
    linear();
    
  }
  else if (e.key === "f" || e.key === "F") {
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
  var alert = document.querySelector(".Alert");
  alert.classList.remove("on");
}

function add() {
  arrow.style.opacity = 1;
  if (pt >= 6) {
    var alert = document.querySelector(".Alert");
    var para = document.querySelector(".para");
    para.innerHTML = "ARRAY IS OVERFLOW";
    alert.classList.add("on");
  } else if (number.value == "") {
    var alert = document.querySelector(".Alert");
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
    var alert = document.querySelector(".Alert");
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
    var alert = document.querySelector(".Alert");
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

function linear() {
  var key = document.querySelector("#input");
  var alert = document.querySelector(".Alert");
  var para = document.querySelector(".para");
  var flag = 0;
  var i;
  var j=0;
  if (key.value === "") {
    para.innerHTML = "Please Enter the key to search";
    alert.classList.add("on");
  } else {
    ipointer.style.opacity=1;
    for ( i = 0; i < arr.length; i++) {
      if (key.value == arr[i]) {
        flag = 1;
        console.log(i);
        break;
      }
    }
    myLoop();
  }

  function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 3s setTimeout when the loop is called
      var a1 = document.querySelector(`.box${j}`);
      a1.classList.add("up");
      setTimeout(() => {
        if(key.value==a1.innerHTML){
          a1.style.backgroundColor="green";
          
        }
        else{
          
            a1.style.backgroundColor = "red";
            
        }
      }, 1000);
      setTimeout(() => {
        a1.classList.remove("up");
        a1.style.backgroundColor = "white";
        if(key.value!=a1.innerHTML){
          var ileft = ipointer.offsetLeft;
          ileft = ileft + 160;
          ipointer.style.left = ileft + "px";
        }
        
      }, 2000); //  your code here
      
      j++; //  increment the counter
      if (j <= i) {
        //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another
      } //  ..  setTimeout()
    }, 2000);

  }
  //myLoop();
  // setTimeout(()=>{
  //   if (flag == 1) {
  //     var b1 = document.querySelector(`.box${i}`);
  //     b1.style.backgroundColor="green";
  //   }
  // },(i+1)*2500);
  setTimeout(() => {
    if (flag == 1) {
      var b1 = document.querySelector(`.box${i}`);
      para.innerHTML = `Element Found at ${i}`;
    }
    else{
      para.innerHTML = "Element Not Found";
 
    }
    alert.classList.add("on");
  }, ((i+1)*2900)); 
  setTimeout(() => {
    enable();
  },20000);
}
