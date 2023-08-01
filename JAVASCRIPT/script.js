function qua(){
    let b1=Number(prompt("Digite o valor da base"));
    let a1=Number(prompt("Digite o valor da altura "));
    let resultado=b1*a1;
    alert("o resultado da area é" +resultado+"m²");
    document.getElementById('qua').innerHTML='area de resultado'+resultado+'m²'
}

function tri(){
    let b2=Number(prompt("Digite o valor da base"));
    let a2=Number(prompt("Digite o valor da altura "));
    let resultado=(b2*a2)/2;
    alert("o resultado da area é" +resultado+"m²");
    document.getElementById('tri').innerHTML='area de resultado'+resultado+'m²'
}

function ret(){
    let b3=Number(prompt("Digite o valor da base"));
    let a3=Number(prompt("Digite o valor do lado "));
    let resultado=b3*a3;
    alert("o resultado da area é" +resultado+"m²");
    document.getElementById('ret').innerHTML='area de resultado'+resultado+'m²'
}

function los(){
    let d1=Number(prompt("Digite o valor da d"));
    let d2=Number(prompt("Digite o valor do d "));
    let resultado=(d1*d2)/2;
    alert("o resultado da area é" +resultado+"m²");
    document.getElementById('los').innerHTML='area de resultado'+resultado+'m²'
}

function cir(){
    let a=3.14;
    let raiz=Number(prompt("Digite o valor do d "));
    let resultado=p*(r**2);
    alert("o resultado da area é" +resultado+"m²");
    document.getElementById('cir').innerHTML='area de resultado'+resultado+'m²'
}