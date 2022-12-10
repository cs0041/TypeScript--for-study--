interface UserItem {
    displayName : string
    age : number
}


export const users: UserItem[] = []

export function addUser(data: UserItem ){
    users.push(data)
    return(data)
}

export function getUser(index:number){
    return users[index]
}