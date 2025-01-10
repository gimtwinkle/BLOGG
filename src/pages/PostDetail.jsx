import React, { useEffect, useState } from 'react'
import ListTitle from '../components/ListTitle'
import ListContent from '../components/ListContent'
import Button from '../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CreatePost } from './CreatePost'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export function PostDetail() {
    const params = useParams();
    const [getPost, setGetPost] = useState({
        title:'',
        content:''
    });
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "blogg", `${params.postId}`);
            const docSnap = await getDoc(docRef);
            try {
                if (docSnap.exists()) {
                  setGetPost(docSnap.data());
                } else {
                  // docSnap.data() will be undefined in this case
                  alert('게시물이 없습니다.')
                  navigate('/')
                }
                
            } catch(error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [params,navigate])
    
    return (
        <>
            <div>
                <ListTitle>{getPost.title}</ListTitle>
                <ListContent>{getPost.content}</ListContent>
            </div>
            <Link to='/CreatePost' element={<CreatePost />}>
                <Button>작성하기</Button>
            </Link>
            <Link to={`/UpdatePost/${params.postId}`}>
                <Button>수정하기</Button>
            </Link>
            <Link to={'/'}>
                <Button>목록으로</Button>
            </Link>
        </>
    )
}
