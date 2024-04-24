var pt = -1;
var ia = [];
var xa = [];
var issorting=false;
var number = document.getElementById("input");
var arr = [];
var arrow=document.querySelector('#front-no');
var ipointer=document.querySelector('#front-i');
ipointer.style.opacity=0;
var jpointer=document.querySelector('#front-j');
jpointer.style.opacity=0;
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter" ) {
    add();
    number.value='';
  } else if (e.key === "C" || e.key === "c"  ) {
    cleararr();
  } else if (e.key === "R" || e.key === "r" ) {
    remove();
  } else if (e.key === "S" || e.key === "s"  ) {
    selectionsort();
  }else if (e.key === "f" || e.key === "F") {
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
function off(){
  var alert = document.querySelector('.alert');
  alert.classList.remove('on');
}

function add() {
  arrow.style.opacity=1;
  if (pt>=6) {
    var alert = document.querySelector('.alert');
    var para=document.querySelector('.para');
    para.innerHTML="ARRAY IS OVERFLOW";
    alert.classList.add('on');
  } else if (number.value == "") {
    var alert = document.querySelector('.alert');
    var para=document.querySelector('.para');
    para.innerHTML="ENTER A VALID NO PLEASE !";
    alert.classList.add('on');
  } else {
    
      pt++;
    arr.push(number.value);
    document.querySelector(`.box${pt}`).innerHTML = number.value;
    var box = document.querySelector(`.box${pt}`);
    box.classList.add("active");

    var left=arrow.offsetLeft;
    left=left+160;
    arrow.style.left=left+"px";
    number.value = "";
    console.log(arr);
    
  }
  console.log(pt);
}
function remove() {
  arrow.style.opacity=1;
  if (pt == -1) {
    var alert = document.querySelector('.alert');
    var para=document.querySelector('.para');
    para.innerHTML="OOP's!! IT SEEMS LIKE EMPTY.";
    alert.classList.add("on");
  } else {
    arr.pop();
    var boxexit = document.querySelector(`.box${pt}`);
    boxexit.classList.remove("active");

    var left=arrow.offsetLeft;
    left=left-160;
    arrow.style.left=left+"px";
    pt--;
    console.log(arr);
  }
}

function cleararr() {
  arrow.style.opacity=1;
  if (pt == -1) {
    var alert = document.querySelector('.alert');
    var para=document.querySelector('.para');
    para.innerHTML="OOP's!! IT SEEMS LIKE EMPTY.";
    alert.classList.add('on');
  } else {
    while (pt != -1) {
      arr.pop();
      var boxexit = document.querySelector(`.box${pt}`);
      boxexit.classList.remove("active");

    var left=arrow.offsetLeft;
    left=left-160;
    arrow.style.left=left+"px";
      pt--;
    }
    console.log(arr);
  }
}
function autofill(number) {
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


function selectionsort() {
  disable();
  arrow.style.opacity=0;
  ipointer.style.opacity=1;
  jpointer.style.opacity=1;
  if (pt==-1) {
    var alert = document.querySelector('.alert');
    var para=document.querySelector('.para');
    para.innerHTML="OOP's!! IT SEEMS LIKE EMPTY.";
    alert.classList.add('on');
  } else {
    issorting=true;
    for (let i = 0; i < arr.length; i++) {
      let x = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (parseInt(arr[j]) < parseInt(arr[x])) {
          x = j;
        }
      }
      ia.push(i);
      xa.push(x);
      let temp = arr[i];
      arr[i] = arr[x];
      arr[x] = temp;
      console.log(arr);
    }
  }
  console.log(xa);
  console.log(ia);
  var i = 0; //  set your counter to 1

  function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 3s setTimeout when the loop is called
      console.log("hello");
      var jleft=xa[i]*150+310;
      // jpointer.style.left="0px";
      jpointer.style.left=jleft+"px";
         jleft=0;
      var a1 = document.querySelector(`.box${ia[i]}`);
      var a2 = document.querySelector(`.box${xa[i]}`);
      a1.classList.add("up");
      a2.classList.add("up");
      setTimeout(() => {
        a1.style.backgroundColor = "red";
        a2.style.backgroundColor = "red";
        let temp = a1.innerHTML;
        a1.innerHTML = a2.innerHTML;
        a2.innerHTML = temp;
      }, 2000);
      setTimeout(() => {
        a1.classList.remove("up");
        a2.classList.remove("up");
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "white";
        var ileft=ipointer.offsetLeft;
      ileft=ileft+160;
      ipointer.style.left=ileft+"px";
      
      }, 3000); //  your code here
      i++; //  increment the counter
      if (i < 7) {
        //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another
      } //  ..  setTimeout()
    }, 3000);
  }

  myLoop();
  setTimeout(()=>{
    ipointer.style.opacity=0;
    jpointer.style.opacity=0;
    enable();
  },pt*4000);
  
}

