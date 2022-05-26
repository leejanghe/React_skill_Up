import React from 'react'
import styled from 'styled-components'

const WrapModal = styled.div`
position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
background : red;
width: 50%;
height: 50%;
`

function ModalForm({id, title, contents,setShowModal,data}) {
    console.log('modal',id, title, contents)
    return (
        <WrapModal>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{contents}</p>
            <button onClick={()=>setShowModal(false)}>닫기</button>
        </WrapModal>
    )
}

export default ModalForm
