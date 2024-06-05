let languages = ['Java','CPP','Python','Javascript'];

//Array Destructuring
let [lang1, lang2, lang3, lang4  ] = languages;

console.log(languages);
console.log(lang1,"\n",lang2);

let employee = 
{
    eid : 4356,
    ename: "Java",
    age: 50,
    salary: 58976,
    skills: ['Python','Typescript','React'],
    supervisor: 
    {
        eid : 4356,
        ename: "Java",
    },
    Display: () =>
    {
        console.log("---Employee Details---");
        console.log("Id: ",eid,"\nName: ",ename,"\nAge: ",age,"\nSalary: ",salary);
    }
}

// Object Destructuring.
let {eid,ename,age,salary,skills,supervisor,Display} = employee; 
Display();
console.log("Skills: ",skills);
console.log("Supervisor ID: ",supervisor.eid);
console.log("Supervisor Name: ",supervisor.ename);
