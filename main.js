App.controller('home', function (page) {
  // put stuff here
  $(document).ready(function(){
    $('#searchHome').on("keyup", function(){
      var value = $(this).val().toLowerCase();
      $("#features *").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
    })
  })
});
App.controller('nebeng', function (page) {

});
App.controller('form', function (page) {
  //stuffs
});
App.controller('page2', function (page) {
  $(document).ready(function(){

    var _url ="https://my-json-server.typicode.com/gkuwanto/pwaapi/cards"

    $.get(_url , function(data){
      $.each(data, function(key, items){
        var dataResults = ''
        dataResults += "<div class = 'app-section'> <ul class='app-list'> <li> Nama: "+items.names+ "</li> <li> Tujuan: "+items.destination +"</li> <li> Waktu: "+items.departure +"</li> <li> Jumlah Kursi Kosong: "+items.passanger + " orang </li> </ul> </div>";
        $(dataResults).appendTo('#products')
      }) 
    })
    $("#searchBox").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#products .app-section").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  })
});

try {
  App.restore();
} catch (err) {
  App.load('home');
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}