import SignIn from "./Pages/SignIn";
import React, { useState } from "react";
import AppContext from "./Context/AppContext";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Loading from "./Components/Modals/Loading";
import Success from "./Components/Modals/Success";
import RequestModal from "./Components/Modals/RequestModal";
import Error from "./Components/Modals/Error";
import Dashboard from "./Pages/Dashboard";
import Summary from "./Pages/Dashboard/Features/Summary";
import NotFound from "./Pages/404";
import Students from "./Pages/Dashboard/Features/Students";
import AllStudents from "./Pages/Dashboard/Features/Students/All";
import AddStudents from "./Pages/Dashboard/Features/Students/Add";
import EditStudent from "./Pages/Dashboard/Features/Students/Edit";
import ViewStudent from "./Pages/Dashboard/Features/Students/View";
import Staff from "./Pages/Dashboard/Features/Staff";
import AllStaff from "./Pages/Dashboard/Features/Staff/All";
import AddStaff from "./Pages/Dashboard/Features/Staff/Add";
import EditStaff from "./Pages/Dashboard/Features/Staff/Edit";
import ViewStaff from "./Pages/Dashboard/Features/Staff/View";
import BOM from "./Pages/Dashboard/Features/BOM&PTA";
import AllBOM from "./Pages/Dashboard/Features/BOM&PTA/All";
import AddBOM from "./Pages/Dashboard/Features/BOM&PTA/Add";
import EditBOM from "./Pages/Dashboard/Features/BOM&PTA/Edit";
import ViewBOM from "./Pages/Dashboard/Features/BOM&PTA/View";
import Classes from "./Pages/Dashboard/Features/Classes";
import AllClasses from "./Pages/Dashboard/Features/Classes/All";
import AddClass from "./Pages/Dashboard/Features/Classes/Add";
import EditClass from "./Pages/Dashboard/Features/Classes/Edit";
import ViewClass from "./Pages/Dashboard/Features/Classes/View";
import Finance from "./Pages/Dashboard/Features/Finance";
import AllFinance from "./Pages/Dashboard/Features/Finance/All";
import ViewStudentFinance from "./Pages/Dashboard/Features/Finance/All/components/Students/View";
import AddTerm from "./Pages/Dashboard/Features/Finance/All/components/Terms/Add";
import EditTerm from "./Pages/Dashboard/Features/Finance/All/components/Terms/Edit";
import AddProgram from "./Pages/Dashboard/Features/Finance/All/components/Programmes/Add";
import EditProgram from "./Pages/Dashboard/Features/Finance/All/components/Programmes/Edit";
import SchoolDetails from "./Pages/Dashboard/Features/SchoolDetails";
import Disciplinary from "./Pages/Dashboard/Features/Disciplinary";
import AllDisciplinary from "./Pages/Dashboard/Features/Disciplinary/All";
import Subjects from "./Pages/Dashboard/Features/Subjects";
import AllSubjects from "./Pages/Dashboard/Features/Subjects/All";
import EditSubjects from "./Pages/Dashboard/Features/Academics/All/components/Subjects/Edit";
import AddSubjects from "./Pages/Dashboard/Features/Academics/All/components/Subjects/Add";
import ViewSubjects from "./Pages/Dashboard/Features/Academics/All/components/Subjects/View";
import Streams from "./Pages/Dashboard/Features/Streams";
import AllStreams from "./Pages/Dashboard/Features/Streams/All";
import EditStream from "./Pages/Dashboard/Features/Streams/Edit";
import ViewStream from "./Pages/Dashboard/Features/Streams/View";
import AddStream from "./Pages/Dashboard/Features/Streams/Add";
import SchoolForm from "./Pages/Dashboard/Features/SchoolDetails/components/index";
import Profile from "./Pages/Dashboard/Features/Profile";
import ViewProfile from "./Pages/Dashboard/Features/Profile/components/Profile";
import Academics from "./Pages/Dashboard/Features/Academics";
import AllAcademics from "./Pages/Dashboard/Features/Academics/All";
import ViewAssessment from "./Pages/Dashboard/Features/Academics/All/components/Assessments/View";
import AddMathsAssessment from "./Pages/Dashboard/Features/Academics/All/components/Assessments/View/components/AssessmentHistory/Mathematics/Add";

