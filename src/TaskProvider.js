import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const tasksValue = ['Code completion with instant preview', 'Extracting classes with @apply', 'Customizing your tailwind.config.js file'];

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(tasksValue);

    const addTask = (item) => {
        const newTasks = [...tasks, item];
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => useContext(TaskContext);
export default TaskProvider;
