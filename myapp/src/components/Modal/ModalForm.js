import React from 'react'
import styled from 'styled-components'

const Wrapblack = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  z-index: 999;
  /* justify-content: center; */
`

const WrapModal = styled.div`
/* position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
background : red;
width: 50%;
height: 50%; */
width: 40%;
  position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  padding: 20px;
`

function ModalForm({id, title, contents,setShowModal,data}) {
    console.log('modal',id, title, contents)
    return (
        <Wrapblack>
        <WrapModal>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{contents}</p>
            <button onClick={()=>setShowModal(false)}>닫기</button>
        </WrapModal>
        </Wrapblack>
    )
}

export default ModalForm
