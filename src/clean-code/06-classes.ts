(() => {

    type Gender = "M"|"F";
    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor(name: string, gender: Gender, birthdate: Date ){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }
        // !this is the same as the code above
// no aplicando el principio de responsabilidad unica 
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){ }
        
        
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string, 
            public role: string, 
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials():boolean {
            return true
        }
    }
    
    class UserSettings extends User {

        constructor(
            public workingDirectory: string, 
            public lastOpenFolder  : string, 
            public email           : string, 
            public role            : string, 
            public name            : string, 
            public gender          : Gender, 
            public birthdate       : Date
        ){
            super(email, role,  name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings (
        '/usr/home',
        '/home',
        'kevin@gmail.com',
        'Adomin',
        'kevin',
        'M',
        new Date('1998-09-06')
    )
    console.log({userSettings});
    

})()