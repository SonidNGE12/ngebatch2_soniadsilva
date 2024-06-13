// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO

let totalAge = (total:number,pets:any) => total += pets.age;
const totalages = someAcademitesWithAges.reduce(totalAge,0);
console.log("The total Age of all the academites in months is: ",totalages);

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it

const sortByName = someAcademitesWithAges.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log("Sorted Array in Ascending order: ",sortByName);

// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it

const ageInDesc = someAcademitesWithAges.sort((a,b) => b.age - a.age);
console.log("Sorted Array with oldest age first:", ageInDesc);
  
// TODO


// EOF
