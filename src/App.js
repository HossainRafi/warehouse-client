import './App.css';
import Error from './components/Shared/Error';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Account/Login/Login';
import Signup from './components/Account/Signup/Signup';
import ManageItem from './components/ManageItem/ManageItem';
import AddItem from './components/AddItem/AddItem';
import Footer from "./components/Shared/Footer";
import MyItem from './components/MyItem/MyItem';
import Header from './components/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additem" element={<AddItem/>} />
        <Route path="/manageitem" element={<ManageItem/>} />
        <Route path="/myitem" element={<MyItem/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
