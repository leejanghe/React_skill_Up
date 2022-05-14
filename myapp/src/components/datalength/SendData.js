import React from 'react'
import styled from 'styled-components';

const DataWrapper = styled.div`
background: #205375;
padding: 1rem;
margin-top: 2rem;
border-radius: 5px;
border: 1px solid gray;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    >h1{
        color: white;
        font-size: 1.2rem;
        margin:0;
        margin-bottom: .5rem;
        border-bottom: 1px solid white;
    }
    div>p{
        display: flex;
        margin: 0;
        color: white;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: .2rem;
    }
}
`

function SendData({data}) {

    console.log(data);


    return (
        <DataWrapper>
            {
                data.length === 0 ? <div>데이터 없어요</div> : 
                data.map((item,idx)=>{
                    return(
                        <div key={idx}>
                            <h1>{item.name}</h1>
                            {/* <p>{item.age}</p> */}
                            <div>
                            <p>{item.age}</p>
                            <p>{item.content}</p>
                            </div>
                        </div>
                    )
                }
            )
            }
        </DataWrapper>
    )
}

export default SendData
