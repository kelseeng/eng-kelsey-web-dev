module.exports(function(app) {

    var key = "5eb2c0dd550cd1d60a2024c8af43579b";
    var secret = "28c49ff8f6196bfb";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function searchPhotos(searchTerm) {
        var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
        return $http.get(url);
    }
});