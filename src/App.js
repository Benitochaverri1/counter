import './App.css';
import Greeting from './component/greeting'
import Logo from './component/logo';
import Counter from './component/counter';
function App() {
   const Username = 'Benito';
  return (
  <div>
   < Greeting name={Username}/> 
   <Logo/>
   <Counter/>
  </div>
  );
}

export default App;
