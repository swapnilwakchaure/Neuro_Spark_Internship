// 1st day in Neuro Spark;
// 11/09/2023

console.log('typescript');

let st: string = 'typescript';
// st = 28 // it should be string
// let a: Number = 'sljdf'; // error


// union 

let str: undefined | string = 'javascript';

console.log('string: ',str);



// let work with array


let arr1: number[] = [2, 4, 3]; // numbers in array
// arr1.push('string');  // it shows error because we can not push string 

let arr2: Array<number> = [38, 82, 28]; // array of numbers
// arr2.push('sd'); // it shows also error;

let arr3: readonly string[] = ['ss', 'sdf', 'fasdf'];
// arr3.push('slwa'); // we only read the arr3 but not push anything inside






// let work with objects

let obj1 : {
    id: number;
    name: string
} = {
    id: 1,
    name: 'typescript'
}

// obj1.name = 283;
obj1.name = 'typescript';

console.log('obj: ', obj1);


let questions: Record<string, boolean> = {
    isEmployed: false,
    isIndian: false
}

questions.isHuman = true;

console.log(questions);