import React from "react";

export const  CTX=React.createContext();


const initState={

topics[general:[

        {from:'lakshan', msg:'hello machan'},
        {from:'bandara', msg:'hello brother'},
        {from:'sandaruawa', msg:'hello fucker'}

    ],


    topic2:[
        {from: 'peter', msg: 'hello machan'},
        {from: 'pancake', msg: 'hello brother'},
        {from: 'marusira', msg: 'hello fucker'}

    ]

}




function reducer(state, action){

    const {from,msg,topic}= action.payload;

    switch(action.type){

        case 'RECIEVE_MSG':

            return {

                ...state,
                [topic]:[

                    ...state[topic],
                    {from , msg}

                ]

            }

        default:

            return state;

    }
}





export default function Store(props) {

    const reducerHook= React.useReducer(reducer,initState);

    return (<CTX.Provider value={reducerHook}>

        {props.children}


    </CTX.Provider>)
}
