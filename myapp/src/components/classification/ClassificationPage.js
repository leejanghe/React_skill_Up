import React,{useState, useEffect} from 'react'

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

    return (
        <div>
            준비중..!
        </div>
    )
}

export default ClassificationPage
