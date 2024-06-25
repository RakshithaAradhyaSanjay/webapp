
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import AllCourses from './component/AllCourses'
import FullStack from './component/FullStack'
import DataScience from './component/DataScience'
import CyberSecurity from './component/CyberSecurity'
import Career from './component/Career'
import Navbar from './Navbar'



function App() {
  return (
    <div>
    <Navbar/>
    <Router>
      
      <Routes>
        <Route path="/" exact element ={<AllCourses />} />
        <Route path="/FullStack" element ={<FullStack/>} />
        <Route path="/DataScience" element ={<DataScience />} />
        <Route path="/CyberSecurity" element ={<CyberSecurity/>}/>
        <Route path="/Career" element ={<Career/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
