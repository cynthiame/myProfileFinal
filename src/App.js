import { ReactDOM } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import HomePages from './components/HomePages';
import HomeTest from './components/Home';
import Footer from './components/footer';
import Pages from './components/pages';
import skills from './components/skills';
import Work from './components/work';
import education from './components/education';
import contact from './components/contact';


function App() {
    return (
      <Router>
        <Header />
          <Routes>
            <Route path='/' exact Component={HomeTest} />
            <Route path='/home' exact Component={HomeTest} />
            <Route path='/skills' exact Component={skills} />
            <Route path='/interests' exact Component={Pages} />
            <Route path='/projects' exact Component={Work} />
            <Route path='/education' exact Component={education} />
            <Route path='/contact' exact Component={contact} />
          </Routes>
          <Footer />
      </Router>
    );
  }

export default App;
