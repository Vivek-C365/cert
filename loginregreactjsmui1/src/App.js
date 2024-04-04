import './App.css'
import { BrowserRouter, Navigate, Route, Routes , useLocation } from "react-router-dom";
import UserLogin from './pages/auth/UserLogin'
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Layout from './Layout'
import { useSelector } from "react-redux";
import Certification from "./components/Pages/PMP_Certification";
import Registration from './pages/auth/Registration'
import Reg from './pages/auth/reg'
import Error_page from './components/Pages/404_page'
import Nav from './components/Navbar/Nav';
import Nav2 from './components/Navbar/Nav2';
function App() {
  const { access_token } = useSelector(state => state.auth)
  // v
  return (
    <>
      <BrowserRouter>
      {access_token ? <Nav2 /> : <Nav />}
        <Routes>
          <Route index element={<Layout />} />
          <Route path="login" element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="reg" element={<Reg />} />
          <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="*" element={<Error_page/>} />
          <Route path="/project_management/pmp_certification" element={<Certification certificationType="pmp" />}/>
          <Route path="/project_management/ceh_certification" element={<Certification certificationType="ceh" />}/>
          <Route path="/project_management/itil_4_foundation_certification" element={<Certification certificationType="ITIL_4_Foundation_Certification" />}/>
          <Route path="/project_management/csm_certification" element={<Certification certificationType="CSM_Certification" />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
