function write(element){
    var bt = element.innerHTML.split('');
   
    element.innerHTML="";
    bt.forEach((letra,i )=> {
        console.log(letra)
       setTimeout(function(){
           element.innerHTML += letra;
           console.log(letra)
       },80 * i)
    });
}
var text = document.getElementById("ipil");

write(text)