import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import AlarmText from '../../common/AlarmText'



function ClassificationPage() {


    const [data, setData] = useState([
        {id:0, name:'kimgo',age:20,score:45,grades:'BAD',result:'불합격'},
        {id:1, name:'junk',age:24,score:75,grades:'GOOD',result:'합격'},
        {id:2, name:'leeho',age:30,score:60,grades:'BAD',result:'불합격'},
        {id:3, name:'kokoj',age:19,score:100,grades:'GOOD',result:'합격'},
        {id:4, name:'parkbo',age:22,score:30,grades:'BAD',result:'불합격'},
        {id:5, name:'kimhoo',age:31,score:82,grades:'GOOD',result:'합격'},
        {id:6, name:'bababo',age:22,score:70,grades:'GOOD',result:'합격'},
        {id:7, name:'gora',age:58,score:35,grades:'BAD',result:'불합격'},
        {id:8, name:'keng',age:18,score:21,grades:'BAD',result:'불합격'},
        {id:9, name:'pepe',age:23,score:97,grades:'GOOD',result:'합격'},
        {id:10, name:'messa',age:20,score:85,grades:'GOOD',result:'합격'},
    ])

    const text = [{
        h1:'데이터 분류 하기',
        p:'데이터 기준에 따라 데이터를 분류하여 표현할 수 있습니다.'
    }]


    return (
        <div>
            <AlarmText text={text}/>
            <h1>성적 평가</h1>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>점수</th>
                        <th>학점</th>
                        <th>결과</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.score}</td>
                            <td>{item.grades}</td>
                            <td>{item.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ClassificationPage
