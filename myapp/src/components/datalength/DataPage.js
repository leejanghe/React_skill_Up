import React,{useState} from 'react'
import AlarmText from '../../common/AlarmText';

function DataPage() {

    const [data, setData] = useState([
        {id:0,name:'아이유',age:20,}
    
    ]);


    const text = [{
        h1:'데이터 길이 활용히기',
        p:'데이터 길이를 활용하여 데이터가 있을때와 없을때를 표현 할 수 있습니다.'
    }]

    return (
        <div>
            <AlarmText text={text}/>
        </div>
    )
}

export default DataPage
