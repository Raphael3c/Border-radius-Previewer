import { useState } from 'react';
import {IoCopyOutline} from 'react-icons/io5';
import './style/app.css';



function App() {
  
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  function teste(){
    const css = window.getComputedStyle(document.getElementById('shape'), "")
    console.log(css.borderTopLeftRadius);
    console.log(css.borderTopRightRadius);
    console.log(css.borderBottomLeftRadius);
    console.log(css.borderBottomRightRadius);
  }


  return (
    <div className="App">

      <div className="pannel">
        <input type="text" onChange={e => setValue1(e.target.value)} value={value1}/>
        <input type="text" onChange={e => setValue2(e.target.value)} value={value2}/>
        <input type="text" onChange={e => setValue3(e.target.value)} value={value3}/>
        <input type="text" onChange={e => setValue4(e.target.value)} value={value4}/>
      </div>

    <div>
      <div id="shape" style={{
          borderTopLeftRadius: value1 + 'em', 
          borderTopRightRadius: value2 + 'em',
          borderBottomLeftRadius: value3 + 'em',
          borderBottomRightRadius: value4 + 'em',
        }}
        
        >
        </div>

        <div className="clipboard">
          <p>
            borderTopLeftRadius: {value1};
            <br/>
            borderTopRightRadius: {value2};
            <br/>
            borderBottomLeftRadius: {value3};
            <br/>
            borderBottomRightRadius: {value4}; 
          </p>

          <button onClick={teste}><IoCopyOutline size={30}></IoCopyOutline></button>
        </div>

    </div>

    </div>
  );
}

export default App;