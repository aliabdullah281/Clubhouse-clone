
import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from "./pages/Profile"

function App() {
  return (
  

    <BrowserRouter>
        <PlanLayout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/invite" element={<PhoneConfirmation />} />
            <Route path="/code_confirm" element={<CodeConfirm />} />
            <Route path="/allow_notification" element={<AllowNotification />} />
          </Routes>
       </PlanLayout>
      
      <AppLayout>
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/home" element={<Home />} /> 
       </Routes>
      </AppLayout>
      
    </BrowserRouter>
   
   
 
  

  );
}


export default App;
