import React from 'react'
import styled from 'styled-components'


function AlarmText({text}) {
    console.log(text[0].h1)
    return (
        <div>
        {
            text.map((item,idx)=>{
                return(
                    <div key={idx}>
                        <h1>{item.h1}</h1>
                        <p>{item.p}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default AlarmText
