interface Person {
  id: number
  name: string
  birthDate?: Date
}

interface Player {
  id: string
  name: string
  level: number
}

interface FindOptions<IdValue, NameValue> {
  id?: IdValue
  name?: NameValue
}

type DataType = { id: any; name: any }

function findData<Data extends DataType, IdValue = number, NameValue = string>(
  persons: Data[],
  findOptions: FindOptions<IdValue, NameValue>
): Data | undefined {
  for (const person of persons) {
    if (findOptions.id && findOptions.name) {
      if (findOptions.id === person.id && findOptions.name === person.name) {
        return person
      }
    } else {
      if (findOptions.id && findOptions.id === person.id) {
        return person
      }
      if (findOptions.name && findOptions.name === person.name) {
        return person
      }
    }
  }
}

const data: Person[] = [
  { id: 1, name: 'John Doe', birthDate: new Date('1999-01-01') },
  { id: 2, name: 'Joe Dan' },
  { id: 3, name: 'John Doe' },
  { id: 4, name: 'Jane Dee' },
]

console.log(findData<Person>(data, { id: 2 }))
console.log(findData<Person>(data, { id: 4 }))
console.log(findData<Person>(data, { name: 'Joe Dan' }))
console.log(findData<Person>(data, { name: 'John Doe' }))
console.log(findData<Person>(data, { name: 'John Doe', id: 3 }))

const dataPlayer: Player[] = [
  { id: 'ab-01', name: 'John', level: 2 },
  { id: 'ab-02', name: 'Joe', level: 1 },
  { id: 'ab-03', name: 'Jane', level: 22 },
  { id: 'ab-04', name: 'Joe', level: 59 },
]

console.log(findData<Player, string>(dataPlayer, { id: 'ab-01' }))

interface User {
  id: number
  name: string
  email: string
}

const dataUser: User[] = [
  { id: 1, name: 'a', email: 'a@example.com' },
  { id: 2, name: 'b', email: 'b@example.com' },
]

console.log(findData<User>(dataUser, { id: 1 }))
