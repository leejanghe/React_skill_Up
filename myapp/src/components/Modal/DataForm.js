import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: grid;
gap: 30px;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 2rem;
>div{
    background: white;
    padding: 1rem;
}
`

function DataForm({data}) {
    console.log('data',data)
    return (
                <Wrapper>
                    {data.map(item => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.contents}</p>
                            <p>자세히 보기</p>
                        </div>               
                    ))}    
                </Wrapper>
    )
}

export default DataForm
