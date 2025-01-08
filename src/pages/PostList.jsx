import React from "react";
import ListTitle from "../components/ListTitle";
import ListContent from "../components/ListContent";
import Button from "../components/Button";
import { CreatePost } from "./CreatPost";
import { Link } from "react-router-dom";


export default function PostList(){
    return(
        <>
            <div>
                <ListTitle>포스팅 제목</ListTitle>
                <ListContent>포스팅 내용</ListContent>
                <Link to="/PostDetail" element={<CreatePost />}><Button>작성하기</Button></Link>
            </div>
        </>
    )
}