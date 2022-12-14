import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import BlogSection from "./page/BlogSection/BlogSection";
import BlogSectionHeaderBg from "./img/header-blogSection-bg.webp";
import BlogDetail from "./page/BlogDetail/BlogDetail";
// import  Router from "./routes"
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route
        path="/BlogSite"
        element={
          <BlogSection
            img={BlogSectionHeaderBg}
            title="Tóm Lại Là"
            desc="Trả lời ngắn gọn các câu hỏi quan trọng nhất xung quanh một sự kiện: Ai? Làm gì? Khi nào? Ở đâu? Bao nhiêu? Như thế nào? Tại sao?"
          />
        }
      />
    </Routes>
    <Routes>
      <Route path="/BlogDetail" element={<BlogDetail />} />
    </Routes> 
  </Router>
  );
}

export default App;
