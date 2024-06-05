let emp1 = {
    empid : 1234,
    empname : 'Tina',
    Salary : 56789.35,
    Skills : ['Java','C++','Python'],
    Reportsto : {
    empid : 1235,
    empname : 'Meena',
    Salary : 88789.35,
    Skills : ['Java','React','Python'],
    },
    Display : () => {
        console.log(emp1.empid,"\n",emp1.empname,"\n",emp1.Reportsto.empname);
    }
}

emp1.Display();

let Add =   (a : number , b:number) : number => a + b;
let sum = Add(5,10);
console.log("Sum is: ",sum);