import TodoForm from './TodoForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const TodoCard = () => {
    return (
        <section className="mt-4 flex flex-col items-center">
            <Card>
                <CardHeader>
                    <CardTitle className='text-center'>
                        Todo App
                    </CardTitle>
                </CardHeader>
                <TodoForm />
            </Card>
        </section>
    )
}

export default TodoCard;