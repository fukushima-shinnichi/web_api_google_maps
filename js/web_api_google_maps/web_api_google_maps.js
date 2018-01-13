$(function(){
  
  /*
  $("#btn").on("click",function(){
    $.ajax({
      url:"http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $("#zipcode").val(),
      dataType:"jsonp",
    }).done(function(data){
      if (data.results) {
        console.log("OK");
        setData(data.results[0]);
      } else {
        alert("none data");
        console.log("none data");
      }
    }).fail(function(data){
      alert("fail get data.");
      console.log("fail get data.");
    });
  });
  
  
  function setData(data){
    $("#prefecture").val(data.address1);
    $("#city").val(data.address2);
    $("#address").val(data.kana3);
  };
  */
  
  /*
  var url = "http://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  var urlAll = url+$("#zipcode").val();
  console.log(urlAll);
  console.log($("#zipcode").val());
  */
  
  
  //////   google maps    ///////////
  
  
  
  
  $("#btn").on("click",function(){
    
    var postAddress = $("#zipcode").val();
    var all = URL+postAddress+afterKey+key;
    
    
    $.ajax({
      /*
      url:"https://maps.googleapis.com/maps/api/geocode/json?address=" + $("#zipcode").val() + "&key=" + key,
      */
      type : 'get',
      crossDomain : true,
      url:all,
      dataType:"json",
    }).done(function(data){
      if (data) {
        console.log(data.results[0].address_components);
        var AddressData = data.results[0].address_components;
        
        // address
        console.log(AddressData[1]["long_name"]);
        
        $("#address").val(AddressData[1]["long_name"]);
        
        // city
        console.log(AddressData[2]["long_name"]);
        
        $("#city").val(AddressData[2]["long_name"]);
        
        // prefecture
        console.log(AddressData[3]["long_name"]);
        
        $("#prefecture").val(AddressData[3]["long_name"]);
        
        // geometry
        var Geometry = data.results[0].geometry;
        console.log(Geometry.bounds.northeast);
        console.log(Geometry.bounds.northeast.lat);
        console.log(Geometry.bounds.northeast.lng);
        
        // data
        $("#map").data("lat",Geometry.bounds.northeast.lat).data("lng",Geometry.bounds.northeast.lng);
        console.log($("#map").data("lat"));
        console.log($("#map").data("lng"));
        console.log(all);
        
        
        
      } else {
        alert("none data");
        console.log("none data");
      }
    }).fail(function(data){
      alert("fail get data.");
      console.log("fail get data.");
    });
  });
  
  //var AddressData = data.result[0].address_components;
  //console.log(AddressData);
  
  /*
    function setData(data){
      $("#prefecture").val(AddressData[1]["long_name"]);
      //$("#city").val(data.address2);
      //$("#address").val(data.kana3);
  };
  */
  
  var URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  var afterKey = "&key=";
  var key = "AIzaSyDSCHWLpdeARXPbY5m4tGmyTk80YG_3agA";
  //var postAddress = 1500002;
  //var postAddress = $("#zipcode").val();
  //var all = URL+postAddress+afterKey+key;
  //console.log(all);
  
  
  ////////   google maps embedded   //////////////
  /*
  var mapScr = "https://maps.googleapis.com/maps/api/js?key=";
  var CallBack = "&callback=initMap";
  var mapScrAll = mapScr+key+CallBack;
  $("#Map_HTML").attr("src",mapScrAll);
  console.log($("#Map_HTML").attr("src"));
  */
 
  
  /////   NG jquery  ///////////
/*
  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.map($('#map'), {
      zoom: 4,
      center: myLatLng
    });

    
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
    
    
  };
  
  */
  
  
  
  
  
  
  
});


///////  OK javascript   //////////////
/*
  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
    
    
  };
*/

    var latA = 35;
    var lngA = 135;


    function initMap() {

    
      
    var myLatLng = {lat: latA, lng: lngA};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

      
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
    
    
  };
  

///////   button map click   ///////////////////

  var button_map = document.getElementById("btn_map");
  
  button_map.addEventListener("click",function(){

    console.log("OK");
    
    latA = $("#map").data("lat");
    lngA = $("#map").data("lng");
    
    //var latA = $("#map").data("lat");
    //var lngA = $("#map").data("lng");
    
    
    
    var map_area = document.getElementById("map_area");
    /*
    map_area.innerHTML = '<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSCHWLpdeARXPbY5m4tGmyTk80YG_3agA&callback=initMap"></script>';
    */
    /*
    map_area.innerHTML = '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSCHWLpdeARXPbY5m4tGmyTk80YG_3agA&callback=initMap"></script>';
    */
    
    ////////  terateil OK
    
    var map_js = document.createElement('script');
    map_js.type = 'text/javascript';
    map_js.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSCHWLpdeARXPbY5m4tGmyTk80YG_3agA&callback=initMap'
    map_area.appendChild(map_js);
    
    /*
    function initMap() {
    var myLatLng = {lat: 35.6920455, lng: 139.7292123};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: myLatLng
    });

      
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
    
    
  };
  */

    
    
    
    console.log("OKOK");
    

  });
    
    
/*
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSCHWLpdeARXPbY5m4tGmyTk80YG_3agA&callback=initMap"></script>
*/






////////  click part2
/*
  var map = document.getElementById("map");
  map.style.visibility = "hidden";

  var button_map = document.getElementById("btn_map");

  button_map.addEventListener("click",function(){
    map.style.visibility = "visible";
    console.log("OK");

});
*/


/////////////   NG   ////////////////////////////

/*

  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  };

*/

/*
  var Timer = setTimeout(function(){
    
      var button_search = document.getElementById("btn");
  
  button_search.addEventListener("click",function(){
    
      function initMap() {
    var myLatLng = {lat: 35.6641549, lng: 139.7139677};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  };
    
    console.log("hello world");
    
  });
    
    console.log("OKOK");
    
  },10000);
*/


/*
  var button_search = document.getElementById("btn");
  
  button_search.addEventListener("click",function(){
    
      function initMap() {
    var myLatLng = {lat: 35.6641549, lng: 139.7139677};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  };
    
    console.log("hello world");
    
  });
*/



////////////   terateil



