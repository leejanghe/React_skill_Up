import React from 'react'
import styled from 'styled-components'

const AlarmWarpper = styled.div`
background: #112B3C;
text-align: center;
padding: 1rem;
border-radius: 5px;
border: 1px solid gray;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
>div>h1{
    font-size: 1.2rem;
    color: white;
}
>div>p{
    font-size: 1rem;
    color: white;
    font-weight: 300;
}
`


function AlarmText({text}) {
    console.log(text[0].h1)
    return (
        <AlarmWarpper>
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
        </AlarmWarpper>
    )
}

export default AlarmText
