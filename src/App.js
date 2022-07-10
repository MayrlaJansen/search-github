import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BranchesResults from './pages/BranchesResults';
import Home from './pages/Home';
import RepositoriesResults from './pages/RepositoriesResults';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/repositorios/:searchValue" exact element={<RepositoriesResults />} />
          <Route path="/repositorios/:searchValue/branches/:repoName" exact element={<BranchesResults />} />
          {/* <Route path="*" exact element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
