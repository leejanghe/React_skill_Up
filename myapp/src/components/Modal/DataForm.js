import React, { useState } from 'react'
import styled from 'styled-components'
import ModalForm from './ModalForm'




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

    const [showModal, setShowModal] = useState(false);

    const handleClick = (id) => {
        // alert(`${id} click`)
        setShowModal(true)
    }


    return (
                <Wrapper>
                    {data.map((item,a) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.contents}</p>
                            <p onClick={()=>handleClick(item.id)}>자세히 보기</p>
                            {
                                showModal === true ? 
                                <ModalForm 
                                // data={data[a]}
                                id={data[a].id}
                                title={data[a].title}
                                contents={data[a].contents}
                                detail={data[a].detail}
                                setShowModal={setShowModal}
                                /> : null
                            }
                        </div>               
                    ))}    
                </Wrapper>
    )
}

export default DataForm
