// Packages
import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './Components/Layout/Layout';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App;
