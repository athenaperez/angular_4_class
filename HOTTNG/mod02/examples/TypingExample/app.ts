class Employee {
    private name: string;
    private id: number;
    private basePay: number;

    constructor(name: string, id: number, pay: number) {
        this.name = name;
        this.id = id;
        this.basePay = pay;
    }

    toString(): string {
        return "ID: " + this.id + ": Name: " + this.name;
    }
}


window.onload = () => {
    var el = document.getElementById('content');
    var emp= new Employee("Alicia", 7, 125.00);
    el.innerHTML = emp.toString();
  
};