import React from 'react'

export default function Mytempl({pageContext}){
    return(
        <div>
        <h1>{pageContext.name}</h1>
        <h1>{pageContext.desc}</h1>
        </div>
    )
}