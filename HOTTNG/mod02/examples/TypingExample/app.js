var Employee = (function () {
    function Employee(name, id, pay) {
        this.name = name;
        this.id = id;
        this.basePay = pay;
    }
    Employee.prototype.toString = function () {
        return "ID: " + this.id + ": Name: " + this.name;
    };
    return Employee;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var emp = new Employee("Alicia", 7, 125.00);
    el.innerHTML = emp.toString();
};
//# sourceMappingURL=app.js.map