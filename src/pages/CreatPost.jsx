import React, { useState } from "react";
import Input from "./../components/Input";
import Textarea from "./../components/Textarea";
import Button from "./../components/Button";

export const CreatePost = () =>{
    const [title,setTitle] = useState('');

    const handleChangeInput = (e) =>{
        console.log(setTitle(e.target.value))
    }
    return(
        <>
            <Input
                value={title}
                onChange={handleChangeInput}
            />
            <Textarea></Textarea>
            <Button>완료</Button>
            <Button>목록</Button>
        </>
    )
}