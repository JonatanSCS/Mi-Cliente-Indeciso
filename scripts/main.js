
//GET


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
      getTweet(i, clase);
    };
    
  });
}


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

    $(".p-nombre").html("Tweet en nombre de "+ first_name);
    $(".p-info").html("Cambiar informacion de "+ first_name);
    $("h1").html(first_name +" "+ last_name);




  });
}


function getTweet(i, clase){
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






$(".submit-information").click(function(){
  var user_username = $(".input-username").val();
  var user_first_name = $(".input-first").val();
  var user_last_name = $(".input-last").val();
  var user_email = $(".input-email").val();

  $.getJSON('http://polar-beach-4087.herokuapp.com/users/', function(json_data){
    var data = JSON.stringify(json_data);
    var count = data.split(':');
    var id = parseInt(count[1]);
    id = id + 1;

    jQuery.each( [ "put", "delete" ], function( i, method ) {
      jQuery[ method ] = function( url, data, callback, type ) {
        if ( jQuery.isFunction( data ) ) {
          type = type || callback;
          callback = data;
          data = undefined;
        }

        return jQuery.ajax({
          url: url,
          type: method,
          dataType: type,
          data: data,
          success: callback
        });
      };
    });
    
    
  
    if(user_username == "")
      user_username = $(".input-username").attr( "placeholder");
    if(user_first_name == "")
      user_first_name = $(".input-first").attr( "placeholder");
    if(user_last_name == "")
      user_last_name = $(".input-last").attr( "placeholder");
    if(user_email == "")
      user_email =  $(".input-email").attr( "placeholder");


    
    $.put( 'http://polar-beach-4087.herokuapp.com/users/1/' , { username: user_username, first_name: user_first_name , last_name: user_last_name, email: user_email} );
    swal({title: "Seguro?",   text: "Cambiaras información de usuario",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55", cancelButtonText:"Cancelar"  ,confirmButtonText: "Cambiar",   closeOnConfirm: false }, function(){   swal("Datos Cambiados", "Datos Cambiados"); location.reload();});
    


  });
});


function getTweets(){
  $.getJSON('http://polar-beach-4087.herokuapp.com/tweets/', function(json_data){
    var data = json_data;
    var results = data.results;
    var count = data.count;
    console.log("count:" + count);
    var i = 0;
    for(tweet in results){
      var t = results[i];
      $(".tweets-pablo").append("<tweet-template id='tweet-"+i+"'></tweet-template>");
      var nuevo_tweet =  $("#tweet-" + i);
      nuevo_tweet.children(".user-tweet-usuario").html(t.text);
      nuevo_tweet.children(".user-fecha-tweet").html(results[i].created);
      i = i+1;
      if(i <= count){
        $("#tweet-"+i).remove();

      }

    }
  });
  


};

$(".submit-tweet").click(function(){
  var tweet = $(".text-tweet").val();
  $.post( 'http://polar-beach-4087.herokuapp.com/tweets/', {user: "http://polar-beach-4087.herokuapp.com/accounts/1/", text: tweet});
  location.reload();

});

getTweets();

