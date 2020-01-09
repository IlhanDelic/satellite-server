const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


function initialize(passport:any, getUserByEmail:any, getUserById:any ) {
   const authenticateUser = async (email: string , password: string, done: any) => {

       const user = getUserByEmail(email); // checks the users email
       if(user == null ){
           return done(null, false, {message: 'there are no users with that email'})  //return if there is no email
           console.log("no users");
       }
    try {
        if (await bcrypt.compare(password, user.password)) {  //checks if the password matches
            return done(null, user);
            console.log("password matches");
        }
            else {
            return done(null, false, {message: 'password incorrect'})
            console.log("password doesn't match");
        }

    } catch (e) {
       return done(e) // catches the error.
    }
   };
    console.log("initialize user");
    passport.use(new localStrategy(({ usernameField: 'email '}),
        authenticateUser) );

    passport.serializeUser((user, done) => {done(null, user.id)});
    passport.deserializeUser((user, done) => {
        let id;
        return  done(null, getUserById(id))
        console.log("user serialized");
    })
}
module.exports = initialize;