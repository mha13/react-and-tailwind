import ReducerFun from "./ReducerFun"

const Component2 = () => {
    return (
        <div id='page1' className="relative bg-gradient-to-b from-white to-orange-200 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10" >
            <div className="mx-auto max-w-md">
                <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 pt-2 pb-6 text-base leading-7 text-gray-600">
                        <ReducerFun />
                        <h1 className="text-xl"> Donate me a coffee </h1>
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
export default Component2;