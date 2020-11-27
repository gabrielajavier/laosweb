//MAPA
function initialize() {
  var myLatlng = new google.maps.LatLng(-12.126945,-77.02541259999998);
  var mapOptions = {
    zoom: 16, //zoom de tu mapa
    center: myLatlng, //centrar tu mapa
    scrollwheel: false, //si colocas true en vez de false el usuario podrá hacer scroll dentro del mapa
    draggable: true, //esta opción es la manito que aparece y es usado para desplazarse en el mapa
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    /*var contentString = '<img src="logo_01.png" width="100" style="display:block;margin:auto;">';*/
    /*var infowindow = new google.maps.InfoWindow({content: contentString});*/ // cajita donde va la imagen
    var marker = new google.maps.Marker({
    position: myLatlng,
    animation:google.maps.Animation.DROP,
    icon: 'icon-map.png',
    map: map
    });
   infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    }); //si comentamos esta parte desaparece el icono de dialogo */ 
}
google.maps.event.addDomListener(window, 'load', initialize);


