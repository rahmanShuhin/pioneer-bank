var loginbtn=document.getElementById("log");
loginbtn.addEventListener("click",function(){
    var hid=document.getElementById("main");
    hid.style.display="none";
    var sh=document.getElementById("show");
    sh.style.display="block";
})
//Deposit button handler
var deposit_btn=document.getElementById("deposit_btn");
var withdraw_btn=document.getElementById("withdraw_btn");
var deposit=document.getElementById("deposit");
var balance=document.getElementById("balance");
var withdraw=document.getElementById("withdraw");
deposit_btn.addEventListener("click",function(){
    var deposit_value=document.getElementById("deposit_input").value;
    deposit.innerHTML=parseFloat(deposit.innerHTML)+parseFloat(deposit_value);
    balance.innerHTML=parseFloat(balance.innerHTML)+parseFloat(deposit_value);
    document.getElementById("deposit_input").value="";
    
})
withdraw_btn.addEventListener("click",function(){
    var withdraw_value=document.getElementById("withdraw_input").value;
    withdraw.innerHTML=parseFloat(withdraw.innerHTML)+parseFloat(withdraw_value);
    balance.innerHTML=parseFloat(balance.innerHTML)-parseFloat(withdraw_value);
})