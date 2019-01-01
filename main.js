App.controller('home', function (page) {
  // search feature
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
  //stuffs
});


App.controller('form', function (page) {
  //stuffs
});


App.controller('page2', function (page) {
  //jquery
  $(document).ready(function(){

    //link to back-end ( temporary mock-server json )
    var _url ="https://my-json-server.typicode.com/gkuwanto/pwaapi/cards"

    //get and append the data from back-end to div with id="products"
    $.get(_url , function(data){
      $.each(data, function(key, items){
        var dataResults = ''
        dataResults += "<div class = 'app-section'> <ul class='app-list'> <li> Nama: "+items.names+ "</li> <li> Tujuan: "+items.destination +"</li> <li> Waktu: "+items.departure +"</li> <li> Jumlah Kursi Kosong: "+items.passanger + " orang </li> </ul> </div>";
        $(dataResults).appendTo('#products')
      }) 
    })

    //after getting all of the data, implement search feature to filter
    $("#searchBox").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#products .app-section").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  })
});

//set default page as 'home'
try {
  App.restore();
} catch (err) {
  App.load('home');
}

//PWA service worker (buat cache localdata)
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