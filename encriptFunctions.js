var textarea = document.getElementById("convert");
var message = document.getElementById("message");
var converted = document.getElementById("converted");
var resultado = document.getElementById("resultado");
var copy = document.getElementById("copy");

function encrypt(text){
    var array = Array.from(text);
    //console.log(array);
    var id = array.length;
    //console.log(id);
    var result = "";
    for(var x = 0; x < id; x++){
        //console.log(array[x]);
        if(array[x] == "a"){
           result = result + "ai";
        }else if(array[x] == "e"){
           result = result + "enter";
        }else if(array[x] == "i"){
              result = result + "imes";
        }else if(array[x] == "o"){
           result = result + "ober";
        }else if(array[x] == "u"){
           result = result + "ufat";
        }else {
                result = result + array[x];
        }
    }
    //console.log(result);
    DrawConvert(result);
    textarea.value = "";
    return result;
 }
 
 function decrypt(text){
    
     var array = Array.from(text);
     var decrypt = "";
     var id = array.length;
     var a = "";
     var e = "";
     var i = "";
     var o = "";
     var u = "";
     for(var y = 0; y<id; y++){
         a = array[y] + array[y+1];
         e = array[y] + array[y+1] 
         + array[y+2] + array[y+3]
         + array[y+4];
         i = array[y] + array[y+1]
         + array[y+2] + array[y+3];
         o = array[y] + array[y+1]
         + array[y+2] + array[y+3];
         u = array[y] + array[y+1]
         + array[y+2] + array[y+3];
         if(a == "ai"){
             //console.log("a");
         decrypt = decrypt + "a";
         y = y+1;
         }else if(e == "enter"){
             //console.log("e");
         decrypt = decrypt + "e";
         y = y+4;
         }else if(i == "imes"){
             //console.log("i");
         decrypt = decrypt + "i";
         y = y+3;
         }else if(o == "ober"){
             //console.log("o");
         decrypt = decrypt + "o";
         y = y+3;
         }else if(u == "ufat"){
             //console.log("u");
         decrypt = decrypt + "u";
         y = y+3;
         }else{
             decrypt = decrypt + array[y];
         }
         
     }
         
     DrawConvert(decrypt);  
     textarea.value = "";  
     return decrypt;
 }
 

 function DrawConvert(result){
    message.style.visibility = "hidden"; 
    converted.style.visibility = "visible";
    converted.style.height = "80%"; 
    copy.style.visibility = "visible";
    //window.location.href = "#resultado";
    converted.innerHTML = `

        <span>` + result + `</span>
        
    `
 }

 function showDetails(){
    message.style.visibility = "visible";
    converted.style.visibility = "hidden";
    converted.style.height = "0px";
    copy.style.visibility = "hidden";
 }

 function CopyConvert(){
    let copyText = converted.innerText;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);       
    textArea.select();       
    document.execCommand("copy");       
    // Delete created Element       
    textArea.remove();
 }

 function minusculas(texto){
   textarea.value = texto.toLowerCase().replace(/[^a-z\' ']/g, "");///[^A-Za-z\#\&]+/g, " "
 }

/*console.log(decrypt(encrypt("gato")));
console.log(decrypt(encrypt("Pastrano")));
console.log(decrypt(encrypt("Pitiquito")));
console.log(decrypt(encrypt("bienvenidos")));
console.log(decrypt(encrypt("bienvenidos todos a un nuevo curso")));*/