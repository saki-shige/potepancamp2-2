document.addEventListener('DOMContentLoaded',function(){

//液晶初期
document.getElementById('result').textContent = '0';
let progress="";
//一つ前の入力 0：無し 1:数字 2:演算子
let preBtn = 0;


//ボタン操作
document.getElementById("btnNum1").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum2").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum3").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum4").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum5").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum6").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum7").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum8").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum9").addEventListener('click',function(){
 makeString(this);
 preBtn = 1;
});

document.getElementById("btnNum0").addEventListener('click',function(){
 if (preBtn === 1){
   makeString(this);
   preBtn = 1;
 }
});

document.getElementById("btnNum00").addEventListener('click',function(){
 if (preBtn === 1){
   makeString(this);
   preBtn = 1;
 }
});

document.getElementById("btnAdd").addEventListener('click',function(){
 if (preBtn === 0 | preBtn === 1){
   makeString(this);
   preBtn = 2;
 }
});

document.getElementById("btnPull").addEventListener('click',function(){
 if (preBtn === 0 | preBtn === 1){
   makeString(this);
   preBtn = 2;
 }
});

document.getElementById("btnMulti").addEventListener('click',function(){
 if (preBtn === 1){
   makeString(this);
   preBtn = 2;
 }
});

document.getElementById("btnDot").addEventListener('click',function(){
 if (preBtn ===1){
   makeString(this);
   preBtn = 2;
 }
});

document.getElementById("btnDiv").addEventListener('click',function(){
 if (preBtn ===1){
   makeString(this);
   preBtn = 2;
 }
});

document.getElementById("btnClear").addEventListener('click',function(){
 progress = "";
 document.getElementById('result').textContent = "0";
 preBtn = 0;
});

document.getElementById("btnCalc").addEventListener('click',function(){
 if (preBtn == 1){
   calcString();
   progress = "";
   preBtn = 0;
 }
});



function makeString(i){
    progress = progress + i.getAttribute("value");
    document.getElementById('result').textContent = progress;
    return progress;
}

function calcString(){
  progress = new Function("return " + progress + ";")();
  document.getElementById('result').textContent = progress;
}



$(document).ready(function(){
  
  $('.btn').on('click', function() {
    $('.btn').css('border','solid 1px #000000');
    $(this).css('border','solid 1px #0000ff');
  });
});
    
});