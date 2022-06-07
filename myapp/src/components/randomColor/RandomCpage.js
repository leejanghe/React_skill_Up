import React,{useState} from 'react'
import AlarmText from '../../common/AlarmText'
import styled from 'styled-components'

const WrapDiv = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .colorBox{
        margin-top: 30px;
        background: red;
        width: 100%;
        height: 300px;
        border-radius: 20px;
        z-index: 9;
    }
`

const Btn = styled.button`
    font-size: 20px;
    background: darkblue;
    color: white;
    padding: 1.5rem;
    border-radius: 15px;
    outline: none;
    margin-top: 20px;
    &:active{
        transform: scale(.99);
        background-color: red;
    }
`



function RandomCpage() {

    const [colors, setColors] = useState([
        "#ef5777",
        "#575fcf",
        "#4bcffa",
        "#34e7e4",
        "#0be881",
        "#f53b57",
        "#3c40c6",
        "#0fbcf9",
        "#00d8d6",
        "#05c46b",
        "#ffc048",
        "#ffdd59",
        "#ff5e57",
        "#d2dae2",
        "#485460",
        "#ffa801",
        "#ffd32a",
        "#ff3f34"
    ])


    const handleRandomClick = () => {
        console.log(Math.floor(Math.random()*colors.length))
        const randomColor = document.querySelector('colorBox')
        const color1 = colors[Math.floor(Math.random()*colors.length)]
        const color2 = colors[Math.floor(Math.random()*colors.length)]
        randomColor.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;
    }
    


    const text = [{
        h1:'렌덤 배경 색상 출력하기',
        p:'컬러 상태와 돔을 활용하여 렌덤 배경색상을 구현할수 있습니다.'
    }]

    return (
        <>
            <AlarmText text={text}/>
        <WrapDiv>
            <Btn onClick={handleRandomClick}>Give me Color</Btn>
            <div className="colorBox"></div>
        </WrapDiv>
        </>
    )
}

export default RandomCpage
