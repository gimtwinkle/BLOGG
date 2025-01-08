const handleClickSubmit = async () => {
    try {
        const docRef = await addDoc(collection(db, 'blogg'), {
            title: title,
            content: content,
            createdAt: new Date(),
        })
        console.log('Document written with ID: ', docRef.id)
        alert('데이터가 저장되었습니다!')
    } catch (error) {
        console.error('Error details:', error.code, error.message)  // 더 자세한 에러 정보 출력
        alert(`저장 중 오류가 발생했습니다: ${error.message}`)
    }
} 