type BirthDateData = Date | string

class Person {
  static version: string = '1.5.25'

  // property (variable)
  private rootPassword: string = 'MyPass123'
  firstName: string
  lastName: string
  protected readonly birthDate?: BirthDateData
  //protected extends class can use and only use in claas
  //private extends class can't use and only use in claas

  constructor(fName: string, lName: string, bDate?: BirthDateData) {
    this.firstName = fName
    this.lastName = lName
    this.birthDate = bDate
  }

  // method (function)
  getDetail(): string {
    return `${this.firstName} ${this.lastName}`
  }

  getBirthDate(password: string): string | undefined {
    if (password !== this.rootPassword) {
      throw new Error('Password incorrect')
    }
    // typeof var === 'string'
    // typeof var === 'number'
    // typeof var === 'boolean'
    // var instanceof Date
    // var instanceof Person
    return this.birthDate instanceof Date
      ? this.birthDate.toString()
      : this.birthDate
  }

  // getter, setter
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(data: string) {
    const dataSplitted = data.split(' ')
    if (dataSplitted.length !== 2) {
      throw new Error('Full name incorrect')
    }
    this.firstName = dataSplitted[0]
    this.lastName = dataSplitted[1]
  }
}

class Teacher extends Person {
  schools: string[] = []
}

class Student extends Person {
  constructor(fName: string, lName: string, Grade:number,bDate?: BirthDateData) {
   super(fName, lName, bDate,)
   this.grade = Grade
  }

  school: string = ''
  grade: number

  getDetail(): string {
    return `${this.firstName} ${this.lastName} (${this.grade}) [${this.birthDate}]`
  }
}

const john = new Student('John', 'Doe',3.5, '2000-12-15')
console.log(john.firstName)
console.log(john.getBirthDate('MyPass123'))
console.log(john.getDetail())

// john.firstName = 'Johnny'
// john.lastName = 'Denial'
// console.log(john.getDetail())
john.fullName = 'Johnny Denial'
console.log(john.fullName)

const joe = new Teacher('Joe', 'Dan', new Date())
console.log(joe.firstName)
console.log(joe.getBirthDate('MyPass123'))
console.log(joe.getDetail())

joe.schools.push('Wat School', 'International School')
console.log(joe.schools)
