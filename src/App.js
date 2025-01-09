import './App.css';
import { CreatePost } from './pages/CreatePost';
import { PostDetail } from './pages/PostDetail';
import PostList from './pages/PostList';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="" element={<PostList />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/PostDetail" element={<PostDetail />} />
      </Routes>

  );
}
//TODO 포스팅 상세페이지, 수정,삭제 -> shadcn ui 적용 -> 빌드해서 배포하고 -> 리스트페이지가 메인이 되도록 -> 추가 업데이트할 내용은 써드파티에디터 추가하는것. 

export default App;
