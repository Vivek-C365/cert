import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import UserLogin from "./pages/auth/UserLogin";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import Certification from "./components/Pages/PMP_Certification";
import Registration from "./pages/auth/Registration";
import Error_page from "./components/Pages/404_page";
import Nav from "./components/Navbar/Nav";
import Nav2 from "./components/Navbar/Nav2";
import User_profile from "./pages/User_profile/User_profile";
import Account_setting from "./pages/User_profile/Account_setting";
import Enterprise from "./components/Pages/Enterprise";
import Training from "./components/Pages/training";
import CourseContent from "./components/Pages/Course";
import Checkout from "./components/Pages/Checkout";
import course from "./course.json";
import Live_classes from "./components/Pages/Live_classes";
import Course_details from "./components/Pages/Course_details";
import Schedules from "./components/Pages/Schedules_live_online"
import Test from "./test";
import Testdisplay from "./Testdisplay";
function App() {
  const { access_token } = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <Nav2 />
        <Routes>
          <Route index element={<Layout />} />
          <Route path="login" element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/dashboard/profile" element={access_token ? <User_profile /> : <UserLogin />} />
          <Route path="/dashboard/Account_setting" element={access_token ? <Account_setting /> : <UserLogin />} />
          <Route path="/dashboard/Checkout" element={access_token ? <Checkout /> : <UserLogin />} />
          <Route path="*" element={<Error_page />} />

          <Route path="business" element={<Enterprise Type="enterprise" />} />
          <Route path="service" element={<Enterprise Type="service" />} />
          <Route path="mentor/mentorship-program" element={<Enterprise Type="mentorship_program" />} />
          <Route path="training-calendar" element={<Training />} />

          {course.pathway.map((link, index) => (
            <Route key={index} path={link.link} element={<CourseContent title={link.title} />} />
          ))}

          <Route path="create/live-online" element={access_token ? <Live_classes /> : <UserLogin />} />
          <Route path="Live-Online-schedules" element={access_token ? <Schedules /> : <UserLogin />} />
          <Route path="ADD-Course" element={access_token ? <Course_details /> : <UserLogin />} />

          <Route path="/agile-and-scrum/csm_certification" element={<Certification certificationType="CSM_Certification" />} />
          <Route path="/agile-and-scrum/cspo_certification" element={<Certification certificationType="CSPO_Certification" />} />
          <Route path="/agile-and-scrum/PMI_ACP_Certification" element={<Certification certificationType="PMI_ACP_Certification" />} />
          <Route path="big-data/big-data-administrator-certification" element={<Certification certificationType="Big_Data_Administrator_Certification" />} />
          <Route path="cloud-computing/aws-solution-architect-certification" element={<Certification certificationType="AWS_Solution_Architect_Certification" />} />
          <Route path="cloud-computing/aws-developer-associate-certification" element={<Certification certificationType="AWS_Developer_Associate_Certification" />} />
          <Route path="cyber-security/ceh-certification" element={<Certification certificationType="CEH_Certification" />} />
          <Route path="cyber-security/cissp-certification" element={<Certification certificationType="CISSP_Certification" />} />
          <Route path="data-science/data-science-python-certification" element={<Certification certificationType="Data_Science_with_Python_Certification" />} />
          <Route path="devops/devops-certification" element={<Certification certificationType="DevOps_Certification" />} />
          <Route path="digital-marketing/digital-marketing-expert-certification" element={<Certification certificationType="Digital_Marketing_Expert_Certification" />} />
          <Route path="iso-certifications/iso-27001-lead-auditor-certification" element={<Certification certificationType="ISO_27001_Lead_Auditor_Certification" />} />
          <Route path="it-service-management/itil-4-foundation-certification" element={<Certification certificationType="ITIL_4_Foundation_Certification" />} />
          <Route path="/project_management/pmp_certification" element={<Certification certificationType="pmp" />} />
          <Route path="project-management/pfmp-certification" element={<Certification certificationType="PfMP_Certification" />} />
          <Route path="project-management/pgmp-certification" element={<Certification certificationType="PgMP_Certification" />} />
          <Route path="quality-management/lean-six-sigma-yellow-belt-certification" element={<Certification certificationType="Lean_Six_Sigma_Yellow_Belt_Certification" />} />
          <Route path="quality-management/lean-six-sigma-black-belt-certification" element={<Certification certificationType="Lean_Six_Sigma_Black_Belt_certification" />} />
          <Route path="quality-management/lean-six-sigma-green-belt-certification" element={<Certification certificationType="Lean_Six_Sigma_Green_Belt_certification" />} />
          <Route path="ux-and-design-thinking/design-thinking-certification" element={<Certification certificationType="Design_Thinking_Certification" />} />


          
          <Route path="/test" element={<Test />} />
          <Route path="/testdisplay" element={<Testdisplay />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
