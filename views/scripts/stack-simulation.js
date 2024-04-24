var num = document.getElementById('push-btn');
var number = document.getElementById('number');
const stack = [];
var noofele = 0;
// var push=document.getElementById('push');
// var pop=document.getElementById('pop');
// var clear=document.getElementById('clear');

var no = 0;
var top = 0;
var diff = 0;
var top1 = 635;


function disable() {
  document.getElementById("push").disabled = true;
  document.getElementById("pop").disabled = true;
  document.getElementById("clear").disabled = true;
  document.getElementById("push-btn").disabled = true;

}

function enable() {
  document.getElementById("push").disabled = false;
  document.getElementById("pop").disabled = false;
  document.getElementById("clear").disabled = false;
  document.getElementById("push-btn").disabled = false;
}

function move() {
  if (num.value == '') {
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = "Enter a valid value";
    var temp = 0;
    var bgcolor = ["#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A"];
    function clrchng() {
      msgbox.style.background = bgcolor[temp];
      temp = (temp + 1) % bgcolor.length;
      if (temp == 11) {
        msgbox.style.background = "linear-gradient(to bottom right, #EF4765, #FF9A5A)";
        clearInterval(clr);
      }
    }
    clr = setInterval(clrchng, 120);
  }
  else if (no == 10) {
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = "Stack Overflow";
    var temp = 0;
    var bgcolor = ["#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A"];
    function clrchng() {
      msgbox.style.background = bgcolor[temp];
      temp = (temp + 1) % bgcolor.length;
      if (temp == 11) {
        msgbox.style.background = "linear-gradient(to bottom right, #EF4765, #FF9A5A)";
        clearInterval(clr);
      }
    }
    clr = setInterval(clrchng, 120);
  }
  else {
    document.getElementById('push-algo').style.opacity = 1;
    document.getElementById('box').style.opacity = 1;
    top = no + 1;
    var whiteElem = document.getElementById('box');
    number.innerHTML = num.value;
    num.value = "";
    disable();
    console.log("hell");
    var poe = 0, poe1 = 0;
    var time = 40 * top;
    var anim = setInterval(animate, 1);
    var x = 1;
    var d = (550 - diff) / 400;
    function animate() {
      if (poe1 >= 825) {
        whiteElem.style.left = 825 + "px";
        if (x == 1)
          stackValue();
        x++;
        document.getElementById('box').style.opacity = 0;
        clearInterval(anim);
      }
      else {
        poe += d;
        poe1 += 2;
        if (poe + diff <= 560) {
          whiteElem.style.top = poe + "px";
        }
        if (poe1 <= 820)
          whiteElem.style.left = poe1 + "px";
      }
    }
  }

}
function stackValue() {
  no++;
  var stackbox = document.getElementById(`box${no}`);
  stackbox.innerHTML = number.innerHTML;
  diff = diff + 50;
  top1 = top1 - 52;
  document.getElementById("top-no").style.top = top1 + "px";
  document.getElementById(`box${no}`).style.border = 'solid';
  document.getElementById(`box${no}`).style.borderColor = '#ffbb38';
  if (no != 1)
    document.getElementById(`box${no}`).style.borderBottomWidth = '1px';
  var topItem = document.getElementById('top-text');
  document.getElementById('last-push-text').innerHTML = number.innerHTML;
  topItem.innerHTML = no - 1;
  var msgbox = document.getElementById('message-box');
  msgbox.innerHTML = `${number.innerHTML} is pushed into the stack`;
  stack[noofele++] = number.innerHTML;
  num.value = '';
  const timeout=setTimeout(alogText,2000);
  function alogText(){
    enable();
    document.getElementById('push-algo').style.opacity = 0;
  }
}

function pop() {

  if (no == -0) {
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = "Stack Underflow";
    var temp = 0;
    var bgcolor = ["#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A"];
    function clrchng() {
      msgbox.style.background = bgcolor[temp];
      temp = (temp + 1) % bgcolor.length;
      if (temp == 11) {
        msgbox.style.background = "linear-gradient(to bottom right, #EF4765, #FF9A5A)";
        clearInterval(clr);
      }
    }
    clr = setInterval(clrchng, 120);
  }
  else {
    disable();
    document.getElementById('pop-algo').style.opacity = 1;
    var popItem = document.getElementById(`box${no}`);
    popItem.innerHTML = '';
    diff = diff - 50;
    top1 = top1 + 52;
    document.getElementById(`box${no}`).style.border = '';
    document.getElementById(`box${no}`).style.borderColor = '';
    document.getElementById("top-no").style.top = top1 + "px";
    if (no != 1){
      document.getElementById(`box${no}`).style.borderBottomWidth = '';
    }
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = `${stack[--noofele]} is popped from the stack`;
    var topItem = document.getElementById('top-text');
    document.getElementById('last-pop-text').innerHTML = stack[noofele]
    no--;
    topItem.innerHTML = no - 1;
    const timeout=setTimeout(alogText,2000);
    function alogText(){
      document.getElementById('pop-algo').style.opacity = 0;
      enable();
    }
  }
}

function clearStack() {
  var i = 0;
  while (i != no) {
    var popItem = document.getElementById(`box${no}`);
    popItem.innerHTML = '';
    document.getElementById(`box${no}`).style.border = '';
    document.getElementById(`box${no}`).style.borderColor = '';
    if (no != 1)
      document.getElementById(`box${no}`).style.borderBottomWidth = '';
    no--;
  }
  top1 = 635;
  document.getElementById("top-no").style.top = top1 + "px";
  diff = 0;
  var msgbox = document.getElementById('message-box');
  msgbox.innerHTML = `Stack is cleared!`;
  var temp = 0;
  var bgcolor = ["#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A", "#EF4765", "#FF9A5A"];
  function clrchng() {
    msgbox.style.background = bgcolor[temp];
    temp = (temp + 1) % bgcolor.length;
    if (temp == 11) {
      msgbox.style.background = "linear-gradient(to bottom right, #EF4765, #FF9A5A)";
      clearInterval(clr);
    }
  }
  clr = setInterval(clrchng, 120);
}