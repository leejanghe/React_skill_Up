import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
height: 60%;
padding-top:1rem;
padding-bottom:1rem;
background: #212B36;
color: #fff;
>div>h3{
  color:red;
  font-size: 1rem;
  padding: .3rem;
}
p{
  color: fff;
  font-size: 16px;
  padding: .3rem;
}
`

function Posts({posts, loading}) {

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <>
        <Wrapper>
            {posts.map(({id, title, body})=>(
                <div>
                    <h3>
                    {id}. {title}
                    </h3>
                    <p>{body}</p>
                </div>
            ))}
        </Wrapper>
    </>
  )
}

export default Posts
