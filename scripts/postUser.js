
$(".enviar").click(function(){

var user_username = $(".user-username").val();
var user_first_name = $(".user-first-name").val();
var user_last_name = $(".user-last-name").val();
var user_email = $(".user-email").val();
var user_biography = $(".user-biography").val();
var user_avatar = $(".user-avatar").val('');
var user_cover = $(".user-cover").val('');


$.getJSON('http://polar-beach-4087.herokuapp.com/users/', function(json_data){
    var data = JSON.stringify(json_data);
    var count = data.split(':');
    var id = parseInt(count[1]);
    id = id + 1;
   

  $.post( 'http://polar-beach-4087.herokuapp.com/users/' , { username: user_username, first_name: user_first_name , last_name: user_last_name, email: user_email} );
   alert(id);
  $.post( 'http://polar-beach-4087.herokuapp.com/accounts/' , { user: 'http://polar-beach-4087.herokuapp.com/users/' + id + '/', biography: user_biography} );
  location.reload();
});


});


