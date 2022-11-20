var User = /** @class */ (function () {
    function User(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    User.prototype.getFullName = function () {
        return this.fname + this.lname;
    };
    return User;
}());
var user = new User("abid", "lname");
console.log(user.getFullName());
