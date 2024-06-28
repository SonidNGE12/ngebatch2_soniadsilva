
let newCourses:any = [];

beforeEach(()=>{
    newCourses = ['Angular'];
});

describe('Array Testing',()=>{
    beforeEach(()=>{
        newCourses.push('React');
    })
    
    it('To test an array',() => {
        expect(newCourses).toEqual(['Angular','React']);
        console.log(newCourses);
    })
    
})

afterEach(() => {
    newCourses = [];
})


// let newCourses:any = [];

// beforeEach(()=>{
//     newCourses = ['Angular'];
// });

// describe('array testing', () => {
    
//     beforeEach(()=>{
//         newCourses.push('NextJS');
//     })

//     it('To test an array',()=>{
//         //expect(newCourses).toStrictEqual(['Angular','NextJS'])
//         expect(newCourses).toEqual(['Angular','NextJS']);
//     })
//     console.log(newCourses);
// })



// afterEach(()=>{
//     newCourses=[];
// })





