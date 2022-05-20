import React,{useEffect, useState} from 'react'
// import ReactPaginate from 'react-paginate'
import axios from 'axios'
import Posts from './Posts';
import Pagination from './Pagination';



function PaginatePage() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
            setLoading(false)
        }
       fetchPosts();
    }, [])


//get current posts
const idxOfLastPost = currentPage * postsPerPage
const idxOfFirstPost = idxOfLastPost - postsPerPage
const currentPosts = posts.slice(idxOfFirstPost, idxOfLastPost)

// change page
const paginate = pageNumber => setCurrentPage(pageNumber)

    console.log(posts)
    return (
        <>
        <div>
        <h1>개시물</h1>
         <Posts posts={currentPosts} loading={loading}/>
         <Pagination 
         postsPerPage={postsPerPage}
         totalPosts={posts.length}
         paginate={paginate}
        />
        </div>
        </>
    )
}

export default PaginatePage
