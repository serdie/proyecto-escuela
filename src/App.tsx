import { Route, Routes } from "react-router-dom";
import AssessmentLayout from "./components/AssessmentLayout";
import PersonalInfo from "./components/PersonalInfo";
import LearningPreferences from "./components/LearningPreferences";
import EducationalBackground from "./components/EducationalBackground";
import LearningGoals from "./components/LearningGoals";
import Review from "./components/Review";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assessment" element={<AssessmentLayout />}>
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="learning-preferences" element={<LearningPreferences />} />
        <Route path="educational-background" element={<EducationalBackground />} />
        <Route path="learning-goals" element={<LearningGoals />} />
        <Route path="review" element={<Review />} />
      </Route>
    </Routes>
  );
}

export default App;
