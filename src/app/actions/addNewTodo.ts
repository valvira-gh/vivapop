'use server';

import { z } from 'zod';
const bcrypt = require('bcrypt')

const saltRounds = 10

const todoSchema = z.string().min(3).max(100);

export const addNewTodo = async (prevState: any, queryData: FormData) => {
        const todoRaw = queryData.get('todo');
        console.log('TodoRaw:', todoRaw)


        const validate = todoSchema.safeParse(todoRaw)
        console.log('validation:', validate)

        const todo = validate.data
        console.log('todo:', todo)
        return;
}