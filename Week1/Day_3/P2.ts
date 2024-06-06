class Employee
{
    empid:number;
    empname:string;
    age:number;
    salary:number;
    constructor(eid:number ,en:string , age:number , sal:number)
    {
        this.empid=eid;
        this.empname = en;
        this.age=age;
        this.salary=sal;
    }
    DisplayEmployee()
    {
        console.log("-----Employee Details-----")
        console.log("Employee Id : ",this.empid);
        console.log("Employee Name : ",this.empname);
        console.log("Employee Age : ",this.age);
        console.log("Employee Salary : ",this.salary);
    }
}
let emp:Employee = new Employee(1234,"Tina",25, 54231.50);
emp.DisplayEmployee();