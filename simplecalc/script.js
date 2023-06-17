"use strict"
function add(){
    let n1=+id_tbox1.value;
    let n2=+id_tbox2.value;
    let res=n1+n2;
    document.querySelector('#id_result').innerHTML=`result = ${res}`
}

function sub(){
    let n1=+id_tbox1.value;
    let n2=+id_tbox2.value;
    let res=n1-n2;
    document.querySelector('#id_result').innerHTML=`result = ${res}`
}
function multiply(){
    let n1=+id_tbox1.value;
    let n2=+id_tbox2.value;
    let res=n1*n2;
    document.querySelector('#id_result').innerHTML=`result = ${res}`
}
function divide(){
    let n1=+id_tbox1.value;
    let n2=+id_tbox2.value;
    let res=n1/n2;
    document.querySelector('#id_result').innerHTML=`result = ${res}`
}