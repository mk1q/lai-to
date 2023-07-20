//lãi_to

let a= prompt("hãy nhập số tiền vay"); parseInt (a) ;
let b= prompt("lãi suất");parseInt (b) ;
let n= prompt("hãy nhập số năm");parseInt (n) ;

let k= a*b/100 ;
let i= a+n*k ;
document.write("số tiền lãi là " + i );