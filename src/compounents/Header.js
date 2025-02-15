import { useState, useRef } from 'react';
import TodoImg from '../assets/Todo.png';

const TodoItem = ({ text, id, deleteTodo }) => {
    return (
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg my-2">
            <span>{text}</span>
            <button onClick={() => deleteTodo(id)} className="text-red-500">Delete</button>
        </div>
    );
};

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        };

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="bg-white w-11/12 max-w-md flex flex-col p-4 sm:p-7 min-h-[550px] rounded-xl shadow-md mx-auto">
            <div className="flex items-center gap-2">
                <img className='w-8' src={TodoImg} alt="Todo" />
                <h1 className="text-xl sm:text-3xl font-semibold">Todo List</h1>
            </div>

            {/* Input and Button Container */}
            <div className='flex flex-col sm:flex-row items-center my-3 sm:my-7 bg-gray-200 rounded-full p-2'>
                <input 
                    ref={inputRef} 
                    className='bg-transparent border-0 outline-none flex-1 w-full h-12 sm:h-14 pl-4 sm:pl-6 pr-2 placeholder:text-slate-600' 
                    type="text" 
                    placeholder='Add your task' 
                />
                <button onClick={add} className='border-none rounded-full bg-black w-full sm:w-32 h-12 sm:h-14 text-white text-lg font-medium cursor-pointer mt-2 sm:mt-0'>
                    ADD +
                </button>
            </div>

            {/* Todo List */}
            <div>
                {todoList.map((item) => (
                    <TodoItem key={item.id} text={item.text} id={item.id} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;


        