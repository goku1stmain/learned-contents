// import { data } from "./example"
let word1="gokul"
let word2="js"
//string literals ``
const fullname=`${word1} ${word2}`
console.log(fullname)

let example='hello \n' + 'world';
// using string literals
let example1=`
${word1}
${word2}
`
console.log(example)
console.log(example1)


// destructing objects 

const personalinfo={
    firstname:"Gokul",
    lastname:"js",
    city:"bangalore",
    state:"karnataka",
    zipcode:500034
};

const {firstname :fn,lastname :ln}=personalinfo
console.log(`${fn} ${ln}`)
console.log(`${personalinfo.firstname} ${personalinfo.lastname}`)
console.log(personalinfo.city)

//destructuring arrays in javascript 
let [firstname1,lastname1,version]=['forza','horizon',50]
version=5
console.log(`${firstname1} ${lastname1} ${version}`)

//object literals

function addressMaker(city,state){
    const newadd={city,state}
    console.log(newadd)
}

addressMaker('kannur','kerala')


// objectliteral challenge

function addressmake(address){
    const {city,state}=address
    const newaddress={
        city:city,
        state:state,
        country:"india",
    }
    console.log(newaddress)
}

addressMaker({city:"bangalore",state:"karnataka"})


// for of loop
let income=[1000,2000,3000,4000]
let total=0
for (const i of income){
    total=total+i
}
console.log(total)
// spread operator 

let example3=[1,2,3,4,5,6,7]
let example2=[...example3] // unwrapping of example 3 in example 2
console.log(example3)
console.log(example2)
example2.push(5)
console.log(example3)
console.log(example2)


// spread operator in objects 
let newexample1={
    firstname:"dylan"
}
let newexample2={
    ...newexample1
}
console.log(newexample1.firstname)
console.log(newexample2.firstname)


//rest operator 
// simliar to spread operator but used inside a functions 
//generally when you dont have an idea how many parameters are passed but you need to acces all 
// here it will return you an array of all parameters
function add(...nums){
    console.log(nums)
}
add(1,2,3,4,5,6)
// console.log(nums)

// arrow functions

function add1(...nums){
    let total=nums.reduce((x,y)=>x+y)
    console.log(total)
}
add1(1,2,3,4,5,6)

// default param



function add2(numArray=[]){
    let total=0;
    numArray.forEach((element)=>{
        total=total+element;
    })
    console.log(total)
}
add2()


//includes 
let numarray=[1,2,3,4,5,6,67]
console.log(numarray.indexOf(0)) // checks particular elements exist and returns the index or -1 
console.log(numarray.includes(2)) // checks particular elements and returns the boolean value 


// let and const 
// genrally var can be intialized inside the normal level or inside the function level it want return an error
// let should intialized inside the normal level then only you can use it inside function level like if else 
// in let values are reassignable 
// const variable once intialized the value cannot be updated later for variable 
// if you intialize an variable for array still we will be able to push value inside an array 
// if you intialize const for an object still we will be able to update propertyfor objects 


// import and export 
let updatedata=data 
// console.log(data)


//padstart and padend 



