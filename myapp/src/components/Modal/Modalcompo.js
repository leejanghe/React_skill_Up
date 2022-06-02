import React, { useState } from 'react'
import AlarmText from '../../common/AlarmText'
import DataForm from './DataForm'

function Modalcompo() {

    const [data, setData] = useState([
        {id:0, title:'사람',contents:'사람은 동물일까요?',detail:'사람은 동물이 맞아요! 왜냐하면 짐승이거든요!'},
        // {id:1, title:'원숭이',contents:'원숭이는 사람일까요?',detail:'원숭이는 동물이예요!@#!@!@!!'},
        // {id:2, title:'더미더미',contents:'더미데이터입니다.',detail:'할말이 없어요~@~@~@@@낄끼루'},
    ])
    
    const text = [{
        h1:'모달창에 데이터 넣어서 출력하기',
        p:'useState를 활용해서 데이터 바인딩한 모달을 표현할수 있습니다.'
    }]

    return (
        <div>
            <AlarmText text={text}/>
            <DataForm data={data}/>
        </div>
    )
}

export default Modalcompo
