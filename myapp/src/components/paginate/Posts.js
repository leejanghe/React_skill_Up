import React from 'react'

function Posts({posts, loading}) {

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <>
        <div>
            {posts.map(({id, title, body})=>(
                <div>
                    <h3>
                    {id}. {title}
                    </h3>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Posts
