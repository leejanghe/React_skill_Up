import React,{useState} from 'react'
import AlarmText from '../../common/AlarmText';
import SendData from './SendData';

function DataPage() {

    // 아래 9~14줄을 주석을 처리하면 어떻게 나올지 확인하기!
    const [data, setData] = useState([
        // {id:0,name:'아이유',age:20,content:'저는 가수입니다'},
        // {id:1,name:'아리',age:21,content:'홀려볼까요'},
        // {id:2,name:'송편',age:18,content:'저는 바보입니다'},
        // {id:3,name:'장만월',age:31,content:'슈슈슈슈슈슛'},
        // {id:4,name:'유카키',age:45,content:'쿠쿠르삥뽕오'},
        // {id:5,name:'코로코',age:22,content:'가나다나마다'},
    ]);


    const text = [{
        h1:'데이터 길이 활용히기',
        p:'데이터 길이를 활용하여 데이터가 있을때와 없을때를 표현 할 수 있습니다.'
    }]


    return (
        <div>
            <AlarmText text={text}/>
            <SendData data={data}/>
        </div>
    )
}

export default DataPage
