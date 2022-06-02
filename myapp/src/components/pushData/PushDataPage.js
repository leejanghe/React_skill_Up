import React,{useState} from 'react'

function PushDataPage() {

const [workImg, setWorkImg] = useState([])


    return (
        <div>
            <h3>이미지</h3>
         <div>
             {
                 workImg.length > 0 ? workImg.map(item =>(
                     <img src={item.thumbnail} /> 
                 )):''
             }
             <div>이미지 추가</div>
         </div>
        </div>
    )
}

export default PushDataPage
