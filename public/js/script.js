
var num=0;
  var button = document.getElementById('addtext');
  button.addEventListener('click', () => {
      num++;
    var text = document.createElement('input');
    console.log("text created");
    text.id="id"+num;
    text.type="text";
    var node = document.createTextNode("This is new textfield with id ="+text.id);
    console.log("node created");
    var label = document.createElement('label');
    label.id="l"+text.id;
    console.log("label created");
    label.appendChild(node);
    label.style.display="block";
    var linebreak=document.getElementById('br');
    document.body.appendChild(label);
   document.body.appendChild(text);
   document.body.appendChild(linebreak);
  });
var rembutton=document.getElementById("remtext");
rembutton.addEventListener('click',() => {
    var remid= document.getElementById("remid");
    var eraseid=remid.value;
    remid.value="";
    var remtext=document.getElementById(eraseid);
    document.body.removeChild(remtext);
    eraseid="l"+eraseid;
    var remlabel=document.getElementById(eraseid);
    document.body.removeChild(remlabel);
});