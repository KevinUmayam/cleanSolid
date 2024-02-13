(() => {

    type Gender = "M"|"F";

    interface PersonProps {
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class Person {
            public name: string;
            public gender: Gender;
            public birthdate: Date;

        constructor({name, gender, birthdate}: PersonProps){ 
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate;
        }
        
        
    }

    interface UserProps {
        email     : string;
        role      : string;
    }

    class User  {
        public email: string; 
        public role: string;
        public lastAccess: Date;

        constructor({
            email,
            role
        }: UserProps){
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
        }
        checkCredentials():boolean {
            return true
        }
    }
    
    interface SettingsProps {
        lastOpenFolder     : string;
        workingDirectory   : string;
    }
    class Settings {
        public workingDirectory: string;
        public lastOpenFolder  : string; 

        constructor({         
            lastOpenFolder,             
            workingDirectory,
        }:SettingsProps){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

     interface UserSettingsProps {
        birthdate          : Date;
        email              : string;
        gender             : Gender;
        lastOpenFolder     : string;
        name               : string;
        role               : string;
        workingDirectory   : string;
    }

    class UserSettings {

        public person : Person;
        public user : User;
        public settings : Settings;
        
        constructor({
            birthdate,    
            email,            
            gender,           
            lastOpenFolder,   
            name,            
            role,             
            workingDirectory,
        }:UserSettingsProps){
            this.person = new Person({birthdate,gender,name});
            this.user = new User({email,role});
            this.settings = new Settings({lastOpenFolder,workingDirectory});
        }
    }

        const userSettings = new UserSettings ({
        birthdate          : new Date('1998-09-06'),
        email              : 'kevin@gmail.com',
        gender             :  'M',
        lastOpenFolder     : '/home',
        name               : 'kevin',
        role               : 'Admin',
        workingDirectory   : '/usr/home',
    })
    console.log({userSettings});
    

})()