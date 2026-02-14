import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import SkillCheck from './pages/SkillCheck';
import LessonContent from './pages/LessonContent';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import HomePage from './pages/Home';
import Courses from './pages/Courses';
import Profile from './pages/Profile'; // Import the new Profile page

// 1. Layout Component with Navbar
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet /> 
      </main>
    </>
  );
};

// 2. Animated Wrapper for smooth page entries
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// 3. Routes Component to handle location-based transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* --- Landing Page (No Navbar) --- */}
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><HomePage /></PageWrapper>} />
        
        {/* --- Public Auth Routes --- */}
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />

        {/* --- Protected App Routes (With Navbar) --- */}
        <Route element={<AppLayout />}>
          
          {/* New Profile Route */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <PageWrapper><Profile /></PageWrapper>
              </ProtectedRoute>
            }
          />

          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <PageWrapper><Courses /></PageWrapper>
              </ProtectedRoute>
            }
          />

          <Route
            path="/skill-check"
            element={
              <ProtectedRoute>
                <PageWrapper><SkillCheck /></PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/lesson/:id"
            element={
              <ProtectedRoute>
                <PageWrapper><LessonContent /></PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/:id"
            element={
              <ProtectedRoute>
                <PageWrapper><Practice /></PageWrapper>
              </ProtectedRoute>
            }
          />
          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <PageWrapper><Progress /></PageWrapper>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;