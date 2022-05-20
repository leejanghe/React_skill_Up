import React from 'react';
import styled from 'styled-components';

const PaginationWrap = styled.div`
    display: flex;
    width: 100%;
    margin: 30px auto 60px;
    ul {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        li {
            width: 32px;
            height: 32px;
            margin-right: 8px;
            list-style-type: none;
            background-color: #FFFFFF;
            border: 1px solid #DFE3E8;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: #212B36;
            font-size: 18px;
        }
    }
`

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {  
 const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
}
  return (
  <PaginationWrap>
      <ul>
        {pageNumbers.map(number => (
        <li key={number} >
        <a onClick={() => paginate(number)}>{number}</a>
        </li>))}
      </ul>
 </PaginationWrap>);};


export default Pagination;