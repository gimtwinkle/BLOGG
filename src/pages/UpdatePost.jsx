import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

export function UpdatePost() {
    const params = useParams();
    const navigate = useNavigate(); 
    const [loadData, setLoadData] = useState({
        title:'',
        content:''
    });
    
    useEffect(() => {
        const loadPost = async () => {
            const docRef = doc(db, "blogg", `${params.postId}`);
            const docSnap = await getDoc(docRef);
            try {
                if (docSnap.exists()) {
                   setLoadData(docSnap.data());
                } else {
                  // docSnap.data() will be undefined in this case
                  alert('게시물이 없습니다.')
                  navigate('/')
                }
                
            } catch(error) {
                console.log(error);
            }
        }
        loadPost();
        
    }, [params,navigate])



    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleChangeInput = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeTextarea = (e) => {
        setContent(e.target.value)
    }
    const handleClickSubmit = async () => {
        try {
            const docRef = doc(db, "blogg", `${params.postId}`);
            await updateDoc(docRef, {
                title: title,
                content: content,
                createdAt: new Date(),
            },
            { 
                capital: true 
            }
        );
            console.log('Document written with ID: ', docRef.id)
            alert('데이터가 저장되었습니다!')
            navigate(`/PostDetail/${params.postId}`);
        } catch (error) {
            console.error('Error details:', error.code, error.message) // 더 자세한 에러 정보 출력
            alert(`저장 중 오류가 발생했습니다: ${error.message}`)
        }
    }

    return (
        <>
            <div>
                <Input defaultValue={loadData.title} onChange={handleChangeInput} />
                <Textarea defaultValue={loadData.content} onChange={handleChangeTextarea} />
            </div>
            <Button onClick={handleClickSubmit}>수정완료</Button>
        </>
    )
}
