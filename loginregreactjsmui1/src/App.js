import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useCourselistQuery,
  useCertificatelistQuery
} from "./services/userAuthApi";
import Layout from "./Layout";
import Nav2 from "./components/Navbar/Nav2";
import UserLogin from "./pages/auth/UserLogin";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Registration from "./pages/auth/Registration";
import Error_page from "./components/Pages/404_page";
import User_profile from "./pages/User_profile/User_profile";
import Account_setting from "./pages/User_profile/Account_setting";
import Enterprise from "./components/Pages/Enterprise";
import Training from "./components/Pages/training";
import CourseContent from "./components/Pages/Course";
import Checkout from "./components/Pages/Checkout";
import Live_classes from "./components/Pages/Live_classes";
import Course_details from "./components/Pages/Course_details";
import Certification from "./components/Pages/PMP_Certification";
import Schedules from "./components/Pages/Schedules_live_online";
import Test from "./test";
import Testdisplay from "./Testdisplay";
import Testcsl from './components/Pages/test_certificate'

function App() {
  const { access_token } = useSelector((state) => state.auth);
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
        <Route index element={<Layout />} />
        <Route path="login" element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
        <Route path="registration" element={<Registration />} />
        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
        <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/dashboard/profile" element={access_token ? <User_profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard/account_setting" element={access_token ? <Account_setting /> : <Navigate to="/login" />} />
        <Route path="/dashboard/checkout" element={access_token ? <Checkout /> : <Navigate to="/login" />} />
        <Route path="*" element={<Error_page />} />

        <Route path="business" element={<Enterprise Type="enterprise" />} />
        <Route path="service" element={<Enterprise Type="service" />} />
        <Route path="mentor/mentorship-program" element={<Enterprise Type="mentorship_program" />} />
        <Route path="training-calendar" element={<Training />} />

        {courseData &&
          courseData.map((course, index) => (
            <Route key={index} path={course.link} element={<CourseContent title={course.title} />} />
          ))}

        <Route path="create/live-online" element={access_token ? <Live_classes /> : <Navigate to="/login" />} />
        <Route path="live-online-schedules" element={access_token ? <Schedules /> : <Navigate to="/login" />} />
        <Route path="add-course" element={access_token ? <Course_details /> : <Navigate to="/login" />} />

        {certificateData &&
          certificateData.map((cert, index) => (
            <Route key={index} path={cert.link} element={<Testcsl certificationType={cert.certificate_title} />} />
          ))}
          
        <Route path="/test" element={<Test />} />
        <Route path="/testdisplay" element={<Testdisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
