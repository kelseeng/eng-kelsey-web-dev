(function() {
    angular
        .module("WebAppMaker")
        .factory("FlickrService", FlickrService);

    var key = "5eb2c0dd550cd1d60a2024c8af43579b";
    var secret = "28c49ff8f6196bfb";
    var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    function FlickrService($http) {
        var vm = this;
        var api = {
            searchPhotos: searchPhotos
        };
        return api;

        function searchPhotos(searchTerm) {
            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
            return $http.get(url);
        }
    }
})();