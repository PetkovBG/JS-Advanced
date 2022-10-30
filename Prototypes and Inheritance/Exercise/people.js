function solve() {

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0
            this.tasks = [];
        }

        work() {
            console.log(this.tasks[0]);
            this.tasks.push(this.tasks.shift());
        }
        collectSalary() {
            let currentSalary = this.dividend ? this.salary + this.dividend : this.salary;
            console.log(`${this.name} received ${currentSalary} this month.`);
        }
    };
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} is working on a simple task.`];
            this.tasks = taskList; //works with this.tasks or super.stasks = taskList;
        }

    };
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
            this.tasks = taskList; //works with this.tasks or super.stasks = taskList;
            // let seniorSalary = 0;
            // this.salary = seniorSalary;
        }

    };
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age)
            let taskList = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
            this.tasks = taskList; //works with this.tasks or super.stasks = taskList;
            this.dividend = 0;
           
        }

    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solve();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();  
console.log(manager.hasOwnProperty('salary'));
console.log(manager.hasOwnProperty('dividend'));
console.log(manager.dividend);
console.log(manager.name);

const newJunior = new classes.Junior('Peter', 27);
newJunior.salary = 1200;
newJunior.collectSalary();
