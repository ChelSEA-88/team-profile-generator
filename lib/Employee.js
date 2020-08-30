// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.title = "Employee";
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

    //Getter functions

    getRole() {
        return this.title;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

}

module.exports = Employee;