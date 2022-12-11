import axios from 'axios'
import { find } from 'lodash'

interface UserItem {
  id: number
  name: string
}

interface PostItem {
  userId: number
  id: number
  title: string
  body: string
}

async function start() {
  const users = <UserItem[]>(await axios.get('https://jsonplaceholder.typicode.com/users')).data
  const posts = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data as PostItem[]
  const postsWithUsers: any = []
  for (const post of posts) {
    const findUser = find(users, { id: post.userId })
    if (!findUser) {
      continue
    }
    postsWithUsers.push({
      ...post,
      userName: findUser.name,
    })
  }
  console.log(postsWithUsers)
}

// document.getElementById('abc')?.addEventListener('click', (event) => {
//     (event.target as HTMLButtonElement).innerText
// })

start()
