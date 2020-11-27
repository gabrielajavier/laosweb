function objetoAjax(){
  var xmlhttp=false;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
      }
  }

  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}


function enviar_email(){

  divResultado = document.getElementById('resultado');
  divResultado.innerHTML= '<img style="width: 27px !important; padding-top: 5px !important; margin-left: 18px;" src="Includes/img/loader.gif">';

  enviar    = document.index.enviar.value;
  nombre    = document.index.nombre.value;
  email     = document.index.email.value;
  mensaje   = document.index.mensaje.value;
  telefono     = document.index.telefono.value;
  asunto   = document.index.asunto.value;

  //  alert(''+nombre);
  ajax=objetoAjax();

  ajax.open("POST", "enviar_formulario.php",true);
   ajax.onreadystatechange=function() {
     if (ajax.readyState==4) {
      //mostrar resultados en esta capa
     divResultado.innerHTML = ajax.responseText
      //llamar a funcion para limpiar los inputs
     LimpiarCampos();
     }
  }

  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //enviando los valores
  ajax.send("nombre="+nombre+"&email="+email+"&telefono="+telefono+"&asunto="+asunto+"&mensaje="+mensaje+"&enviar="+enviar);
 }

 function LimpiarCampos(){

  document.index.nombre.value="";
  document.index.email.value="";  
  document.index.telefono.value=""; 
  document.index.asunto.value="";  
  document.index.mensaje.value="";  
  document.index.nombre.focus();
  }