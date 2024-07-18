import TodoCard from "@/components/TodoCard";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col items-cente mt-2 text-center">
            <h1 className="text-4xl font-bold font-mono">
                vivapop
            </h1>
                <TodoCard />
        </main>
    )
}

export default Home;