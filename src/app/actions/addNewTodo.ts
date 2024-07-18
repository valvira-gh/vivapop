'use server';

import { z } from 'zod';
const bcrypt = require('bcrypt')

const saltRounds = 10

const FormData = z.object({
    content: z.string().min(2).max(255),
    isCompleted: z.boolean()
})

export const addNewTodo = async (prevState: any, queryData: FormData) => {
        const todoRaw = queryData.get('todo');
        console.log('TodoRaw:', todoRaw)

        return;
}