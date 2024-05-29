import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  useCourselistQuery,
  useCertificatelistQuery
} from "./services/userAuthApi";
import Nav2 from "./components/Navbar/Nav2";
import UserLogin from "./pages/auth/UserLogin";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/auth/Registration";
import ErrorPage from "./components/Pages/404_page";
import UserProfile from "./pages/User_profile/User_profile";
import AccountSetting from "./pages/User_profile/Account_setting";
import Enterprise from "./components/Pages/Enterprise";
import Training from "./components/Pages/training";
import CourseContent from "./components/Pages/Course";
import Checkout from "./components/Pages/Checkout";
import LiveClasses from "./components/Pages/Live_classes";
import CourseDetails from "./components/Pages/Course_details";
import Addcertificatedetail from "./components/Pages/Add_certificate_detail";
// import Certification from "./components/Pages/PMP_Certification";
import Schedules from "./components/Pages/Schedules_live_online";
import Test from "./test";
import Testcsl from './components/Pages/test_certificate'
import { getToken } from './services/LocalStorageService';
function App() {
  const { access_token } = getToken();

  const ProtectedRoute = ({ element }) => {
    const { access_token } = getToken();
    return access_token ? element : <Navigate to="/login" />;
  };
  
  const { data: courseData, error: courseError } = useCourselistQuery();
  const { data: certificateData, error: certificateError } = useCertificatelistQuery();

  useEffect(() => {
    if (courseError) {
      console.error("Error fetching course data:", courseError);
    }
    if (certificateError) {
      console.error("Error fetching certificate data:", certificateError);
    }
  }, [courseError, certificateError]);

  return (
    <BrowserRouter>
      <Nav2 />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="login" element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
        <Route path="registration" element={<Registration />} />
        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
        <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
        <Route path="/dashboard/" element={<ProtectedRoute element={<Dashboard />} />}/>
          <Route path="add-course" element={<ProtectedRoute element={<CourseDetails />} />} />
          <Route path="/add-Certificate_detail" element={<ProtectedRoute element={<Addcertificatedetail />} />} />
          <Route path="profile" element={<ProtectedRoute element={<UserProfile />} />} />
          <Route path="account_setting" element={<ProtectedRoute element={<AccountSetting />} />} />
          <Route path="/training-calendar/checkout" element={<ProtectedRoute element={<Checkout />} />} />
          <Route path="create/live-online" element={<ProtectedRoute element={<LiveClasses />} />} />
          <Route path="live-online-schedules" element={<ProtectedRoute element={<Schedules />} />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="business" element={<Enterprise Type="enterprise" />} />
        <Route path="service" element={<Enterprise Type="service" />} />
        <Route path="mentor/mentorship-program" element={<Enterprise Type="mentorship_program" />} />
        <Route path="training-calendar" element={<Training />} />

        {courseData &&
  courseData.map((course, index) => (
    <React.Fragment key={index}>
      <Route path={`/dashboard/${course.link}`} element={<CourseContent title={course.title} />} />
      <Route path={course.link} element={<CourseContent title={course.title} />} />
    </React.Fragment>
  ))}

        

        {certificateData &&
          certificateData.map((cert, index) => (
            <Route key={index} path={cert.link} element={<Testcsl certificationType={cert.certificate_title} />} />
          ))}
          
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
