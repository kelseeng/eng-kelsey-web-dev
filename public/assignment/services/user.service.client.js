(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {

        var api = {
            createUser   : createUser,
            findUserById : findUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
            updateUser : updateUser,
            deleteUser : deleteUser
        };
        return api;

        function uniqueUser(user) {
            for(var i in users){
                if(users[i]._id === user._id && users[i].username === user.username){
                    return false;
                }
            }
            return true;
        }

        function createUser(user) {
            if(uniqueUser(user)) {
                users.push(user);
                return true;
            }
            return false;
        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url);
        }

        function findUserByUsername(username) {
            for(var i in users) {
                if(users[i].username === username) {
                    return users[i];
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function updateUser(userId, user) {
            for(var i in users) {
                if(users[i]._id === userId) {
                    users[i].firstName = user.firstName;
                    users[i].lastName = user.lastName;
                    return true;
                }
            }
            return false;
        }

        function deleteUser(userId) {
            var index = -1;
            for(var i in users) {
                if(users[i]._id === userId) {
                    index = i;
                }
            }
            if(index !== -1) {
                users.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        }
    }
})();