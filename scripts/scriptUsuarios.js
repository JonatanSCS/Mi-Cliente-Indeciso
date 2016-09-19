
//GET
function getUsuarios(){
  $.getJSON('http://polar-beach-4087.herokuapp.com/users/', function(json_data){
    console.log(JSON.stringify(json_data));
    console.log(json_data.count);
    var results = json_data.results;
    for (var i = 1; i <=  json_data.count; i++) {
      var username = results[i-1].username;
      var first_name = results[i-1].first_name;
      var last_name = results[i-1].last_name;
      var email = results[i-1].email;
      console.log(username);
      console.log(first_name);
      console.log(last_name);
      console.log(email);
    };
    
  });
}


//POST
function postUsuario(){
  jQuery.ajax( {
    url: 'http://polar-beach-4087.herokuapp.com/users/',
    type: 'POST',
    data: { username: "ama", first_name: "Mau", last_name: "Mauri", email:"jonh@MAURI.com" },
    beforeSend : function( xhr ) {
      console.log(xhr);
    },
    success: function( response ) {
      console.log("Nuevo Usuario");
    }
  });

}

//DELETE 1
function deleteUsuario(){
  $.ajax({
    url: 'http://polar-beach-4087.herokuapp.com/users/2/',
    type: 'DELETE',
    success: function(result) {
        console.log(result);
  }
});

}

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
//PUT
function putUsuario(id){
  $.put('http://polar-beach-4087.herokuapp.com/users/' + id + "/" , { username: "OPIWQOEWQ", first_name: "Mau", last_name: "Mauri", email:"jonh@MAURI.com" }, function(result){
    console.log(result);
  });

}

//DELETE 2
function deleteUsuario2(id){
  $.delete('http://polar-beach-4087.herokuapp.com/users/'+ id + "/", function(result){
    console.log("Usuario /4 Eliminado");
  });

}