import React from 'react'

// function Great(){
//     return <h1>hello chaitanya!! </h1>
// }

    const Great = (props) =>
    {
        console.log(props)
        return (
            <div>
                 <h1>hello {props.name}  a.k.s {props.heroname}....!</h1>
                {props.children}
            </div>
           
        )
    }

export default Great