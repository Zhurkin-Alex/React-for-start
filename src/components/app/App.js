import '../../style/app/App.css';
import Card from '../card/Card';
import Outh from '../outh/Outh';
import {useState} from 'react';

function App() {
  const [outh, setOuth] = useState(false)
  return (
    <div className="App">
      {outh? <Card/>: <Outh outh={setOuth}/>}
    </div>
  );
}

export default App;
