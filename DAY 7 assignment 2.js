// Create a class User with properties as name ,age and email where he can login and logout.

class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins=0;
    }
    
    login(){
        console.log(`${this.name} has logged in.`);
    }
    logout(){
        console.log(`${this.name} has logged out.`);
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins}coins.`);
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has only ${this.luCoins}coins left.`)
    }

}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = 'Moderator';
    }

    deleteUser(user){
        user = user.filter(u =>{
            return u.email != user.email;
            return u.name != user.name;
        })
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.course.push(course);
        console.log(user);
    }
}

let user1 = new User('tom',23,'tom96@gmail.com');
let user2 = new User('sarah',27,'sarah712@gmail.com');
let mod = new Moderator('cole',25,'colespourse@gmail.com','Moderator');
let admin = new Admin('liza',38,'l@gmail.com');

users.forEach(element => {
    console.log(element);
    
});
User.greet();
admin.addCourse(user1,'javascript');
admin.addCourse(user2,'java');