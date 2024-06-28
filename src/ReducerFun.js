import { useReducer, useState } from "react";

const reducer = (state, action) => {
    if (action.type === 'like') return { like: state.like + 1 }
    if (action.type === 'dislike') return { like: state.like - 1 }
    return Error();
}

const ReducerFun = () => {

    const initailLike = { like: 12 };
    const [state, dispatch] = useReducer(reducer, initailLike);
    const [liked, setLiked] = useState(false);

    return (
        <div className="flex items-center justify-center mt-2 absolute top-6">
            <svg
                onClick={() => { dispatch({ type: liked ? 'dislike' : 'like' }); setLiked(!liked) }}
                className={liked ?"ml-2 h-6 w-6 flex-none fill-orange-500 stroke-orange-500 stroke-2":"ml-2 h-6 w-6 flex-none fill-orange-100 stroke-orange-500 stroke-2"}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg><h3 className="text-sm text-orange-600">{state.like}</h3>
        </div>


    )
}

export default ReducerFun;