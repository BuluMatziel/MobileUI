//Creating a database
$(document).on("ready", function () {
    databaseHandler.createDatabase();

});

//Adding user in table
function addUser() {
    var username = $("#txtUserName").val();
    var password = $("#txtPassword").val();

    if (!username || !password) {
        alert("Username and password are required");
    } else {
            userHandler.addUser(username, password);
            $("#txtUserName").val("");
            $("#txtPassword").val("");
        }
    }

//Getting login info from table
function login() {
    var username = $("#loginUserName").val();
    var password = $("#loginPassword").val();
    var userid = "" + username + password
    userHandler.getUser(userid)
}

//Shows which user is logged in when opening the menu
function displayUser() {
    var nodeUser = document.getElementById('userTitle');
    nodeUser.innerHTML = ("Logged in as: " + $("#loginUserName").val());
    var nodeEmail = document.getElementById('userEmail');
    nodeEmail.innerHTML = ($("#loginUserName").val() + "@email.com");
}
