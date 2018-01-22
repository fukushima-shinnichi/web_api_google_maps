////   jquery google maps API   /////////

$(function(){

  //////   google maps information get   ///////////
  
  $("#btn").on("click",function(){
    
    var postAddress = $("#zipcode").val();
    var URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var afterKey = "&key=";
    var key = "your google API key";
    var all = URL+postAddress+afterKey+key;
    
    //ajax google maps address informationrequest
    
    $.ajax({
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
        
        // data of request geometry
        $("#map").data("lat",Geometry.location.lat).data("lng",Geometry.location.lng);
        console.log($("#map").data("lat"));
        console.log($("#map").data("lng"));
        
        
      } else {
        alert("none data");
        console.log("none data");
      }
    }).fail(function(data){
      alert("fail get data.");
      console.log("fail get data.");
    });
  });
  
});


///////   javascript   //////////////

//google maps function from google maps reference

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
  

///////   button map click fade in map   /////

var button_map = document.getElementById("btn_show_map");

button_map.addEventListener("click",function(){
  
  //////   google_maps_src append function   ////
  
  latA = $("#map").data("lat");
  lngA = $("#map").data("lng");
  
  var mykey = "your google API key";
  var jsURL = "https://maps.googleapis.com/maps/api/js?key=";
  var after_jsURL = "&callback=initMap";
  var js_all = jsURL+mykey+after_jsURL;
  
  var google_maps_src = document.getElementById("google_maps_src");
    
  var map_js = document.createElement('script');
  map_js.type = 'text/javascript';
  map_js.src = js_all;
  map_js.classList.add("maps_src");
    
  google_maps_src.appendChild(map_js);
  
});


//////   map button fadeIn   ////

function show_map_button (){
  
  var btn_search = document.getElementById("btn");
  
  btn_search.addEventListener("click",function(){
    var btn_show_map = document.getElementById("btn_show_map");
    btn_show_map.style.visibility = "visible";
    
    return;
  });
};

show_map_button();


//////   button hover function   ////

function postal_code_hover_func (){
  
  var postal_code = document.getElementsByClassName("postal_code");
  var first_postal_code = postal_code[0];
  
  var input_zipcode = document.getElementById("zipcode");
  
  ////////   mouseover   //////////
  first_postal_code.addEventListener("mouseover",function(){
    first_postal_code.style.color = "#0000ff";
    input_zipcode.style.color = "#ffff00";
    input_zipcode.style.backgroundColor = "rgba(135,206,250,0.8)";
  });
  
  ////////   mouseout   //////////
  first_postal_code.addEventListener("mouseout",function(){
    first_postal_code.style.color = "#000";
    input_zipcode.style.color = "#000";
    input_zipcode.style.backgroundColor = "#d3d3d3";
  });

  return;
  
};

postal_code_hover_func();


//////   google_maps_src remove function   ////

function maps_src_remove_func (){
  
  button_map.addEventListener("click",function(){
    
    var maps_src = document.getElementsByClassName("maps_src");
    var first_maps_src = maps_src[0];
    first_maps_src.parentNode.removeChild(first_maps_src);
    
  });
  
};

maps_src_remove_func();


//////   smart phone javascript   //////////

function smart_phone_func(){
  
  var window_size = window.innerWidth;
  //console.log(window_size);
    
    var postal_code = document.getElementsByClassName("postal_code");
    var first_postal_code = postal_code[0];
  
    var input_zipcode = document.getElementById("zipcode");
  
    ////////   touchstart   //////////
    first_postal_code.addEventListener("touchstart",function(){
      first_postal_code.style.color = "#0000ff";
      input_zipcode.style.color = "#ffff00";
      input_zipcode.style.backgroundColor = "rgba(135,206,250,0.8)";
    });
    
    ////////   touchmove   //////////
    first_postal_code.addEventListener("touchmove",function(){
      first_postal_code.style.color = "#0000ff";
      input_zipcode.style.color = "#ffff00";
      input_zipcode.style.backgroundColor = "rgba(135,206,250,0.8)";
    });
  
    ////////   touchend   //////////
    first_postal_code.addEventListener("touchend",function(){
      first_postal_code.style.color = "#000";
      input_zipcode.style.color = "#000";
      input_zipcode.style.backgroundColor = "#d3d3d3";
    });
    
  
  return;
  
};

smart_phone_func();









/*********  notice error message  *********/
// If I click map button repetition, do display error message.
// It works normally.

// error message
// You have included the Google Maps API multiple times on this page. This may cause unexpected errors.



