import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
height: 60%;
background: #212B36;
color: #fff;
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
