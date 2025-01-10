import React, { useEffect, useState } from 'react'
import ListTitle from '../components/ListTitle'
import ListContent from '../components/ListContent'
import Button from '../components/Button'
import { Link, useParams } from 'react-router-dom'
import { CreatePost } from './CreatePost'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { UpdatePost } from "./UpdatePost";

export function PostDetail() {
    const params = useParams();
    const [getPost, setGetPost] = useState('');
    
    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "blogg", `${params.listId}`);
            console.log(params);
            const docSnap = await getDoc(docRef);
            try {
                if (docSnap.exists()) {
                  setGetPost(docSnap.data());
                } else {
                  // docSnap.data() will be undefined in this case
                  console.log("No such document!");
                }
                
            } catch(error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [params])
    
    return (
        <>
            <div>
                <ListTitle>{getPost.title}</ListTitle>
                <ListContent>{getPost.content}</ListContent>
            </div>
            <Link to='/CreatePost' element={<CreatePost />}>
                <Button>작성하기</Button>
            </Link>
            <Link to='/UpdatePost' element={<UpdatePost />}>
                <Button>수정하기</Button>
            </Link>
        </>
    )
}
