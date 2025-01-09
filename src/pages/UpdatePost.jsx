import Input from "../components/Input";
import Textarea from "./../components/Textarea";
import Button from "../components/Button";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export function UpdatePost(){
        useEffect(() => {
            const fetchLists = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "blogg"));
                    const listsData = [];
                    querySnapshot.forEach((doc) => {
                        listsData.push(doc.id,doc.data());
                        console.log(listsData)
                    });
                    console.log()
                } catch(error) {
                    console.log(error);
                }
            }
            fetchLists();
        }, [])
    return(
        <>
            <Input></Input>
            <Textarea></Textarea>
            <Button>수정완료</Button>
        </>
    )


}