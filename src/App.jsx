import { useState } from 'react';
import {IoCopyOutline} from 'react-icons/io5';
import './style/app.css';



function App() {
  
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');


  async function clipboardCopy() {

    let text = 
    `border-Top-Left-Radius: ${value1 ? value1 : 0};
    border-Top-Right-Radius: ${value2 ? value2 : 0};
    border-Bottom-Left-Radius: ${value3 ? value3 : 0};
    border-Bottom-Right-Radius: ${value4 ? value4 : 0};`

    await navigator.clipboard.writeText(text);
  }

  
  return (
    <div className="App">
      <div className="pannel">

        <div class="mb-3">
          <label htmlFor="value1" class="form-label">Top Left</label>
            <input type="tel" 
                maxlength = "8"
                onChange={e => setValue1(e.target.value)} 
                value={value1}
                class="form-control form-control-lg"
                id="value1"
            />
          </div>
        
        <div class="mb-3">
          <label htmlFor="value2" class="form-label">Top Right</label>
          <input type="tel" 
              maxlength = "8"
              onChange={e => setValue2(e.target.value)} 
              value={value2}
              class="form-control form-control-lg"
              id="value2"
          />
        </div>
        
        <div class="mb-3">
          <label htmlFor="value3" class="form-label">Bottom Left</label>
          <input type="tel" 
              maxlength = "8"
              onChange={e => setValue3(e.target.value)} 
              value={value3}
              class="form-control form-control-lg"
              id="value3"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="value4" class="form-label">Bottom Right</label>
          <input type="tel" 
              maxlength = "8" 
              onChange={e => setValue4(e.target.value)} 
              value={value4}
              class="form-control form-control-lg"
              id="value4"
          />
        </div>
      </div>

    <div>
      <div id="shape" style={{
          borderTopLeftRadius: Number(value1) + 'em', 
          borderTopRightRadius: Number(value2) + 'em',
          borderBottomLeftRadius: Number(value3) + 'em',
          borderBottomRightRadius: Number(value4) + 'em',
          borderTop: 4 + 'em',
        }}
        
        >

        </div>

        <div className="clipboard">
          <div>
            <p>
              borderTopLeftRadius: {value1 ? value1 : 0}
            </p>
            <p>
              borderTopRightRadius: {value2 ? value2 : 0}
            </p>
            <p>
              borderBottomLeftRadius: {value3 ? value3 : 0}
            </p>
            <p>
              borderBottomRightRadius: {value4 ? value4 : 0} 
            </p>
          </div>

          <button onClick={clipboardCopy}><IoCopyOutline size={30}></IoCopyOutline></button>
        </div>

    </div>
    </div>
  );
}

export default App;