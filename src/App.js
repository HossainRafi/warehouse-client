import "./App.css";
import Error from "./components/Shared/Error";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Account/Login/Login";
import Signup from "./components/Account/Signup/Signup";
import ManageItem from "./components/ManageItem/ManageItem";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Shared/Footer";
import MyItem from "./components/MyItem/MyItem";
import Header from "./components/Shared/Header";
import RequireAuth from "./components/Account/RequireAuth/RequireAuth";
import { Toaster } from 'react-hot-toast';
import UpdateMobile from "./components/UpdateMobile/UpdateMobile";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />

        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        />

        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        />
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <UpdateMobile/>
            </RequireAuth>
          }
        />

        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default App;
