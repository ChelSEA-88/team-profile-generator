// This code defines and exports the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Getter functions

    getRole() {
        return "Employee";
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