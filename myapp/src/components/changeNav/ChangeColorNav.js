import React,{useState} from 'react'
import AlarmText from '../../common/AlarmText'
import styled from 'styled-components'

const BannerWrap = styled.div`
background: black;
width: 1000px;
color: #fff;
`

const NavContent = styled.div`
display: flex;
background: gray;
width: 1000px;
justify-content: space-around;
cursor: pointer;
`

const ContentBox = styled.div`
width: 1000px;
height: 200px;
justify-content: center;
display: flex;
align-items: center;
font-size: 1.5rem;
background: white;
`

function ChangeColorNav() {

    const[navNum, setNavNum]=useState(1)

    const text = [{
        h1:'상태에 따른 네브 변경 및 배너 text변경하기',
        p:'useState 상태 변경함수와 css로 다양하게 네브 변경을 구현 할수있습니다.'
    }]

    const handleClickA = () => {
        console.log('a클릭')
        setNavNum(1)
    }

    const handleClickB = () => {
        console.log('b클릭')
        setNavNum(2)
    }

    const handleClickC = () => {
        console.log('c클릭')
        setNavNum(3)
    }

    const handleClickD = () => {
        console.log('d클릭')
        setNavNum(4)
    }

    return (
        <>
            <AlarmText text={text}/>
            <BannerWrap>
            <p>베너택스트 변경 &nbsp;&gt;&nbsp; <span>{
            navNum === 1 ? '1번 컨텐츠' 
            : navNum === 2 ? '2번 컨텐츠'
            : navNum === 3 ? '3번 컨텐츠'
            : '4번 컨텐츠'
            }
            </span></p>
            </BannerWrap>

            <NavContent>
                <p onClick={handleClickA}>A_Contents</p>
                <p onClick={handleClickB}>B_Contents</p>
                <p onClick={handleClickC}>C_Contents</p>
                <p onClick={handleClickD}>D_Contents</p>
            </NavContent>
            <ContentBox>
                    {navNum === 1 ? '1번 컨텐츠 입니다 환영합니다.' : ''}
                    {navNum === 2 ? '2번 컨텐츠 입니다 환영합니다.' : ''}
                    {navNum === 3 ? '3번 컨텐츠 입니다 환영합니다.' : ''}
                    {navNum === 4 ? '4번 컨텐츠 입니다 환영합니다.' : ''}
            </ContentBox>
        </>
    )
}

export default ChangeColorNav
