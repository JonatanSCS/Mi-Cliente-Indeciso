//GET Cuenta de Pablo
function getCuentas(){
  $.getJSON('http://polar-beach-4087.herokuapp.com/accounts/', function(json_data){
    var results = json_data.results;
    for (var i = 1; i <=  json_data.count; i++) {
      var user = results[i-1].user;
      var picture = results[i-1].picture;
      var cover= results[i-1].cover;
      var biography = results[i-1].biography;
      var clase = "#usuario-"+i;

      $(".cuentas").append("<div class='usuario'><usuario-template id='usuario-"+i+"'><usuario-template/></div>");
      
      if(cover == null){
        var user_imagen_fondo = $(clase).find(".user-imagen-fondo");
        user_imagen_fondo.css("background-image", "url('img-error/fondo-error.jpg')");
      }
      else{
        var user_imagen_fondo = $(clase).find(".user-imagen-fondo");
       user_imagen_fondo.css("background-image", "url('"+cover+"')");
      
      }
      
      if(picture == null){
        var user_avatar = $(clase).find(".user-avatar");
        user_avatar.attr("src", "img-error/user-error.png");
      }
      else{
         var user_avatar = $(clase).find(".user-avatar");
      user_avatar.attr("src", picture);

      }
     
      getUsuarios(user, clase, i);

      var user_biography = $(clase).find(".user-biography");
      user_biography.html(biography);
      getTweets(i, clase);
    };
    
  });
}

//Get Usuario de Pablo
function getUsuarios(url, clase, i){
  $.getJSON(url, function(json_data){
    var username = json_data.username;
    var first_name = json_data.first_name;
    var last_name = json_data.last_name;
    var email = json_data.email;

    var user_username = $(clase).find(".username");
    user_username.html(username);
    var user_username = $(clase).find(".user-name");
    user_username.html(first_name +" "+last_name);
    var user_email = $(clase).find(".user-email");
    user_email.html(email);

    $(".input-username").attr( "placeholder", username );
    $(".input-first").attr( "placeholder", first_name );
    $(".input-last").attr( "placeholder", last_name );
    $(".input-email").attr( "placeholder", email );

  });
}

//Get Tweet de Pablo
function getTweets(i, clase){
  $.getJSON("http://polar-beach-4087.herokuapp.com/tweets/"+i+"/", function(json_data){
    var tweet_usuario = json_data.text;
    var fecha_tweet = json_data.created;
    
    var user_tweet_usuario = $(clase).find(".user-tweet-usuario");
    user_tweet_usuario.html(tweet_usuario);
    var user_fecha_usuario = $(clase).find(".user-fecha-tweet");
    user_fecha_usuario.html(fecha_tweet);
  });
};

getCuentas();



























