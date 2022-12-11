type TodoTag = 'important' | 'common' | 'event'

interface TodoItem {
    title: string
    description?: string
    dueDate?: Date
    completed: boolean
    createdBy: string
    tag: TodoTag
}

const todo: TodoItem = {
    title: 'Do something',
    completed: false,
    createdBy: 'John',
    tag: 'common'
}

const todoTask: Required<TodoItem> = {
    title: 'Do my job',
    description: 'Get to boss',
    dueDate: new Date('2023-01-02'),
    completed: true,
    createdBy: 'Joe',
    tag: 'important'
}

const todoSlowLife: Partial<TodoItem> = {
    title: 'Go shopping'
}

type EmployeeList = 'john' | 'joe' | 'jane'

const todoOrganization: Record<EmployeeList, Pick<TodoItem, 'title' | 'completed'>> = {
    john: { title: 'Do frontend', completed: true },
    joe: { title: 'Do backend', completed: false },
    jane: { title: 'Contract', completed: false },
}

const todoMyself: Omit<TodoItem, 'createdBy' | 'tag'> = {
    title: 'Go eat',
    completed: false,
    description: 'Go to the mall near me'
}