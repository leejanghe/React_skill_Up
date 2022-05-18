import React,{useState} from 'react'
import AlarmText from '../../common/AlarmText'

function ChangeColorNav() {

    const[togle, setTogle]=useState('')

    const text = [{
        h1:'상태에 따른 네브 변경 및 배너 text변경하기',
        p:'useState 상태 변경함수와 css로 다양하게 네브 변경을 구현 할수있습니다.'
    }]

    return (
        <div>
            <AlarmText text={text}/>
        </div>
    )
}

export default ChangeColorNav
