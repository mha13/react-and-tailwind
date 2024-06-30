import { useState } from 'react';
import { useTaskContext } from './TaskProvider';

const TaskList = () => {
    const { tasks, addTask, removeTask } = useTaskContext();

    const [newTask, setNewTask] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(newTask.length > 0){
                addTask(newTask); setNewTask('');
                setbtnActive(false);
            }

        }
    }
    const [btnActive, setbtnActive] = useState(false);

    return (
        <ul className="space-y-4">
            {tasks.map((task, index) => (
                <li className="flex items-center justify-between" key={index}>
                    <div className='flex items-center '>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-300 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                        </span>
                        <p className="ml-4">{task}</p>
                    </div>
                    <svg onClick={() => removeTask(index)} className="ml-2 h-6 w-6 flex-none fill-orange-100 stroke-orange-500 stroke-2 hover:animate-pulse" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="11"></circle>
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
                    </svg>
                </li>
            ))}
            <input type='text' value={newTask}
                onChange={e => { setNewTask(e.target.value); e.target.value.length > 0 ? setbtnActive(true) : setbtnActive(false) }}
                placeholder='Add new task'
                onKeyDown={handleKeyDown}
                className="mt-1 block  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"/>
            <button id='submitTask'
                disabled={!btnActive}
                className={btnActive ? "bg-orange-500 text-white rounded-full px-3 py-2" : "bg-gray-500 text-white rounded-full px-3 py-2"}
                onClick={() => { addTask(newTask); setNewTask(''); setbtnActive(false) }}>Add New Task</button>
        </ul>
    );
};

export default TaskList;