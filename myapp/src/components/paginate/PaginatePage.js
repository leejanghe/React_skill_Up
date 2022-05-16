import React,{useEffect, useState} from 'react'
// import ReactPaginate from 'react-paginate'
import axios from 'axios'


function PaginatePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])




    console.log(posts)
    return (
        <>
        <div>
            <h1>게시물 목록</h1>
        </div>
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

export default PaginatePage
