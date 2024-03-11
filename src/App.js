
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './component/signIn/SignIn';
import SignUp from './component/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<SignIn/>}/>
          <Route path='/signUp' element=<SignUp/>/>
        </Routes>
      </BrowserRouter>
        {/* <SignIn/>
        <SignUp/> */}
        
       </header>
    </div>
  );
}

export default App;
