import { v4 as uuid } from 'uuid'
import { hashSync } from 'bcrypt'

function hasUUID<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    id: string = uuid()
  }
}

function hasCreatedAt(timeZone: string, locale = 'th-TH') {
  return <T extends { new (...args: any[]): {} }>(target: T) => {
    return class extends target {
      createdAt: string = new Date().toLocaleString(locale, { timeZone })
    }
  }
}

function minLength(size: number) {
  return (target: any, propertyKey: string) => {
    const propertyName = `_${propertyKey}`
    // _password
    // password: { get, set }
    Reflect.defineProperty(target, propertyKey, {
      get() {
        return this[propertyName]
      },
      set(newValue: string) {
        if (newValue.length < size) {
          throw new Error(`Data is less than ${size}`)
        }
        this[propertyName] = newValue
      },
    })
  }
}

function hash(target: any, propertyKey: string) {
  const propertyName = `_${propertyKey}`
  Reflect.defineProperty(target, propertyKey, {
    get() {
      return this[propertyName]
    },
    set(newValue: string) {
      this[propertyName] = hashSync(newValue, 8)
    },
  })
}

function printLog(prefix: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value as Function
    descriptor.value = function (...args: any[]) {
      // before
      console.log(new Date(), prefix, args)
      originalMethod.apply(this, args)
      // after
    }
  }
}

function showDuration(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value as Function
  descriptor.value = function (...args: any[]) {
    // before
    const start = new Date()
    originalMethod.apply(this, args)
    const end = new Date()
    console.log('[Show duration]:', Number(end) - Number(start))
    // after
  }
}

class User {
  email: string

  constructor(email: string) {
    this.email = email
  }
}

@hasUUID
@hasCreatedAt('Asia/Bangkok')
class Member extends User {
  id: string = ''
  createdAt: string = ''
  role: string = 'member'
}

@hasUUID
@hasCreatedAt('America/New_York')
class Guest extends User {
  id: string = ''
  createdAt: string = ''
  role: string = 'guest'
}

class Admin extends User {
  @minLength(8)
  @hash
  password: string

  constructor(email: string, password: string) {
    super(email)
    this.password = password
  }

  @printLog('[Admin password changed] =')
  @showDuration
  changePassword(password: string) {
    this.password = password
  }
}

const johnUser = new User('john@example.com')
const joeUser = new User('joe@example.com')
console.log(johnUser)
console.log(joeUser)

const johnMember = new Member('john@example.com')
const joeMember = new Member('joe@example.com')
console.log(johnMember)
console.log(joeMember)

const johnGuest = new Guest('john@example.com')
const joeGuest = new Guest('joe@example.com')
console.log(johnGuest)
console.log(joeGuest)

const johnAdmin = new Admin('john@example.com', '12345678')
const joeAdmin = new Admin('joe@example.com', 'abcd1234567890')
console.log(johnAdmin)
console.log(joeAdmin)
console.log(johnAdmin.password)
console.log(joeAdmin.password)

joeAdmin.changePassword('00000000')
console.log(joeAdmin.password)

joeAdmin.changePassword('123123123')
console.log(joeAdmin.password)
