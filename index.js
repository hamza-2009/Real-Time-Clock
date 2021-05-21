let d , h , m , s , clock;
function clocky (){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();


if(h<=9){
    h= '0' + h;
}


if(h<=9){
    m= '0' + m;
}


if(h<=9){
    s= '0' + s;
}

clock = h + ":" + m + ":" + s;
color= "#" + h + m + s;
document.getElementById("clock").innerHTML=clock;
setTimeout(clocky , 1000);
}
clocky();