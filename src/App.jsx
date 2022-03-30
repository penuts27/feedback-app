import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import FeedbackContext from './contexts/feedbackContext'
import { useContext }from 'react'
import Header from './components/Header'
import './App.css';
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './contexts/feedbackContext'

function App() {
  return (
    <FeedbackProvider>
    <Router>
          <Header/>
            <div className="container">
              <Routes>
                <Route path="/" element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }/>
                <Route path='/about' element={<AboutPage/>}/>
              </Routes>
              <AboutIconLink/>
            </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
