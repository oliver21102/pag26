
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
  document.getElementById("flecha").style.visibility="visible";
  
  //setTimeout(function(){  window.location="fin.html";  },1000);
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
function soltar(event,ui){

   var elemento=event.target.id;
  //document.getElementById(elemento).append(document.getElementById(ui.draggable.attr('id')));
  //$(".tabla tr td #"+elemento).appendTo($("#"+ui.draggable.attr('id')));
  
  ///$("#"+elemento).appendTo($("#"+ui.draggable.attr('id')));

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



