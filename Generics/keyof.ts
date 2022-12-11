namespace KeyOf {
  // function pickObj<Obj>(obj: Obj[], fields: (keyof Obj)[]): Obj[] {
  //function pickObj<Obj>(obj: Obj[], fields: Array<'active' | 'name'>): Array<Obj> {
  function pickObj<Obj>(obj: Obj[], fields: Array<keyof Obj>): Obj[] {
    return obj.map((it) => {
      const newObj = {} as Obj
      for (const field of fields) {
        newObj[field] = it[field]
      }
      return newObj
    })
  }

  interface User {
    id: number
    name: string
    active: boolean
  }

  const users: User[] = [
    { id: 1, name: 'John', active: true },
    { id: 2, name: 'Joe', active: false },
    { id: 3, name: 'Jane', active: true },
  ]

  console.log(pickObj<User>(users, ['active', 'name']))

  interface Movie {
    title: string
    stars: string[]
    creator: string
    updatedAt: Date
  }

  const movies: Movie[] = [
    {
      title: 'Ant',
      stars: ['John', 'Joe'],
      creator: 'Jane',
      updatedAt: new Date('2021-01-06'),
    },
    {
      title: 'Bee',
      stars: ['Bee', 'Bon'],
      creator: 'Ball',
      updatedAt: new Date('2022-02-16'),
    },
  ]

  console.log(pickObj<Movie>(movies, ['creator', 'stars']))
}
