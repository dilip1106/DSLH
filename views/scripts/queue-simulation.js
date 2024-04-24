var num = document.getElementById('push-btn');

var number = document.getElementById('number');
const stack = [];
var noofele = 0;
var rear = -1;
var front = -1;

var top1 = 0;
var diff = 0;
var left1 = 70;
var left2 = 20;

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
  else if (rear == 9) {
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = "Queue Overflow";
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
    var whiteElem = document.getElementById('box');
    number.innerHTML = num.value;
    num.value = "";
    disable();

    var d = (110 + diff) / 180;
    var poe = 0, poe1 = 0;
    var anim = setInterval(animate, 1);
    var x = 1;

    function animate() {
      if (poe1 >= 115 + diff) {
        whiteElem.style.left = 110 + "px";
        if (x == 1)
          stackValue();
        x++;
        document.getElementById('box').style.opacity = 0;
        clearInterval(anim);
      }
      else {
        poe += 1;
        poe1 += d;
        if (poe <= 180) {
          whiteElem.style.top = poe + "px";
        }
        if (poe1 <= 110 + diff)
          whiteElem.style.left = poe1 + "px";
      }
    }
  }

}
function stackValue() {
  rear++;
  if (front == -1) {
    front = 0;
    left2 += 100;
    document.getElementById("front-no").style.left = left2 + "px";
    var popItem = document.getElementById('front-ele');
    popItem.innerHTML = front;
  }
  var stackbox = document.getElementById(`box${rear}`);
  stackbox.innerHTML = number.innerHTML;
  diff = diff + 100;
  left1 = left1 + 100;
  document.getElementById("rear-no").style.left = left1 + "px";
  document.getElementById(`box${rear}`).style.border = 'solid';
  document.getElementById(`box${rear}`).style.borderColor = '#ffbb38';
  var topItem = document.getElementById('rear-ele');
  document.getElementById('last-push-text').innerHTML = number.innerHTML;
  topItem.innerHTML = rear;
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
  if (front == -1)
    front = 0;

  if (front == rear + 1) {
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = "Queue Underflow";
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
  else if (front <= 9) {
    
    disable();
    document.getElementById('pop-algo').style.opacity = 1;
    var popItem = document.getElementById(`box${front}`);
    popItem.innerHTML = '';

    top1 = top1 + 52;
    left2 = left2 + 100;
    popItem.innerHTML = '';
    document.getElementById(`box${front}`).style.border = '';
    document.getElementById(`box${front}`).style.borderColor = '';
    document.getElementById("front-no").style.left = left2 + "px";
    var msgbox = document.getElementById('message-box');
    msgbox.innerHTML = `${stack[front]} is popped from the stack`;
    var popItem = document.getElementById('front-ele');
    document.getElementById('last-pop-text').innerHTML = stack[front];
    popItem.innerHTML = front + 1;
    front++;
    
    const timeout=setTimeout(alogText,2000);
    function alogText(){
      document.getElementById('pop-algo').style.opacity = 0;
      enable();
    }
  }
}


function clearStack() {
  if (front == -1)
    front = 0;
  var i = front;
  var popItem;
  while (i != rear + 1) {
    popItem = document.getElementById(`box${front}`);
    popItem.innerHTML = '';
    document.getElementById(`box${front}`).style.border = '';
    document.getElementById(`box${front}`).style.borderColor = '';
    document.getElementById("front-no").style.left = left2 + "px";
    left2 = left2 + 100;
    console.log()
    front++;
    i++;
  }
  const stack = [];
  noofele = 0;
  rear = -1;
  front = -1;
  top1 = 0;
  diff = 0;
  left1 = 70;
  left2 = 20;
  document.getElementById("rear-no").style.left = left1 + "px";
  document.getElementById("front-no").style.left = left2 + "px";
  var msgbox = document.getElementById('message-box');
  msgbox.innerHTML = `Queue is cleared!`;
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