const APP = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { label: "Home", to: "/dashboard" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal_message, setModalMessage] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [modal_type, setModalType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState();
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        isOnline,
        setIsOnline,
        isLoading,
        modal_message,
        showErrorModal,
        showSuccessModal,
        showRequestModal,
        setShowRequestModal,
        modal_type,
        setModalType,
        setIsLoading,
        setModalMessage,
        setShowErrorModal,
        setShowSuccessModal,
        breadcrumbItems,
        setBreadcrumbItems,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SignIn />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<Summary />} />
            <Route path="students" element={<Students />}>
              <Route path="" element={<AllStudents />} />
              <Route path="add" element={<AddStudents />} />
              <Route path="edit/:id" element={<EditStudent />} />
              <Route path="view/:id" element={<ViewStudent />} />
            </Route>

            <Route path="finance" element={<Finance />}>
              <Route path="" element={<AllFinance />} />
              <Route path="student/view/:id" element={<ViewStudentFinance />} />
              <Route path="terms/add" element={<AddTerm />} />
              <Route path="terms/edit/:id" element={<EditTerm />} />
              <Route path="programs/add" element={<AddProgram />} />
              <Route path="programs/edit/:id" element={<EditProgram />} />
            </Route>
            <Route path="grades" element={<Classes />}>
              <Route path="" element={<AllClasses />} />
              <Route path="add" element={<AddClass />} />
              <Route path="edit/:id" element={<EditClass />} />
              <Route path="view/:id" element={<ViewClass />} />
            </Route>
            <Route path="streams" element={<Streams />}>
              <Route path="" element={<AllStreams />} />
              <Route path="add" element={<AddStream />} />
              <Route path="edit/:id" element={<EditStream />} />
              <Route path="view/:id" element={<ViewStream />} />
            </Route>
            <Route path="staff" element={<Staff />}>
              <Route path="" element={<AllStaff />} />
              <Route path="add" element={<AddStaff />} />
              <Route path="edit/:id" element={<EditStaff />} />
              <Route path="view/:id" element={<ViewStaff />} />
            </Route>

            <Route path="academics" element={<Academics />}>
              <Route path="" element={<AllAcademics />} />
              <Route path="subjects/add" element={<AddSubjects />} />
              <Route path="subjects/edit/:id" element={<EditSubjects />} />
              <Route path="subjects/view/:id" element={<ViewSubjects />} />
              <Route path="assessments/view/:id" element={<ViewAssessment />} />
              <Route
                path="assessments/view/:id/add"
                element={<AddMathsAssessment />}
              />
            </Route>

            <Route path="disciplinary" element={<Disciplinary />}>
              <Route path="" element={<AllDisciplinary />} />
            </Route>

            <Route path="school-details" element={<SchoolDetails />}>
              <Route path="" element={<SchoolForm />} />
            </Route>
            <Route path="BOM" element={<BOM />}>
              <Route path="" element={<AllBOM />} />
              <Route path="add" element={<AddBOM />} />
              <Route path="edit/:id" element={<EditBOM />} />
              <Route path="view/:id" element={<ViewBOM />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route path="" element={<ViewProfile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Loading showModal={isLoading} />
      <RequestModal
        showRequestModal={showRequestModal}
        setShowRequestModal={setShowRequestModal}
        modal_type={modal_type}
        modal_message={modal_message}
      />
      <Success
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
        modal_message={modal_message}
      />
      <Error
        showErrorModal={showErrorModal}
        setShowErrorModal={setShowErrorModal}
        modal_message={modal_message}
      />
    </AppContext.Provider>
  );
};

export default APP;
