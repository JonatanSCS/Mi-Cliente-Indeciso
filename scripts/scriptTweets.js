function getTweets(){
  $.getJSON('http://polar-beach-4087.herokuapp.com/tweets/1', function(json_data){
    console.log(JSON.stringify(json_data));
    
  });
};
