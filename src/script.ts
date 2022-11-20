class User {
    protected fname : string 
    private lname : string
    constructor(fname : string, lname:string){
        this.fname = fname 
        this.lname = lname            
    }
    getFullName(): string{
        return this.fname + this.lname
    }
}

const user = new User("abid","lname")

console.log(user.getFullName())