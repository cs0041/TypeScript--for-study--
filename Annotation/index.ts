
// //inference
// let fullName = 'test'
// let age = 20

//reference
let fullName:string = 'test'
let age:number = 20

const str:string ='abc'
const num:number = NaN //Not a Number
const num2:number = Infinity
const bool:boolean = false
const obj:object = {a:1,b:2}
const nil:null = null
const und:undefined = undefined
const an:any = 'abc' //can be anything


const arr1:string[] = ['kkk','a', 'b','bc']
const arr2:number[] = [1.2,2.5,3]

const result1 = arr1.filter((item) => {
  return item.length === 1
})
console.log(result1)

const result2 = arr2.map((item) => {
  //return item.toFixed(0)
  return Math.round(item)
})
console.log(result2)



//union
let grade: number | string = 3.15
grade = "A"
const grades: (number|string)[] = ['a','b',1,2]


//tuple
const rgb: [number,number,number] =[255,125,0]

//literal
const role:'admin' | 'user' ='user'

//enum
enum Role{
    'Admin',
    'User'
}
const role2: Role = Role.Admin

type AlphaNumeric = number | string
const password: AlphaNumeric = 123
const confirmPassword: AlphaNumeric = 123

//interface
interface Employee {
  [key:string]:any
  id: number
  fullname: string
  birthDate: Date
  summary?: string //optional
  position?: string //optional
}
interface EmployeeProgramer extends Employee {
    github:string
}
interface EmployeeSupport extends Employee {
    telephone:string
}

const john:EmployeeProgramer = {
    id:1,
    fullname:'John',
    birthDate: new Date('2001-01-25'),
    summary: 'out',
    salary:2000,
    github:'123'
}
const jeo: EmployeeSupport = {
  id: 1,
  fullname: 'John',
  birthDate: new Date('2001-01-25'),
  position: 'Software Engineer',
  hour: 100,
  telephone:'01231231'
}

interface MyMath {
  version:string
  sum(a: number, b: number, c?: number): number
  sumOutput(a: number, b: number, c?: number): void
}

const myMath:MyMath = {
    version: '1.0.0',
    sum(a, b, c?) {
        return a + b + (c || 0)
    },
    sumOutput(a, b, c?){
         console.log( a + b + (c || 0))
    }
}

console.log(myMath.sum(1,5))
myMath.sumOutput(2, 5)
console.log(myMath.version)
//function
function sum(a: number, b: number, c?: number):number {
  return a + b + ( c || 0 )
}
console.log(sum(3,5))




