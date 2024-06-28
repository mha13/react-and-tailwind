import ReducerFun from "./ReducerFun"
import TaskList from "./TaskList"
import TaskProvider from "./TaskProvider"

const Component1 = () => {
    return (
        <div id='page1' className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10" >
            <div className="mx-auto max-w-md">
                <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 pt-2 pb-6 text-base leading-7 text-gray-600">
                        <ReducerFun />
                        <p>A Practice of <code className="text-sm font-bold text-gray-900" >React.js</code> and <code className="text-sm font-bold text-gray-900" >Tailwind.css</code> :<br />Here are an <strong>TO DO LIST</strong></p>
                        <TaskProvider>
                            <TaskList />
                        </TaskProvider>

                        <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
                    </div>
                    <div className="pt-8 text-base font-semibold leading-7">
                        <p className="text-gray-900">Want to dig deeper into my projects?</p>
                        <p>
                            <a href='https://github.com/mha13' className="text-orange-600 hover:text-orange-700">Go to my git hub →</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component1; 