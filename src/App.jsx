import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import LearningPaths from './pages/LearningPaths';
import Phytosphere from './pages/Phytosphere';
import SignIn from './pages/SignIn';
import TopicDetail from './pages/TopicDetail'; // Import the TopicDetail page
import Quiz from './pages/Quiz'; // Import the Quiz page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/phytosphere" element={<Phytosphere />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/topics/:topicId" element={<TopicDetail />} /> {/* Dynamic route for topic details */}
        <Route path="/quiz" element={<Quiz />} /> {/* Route for quiz page */}
      </Routes>
    </Router>
  );
}

export default App;
