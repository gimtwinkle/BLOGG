import './App.css';
import { CreatePost } from './pages/CreatPost';
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

export default App;
