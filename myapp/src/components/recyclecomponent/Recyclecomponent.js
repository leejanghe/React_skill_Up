import React from 'react'
import AlarmText from '../../common/AlarmText'


function Recyclecomponent() {


    const text = [{
        h1:'컴포넌트 재사용하기',
        p:'알람컴포넌트를 재사용해서 다르게 표현해보자!'
    }]

    const recycletext = [{
        h1:'props로 다른 텍스트 데이터 넣기',
        p:'저는 재사용된 컴포넌트 입니다!'
    }]

    return (
        <div>
            <AlarmText text={text}/>
            <br/>
            <AlarmText text={recycletext} pink/>
        </div>
    )
}

export default Recyclecomponent
