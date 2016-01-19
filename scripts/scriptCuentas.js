//GET
function getCuentas(){
  $.getJSON('http://polar-beach-4087.herokuapp.com/accounts/', function(json_data){
    console.log(JSON.stringify(json_data));
    console.log(json_data.count);
    var results = json_data.results;
    for (var i = 1; i <=  json_data.count; i++) {
      var user = results[i-1].user;
      var picture = results[i-1].picture;
      var cover= results[i-1].cover;
      var biography = results[i-1].biography;
      var clase = "usuario-"+i;
      $(".cuentas").append("<div class='usuario "+clase+"'></div>");
      $("."+ clase).append("<div class='imagenes imagenes"+i+"' style='background-image: url("+cover+")'></div>");
      $(".imagenes"+i).append("<img src='"+picture+"' class='img-picture'>");
      getUsuarios(user, clase, i);
    };
    
  });
}

function getUsuarios(url, clase, i){
  $.getJSON(url, function(json_data){
    console.log(JSON.stringify(json_data));

    var username = json_data.username;
    var first_name = json_data.first_name;
    var last_name = json_data.last_name;
    var email = json_data.email;

    $(".images"+i).append("<span class='username'>"+username+"</span>");
    $("."+clase).append("<span class='first_name'>"+first_name+"</span>");
    $("."+clase).append("<span class='last_name'>"+last_name+"</span>");
    $("."+clase).append("<span class='email'>"+email+"</span>");

  });
}

function getTweets(url, clase){
  $.getJSON(url, function(json_data){
    console.log(JSON.stringify(json_data));
    var tweet = json_data.text;
    $("."+clase).append("<span class='tweet'>"+tweet+"</span>");
    
  });
};

getCuentas();

