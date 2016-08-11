
 function desordenar(ar){

 var clasee= document.getElementsByClassName(ar);
 var posiciones=[];
 var numerosD=ran(clasee.length);
for( var i=0; i<clasee.length; i++){
 posiciones.push({lf:clasee[i].style.left,tp:clasee[i].style.top});
}

for( var ii=0; ii<clasee.length; ii++){
   clasee[ii].style.left=posiciones[numerosD[ii]-1].lf;
  clasee[ii].style.top=posiciones[numerosD[ii]-1].tp;
}

    
}
 
function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }
      return numeros;
    }


    function arrastrar(event,ui){
 var elemento=event.target.id;
 document.getElementById(elemento).style.zIndex=200;
}

 

function mostrarSig(){
 // document.getElementById("flecha").style.visibility="visible";
  
  setTimeout(function(){  window.location="fin.html";  },1000);
  //var ini = setInterval(ejecutar, 1000);
}

/*
 var c=0;
 function ejecutar() {
  c++;
  var lu=document.getElementById("luz");
    if(c%2==0){
      
      lu.style.visibility="visible";
    }else{
    lu.style.visibility="hidden";
    }
} 
*/

 function pertenece(idObj,clase){
 var vclase= document.getElementsByClassName(clase);
 for(var i=0; i<vclase.length; i++){
    if(vclase[i].id==idObj){
      return true;
    }
 }
 return false;

 }

function escorrecto(id,elemen){
  if((id=="a1" || id=="a3"||id=="a4"||id=="a5"||id=="a16"||id=="a18")&&(elemen=="n3"||elemen=="n1"||elemen=="n4"||elemen=="n5"||elemen=="n16"||elemen=="n18")){
      return true;
    }
    if(id=="a2" && elemen=="n2"){return true;}
    if((id=="a6" || id=="a8")&&(elemen=="n6"|| elemen=="n8")){ return true; }
    if(id=="a7"&& elemen=="n7"){ return true;}
     if(id=="a12"&& elemen=="n12"){ return true;}
     if(id=="a17"&& elemen=="n17"){ return true;}
     if(id=="a19"&& elemen=="n19"){ return true;}
     if(id=="a20"&& elemen=="n20"){ return true;}
     if(id=="a22"&& elemen=="n22"){ return true;}
     if((id=="a14"||id=="a21" || id=="a23")&&(elemen=="n14" ||elemen=="n21"||elemen=="n23")) { return true;}
    if((id=="a9"||id=="a10"||id=="a15"||id=="a25")&&(elemen=="n9"||elemen=="n10"||elemen=="n15"||elemen=="n25")){ return true;}
     if((id=="a11"||id=="a13"||id=="a24")&&(elemen=="n11"||elemen=="n13"||elemen=="n24")){ return true;}
 
 return false;
}
function soltar(event,ui){
  var elemento=event.target.id;
  console.log(elemento);
  if(!escorrecto(ui.draggable.attr('id'),elemento)){
   ui.draggable.draggable('option','revert',true);
   return ;
  }

  $("#"+ui.draggable.attr('id')).appendTo($("#"+elemento));
 document.getElementById(ui.draggable.attr('id')).style.position="relative";
  document.getElementById(ui.draggable.attr('id')).style.left="0%";
   document.getElementById(ui.draggable.attr('id')).style.top="0%";
  document.getElementById(ui.draggable.attr('id')).style.width="100%";
  document.getElementById(ui.draggable.attr('id')).style.height="100%";
  
ui.draggable.draggable('option','revert',false);
 ui.draggable.draggable('option','disabled',true);
 cantidad++;  sonidoMB();


  if(cantidad==dimension){
       mostrarSig();
   }

} 


function sonidoMB(){
  var audio = document.createElement("audio");
 
    audio.src = "bien.wav";
    audio.play();
}



