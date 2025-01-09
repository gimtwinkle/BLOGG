import React, { useEffect, useState } from 'react'
import ListTitle from '../components/ListTitle'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { CreatePost } from './CreatePost'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export default function PostList() {
    const [getLists, setGetLists] = useState([])

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "blogg"));
                const listsData = [];
                querySnapshot.forEach((doc) => {
                    listsData.push({ id: doc.id, ...doc.data() });
                });
                setGetLists(listsData);
            } catch(error) {
                console.log(error);
            }
        }
        fetchLists();
    }, [])
    
    return (
        <>
            {getLists.map(item => (
                <div key={item.id}>
                    <Link to={`/PostDetail/${item.id}`} element={ListTitle}>{item.title}</Link>
                </div>
            ))}
            <Link to='/CreatePost' element={<CreatePost />}>
                <Button>작성하기</Button>
            </Link>
        </>
    )
}
