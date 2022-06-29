var Buttton = document.getElementById("btn");
var Result = document.getElementById("output");


function start(){
    Select = document.getElementById("status").value;
    if(Select== "open"){
        Result.innerHTML="we are " + Select;   
    }
    else{
        Result.innerHTML="we are " + Select;  
    }
}
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
function fun(){
var Onian = document.getElementById("onian").value;
var OnianPrice =document.getElementById("op");
var op = Onian*30;
 a = parseInt (OnianPrice.innerHTML = op);
tl();
}

 function fun_1(){
    var Corrot = document.getElementById("corrot").value;
    var CorrotPrice = document.getElementById("ct");
    var cp = Corrot*60;
    b =parseInt( CorrotPrice.innerHTML=cp);
    tl();
 }

 function fun_2(){
    var Brinjal=document.getElementById("brinjal").value;
    var BrinjalPrice=document.getElementById("bj");
    var bp=Brinjal*35;
    c =parseInt(BrinjalPrice.innerHTML=bp);
    tl();
 }

 function fun_3(){
    var Potato =document.getElementById("potato").value;
    var PotatoPrice=document.getElementById("pp");
    var pp=50*Potato;
    d =parseInt(PotatoPrice.innerHTML=pp);
    tl();
 }

 function fun_4(){
    var Tomato =document.getElementById("tomato").value;
    var TomatoPrice=document.getElementById("tp");
    var tp=Tomato*40;
    e = parseInt(TomatoPrice.innerHTML=tp);
    tl();
 }
 
function tl(){
var Total = document.getElementById("total");
var Itax  = document.getElementById("tax");
var GrandTotal=document.getElementById("gt");
var tol =a+b+c+d+e;
Total.innerHTML=tol;
var ttl=tol*.04;
Itax.innerHTML=ttl;
GrandTotal.innerHTML=tol+ttl
}




















