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
    const [modalVisbleId, setModalVisbleId] = useState('')


    const handleClick = (id) => {
        // alert(`${id} click`)
        setShowModal(true)
        console.log('id@@@@',id)
        setModalVisbleId(id)
    }


    return (
                <Wrapper>
                    {data.map((item,a) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.contents}</p>
                            <p onClick={()=>handleClick(item.id)}>자세히 보기</p>
                            {
                              modalVisbleId === item.id && showModal === true ? 
                                <ModalForm 
                                // data={data[a]}
                                id={item.id}
                                title={item.title} 
                                contents={item.contents}
                                detail={item.detail}
                                setShowModal={setShowModal}
                                /> : null
                            }
                            


                            {/* <ModalForm 
                            id={item.id}
                            modalVisbleId={modalVisbleId}
                            setModalVisbleId={setModalVisbleId} */}
                            {/* /> */}
                        </div>               
                    ))}    
                </Wrapper>
    )
}

export default DataForm
