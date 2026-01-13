import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import motion and AnimatePresence

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path='/about'
          element={
            <PageTransition>
              <About />
              <Footer />
            </PageTransition>
          }
        />
        <Route
          path='/projects'
          element={
            <PageTransition>
              <Projects />
              <Footer />
            </PageTransition>
          }
        />
        <Route
          path='/contact'
          element={
            <PageTransition>
              <Contact />
              <Footer />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <main className='bg-slate-900 h-full'>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </main>
  );
};

export default App;
