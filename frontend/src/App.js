import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import {AuthProvider} from './contexts/AuthContext'
import VideoMeetComponent from './pages/videoMeet';
import History from './pages/History';
import HomeComponent from './pages/Home';



function App() {
  return (
    <>
     <Router>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/:url' element={<VideoMeetComponent/>}/>
       
        
       
      
      </Routes>
      </AuthProvider>
     </Router>
    </>
  );
}

export default App;
