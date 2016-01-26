$(".enviar").click(function(){
	var tweet = $(".text-tweet").val();
	$.post( 'http://polar-beach-4087.herokuapp.com/tweets/', {user: "http://polar-beach-4087.herokuapp.com/accounts/1/", text: tweet});
	location.reload();

});



/*

function getTweets(){
  $.getJSON('http://polar-beach-4087.herokuapp.com/tweets/1', function(json_data){
    console.log(JSON.stringify(json_data));
    
  });
};



*/