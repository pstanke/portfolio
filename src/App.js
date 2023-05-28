import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Certificate } from './components/pages/Certificate/Certificate';
import { Projects } from './components/pages/Projects/Projects';
import { Guide } from './components/pages/Guide/Guide';

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
