// Packages
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// Components
import Layout from './Components/Layout/Layout';
import Projects from './Pages/Projects';
import About from './Pages/About';
import WorkExamples from './Pages/WorkExamples';

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <Layout>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-examples" element={<WorkExamples />} />
        </Routes>
      </Layout>
    </HelmetProvider>
  )
}

export default App;
