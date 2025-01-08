import React, { useState } from 'react'
import Input from './../components/Input'
import Textarea from './../components/Textarea'
import Button from './../components/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

export const CreatePost = () => {
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
            const docRef = await addDoc(collection(db, 'bloggg'), {
                title: title,
                content: content,
                createdAt: new Date(),
            })
            console.log('Document written with ID: ', docRef.id)
            alert('데이터가 저장되었습니다!')
        } catch (error) {
            console.error('Error details:', error.code, error.message) // 더 자세한 에러 정보 출력
            alert(`저장 중 오류가 발생했습니다: ${error.message}`)
        }
    }

    return (
        <>
            <Input value={title} onChange={handleChangeInput} />
            <Textarea value={content} onChange={handleChangeTextarea} />
            <Button onClick={handleClickSubmit}>완료</Button>
            <Button>목록</Button>
        </>
    )
}
