var usernames = ['admin', 'ayeza', 'alina', 'aina', 'taha'];
usernames.forEach(function (usernames) {
    if (usernames == 'admin') {
        console.log(' Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames, ", thank you for logging in again. "));
    }
});
