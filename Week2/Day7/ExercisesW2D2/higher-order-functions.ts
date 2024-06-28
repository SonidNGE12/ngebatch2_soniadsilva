
//Each function will be passed an array of objects that looks like:
    const devs = [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
//See instructions above each function to find out what it should return.

export type Developer = {
  firstName: string, 
  lastName: string, 
  country: string, 
  continent: string, 
  age: number, 
  language: string
}


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope (developers: Developer[]) {
    const continent = developers.filter((cont)=> cont.continent === 'Europe');
    return continent.length; 
}
console.log(countFromEurope(devs));

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings (developers: Developer[]) {
  const greet = developers.map((d)=> `Hi ${d.firstName}, what do you like the most about ${d.language}`);
  return greet;
}
console.log(getGreetings(devs));

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: Developer[]) {
  const lang = developers.filter((l)=> l.language === 'Javascript')
  if(lang.length >= 1)
  return true;
  else 
  return false;
}
console.log(isJSComing(devs));

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper (developers: Developer[]) {
    const firstPython = developers.filter((d)=> d.language === 'Python');
    const dev = firstPython.map((f)=> `${f.firstName} , ${f.country}`);
    if (dev.length != 0)
    return dev[0];
    else 
    return `none`;
  
}
console.log(getFirstPythonDeveloper(devs));

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
export function getAverageAge(developers: Developer[]) {
  const ages = developers.map((a)=>a.age);
  const devAge = (total:number,d:any) => total+=d.age;
  const totalAge = developers.reduce(devAge,0);
  const average = Math.floor(totalAge/(ages.length));
  if(ages.length = 0)
  return -1;
  else
  return average;

}
console.log(getAverageAge(devs));

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
// export function getLanguageCounts (developers: Developer[]) {
//   const lang = developers.map((l)=>l.language)
//   const count = {};
//   lang.forEach(ele => {
//     if(count[ele])
//       count[ele] += 1;
//      else 
//         count[ele] = 1;
    
//});


// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest (developers: Developer[]) {
  const ages = developers.map((a)=>a.age);
  const max = Math.max(...ages);
  const olderDevs = developers.filter((o)=>o.age === max);
  const oldest = olderDevs.map((o)=>o.firstName);
  return oldest;
  
}
console.log(getOldest(devs));
// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup (developers: Developer[]) {
  const zones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  let devCont = developers.map((d: any) => d.continent);
  return zones.every((el) => devCont.includes(el));
  
}
console.log(isGlobalGroup(devs));
