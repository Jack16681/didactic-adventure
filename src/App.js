import './App.css';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform';

function App() {
  return (
   <>
    <Navbar title="Jack" />
    <div className='container my-3'>
      <Textform heading="It's Jack's box"/>
    </div>
   </>
  );
}

export default App;
