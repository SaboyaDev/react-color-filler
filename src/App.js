import ColorBox from './colorBox.component';
import ColorInput from './colorInput.component';
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('')

  return (
    <div className="App">
      <div className="container">
        <ColorBox
        color={color}
      />
      <ColorInput
        color={ color }
        setColor={setColor}
      />
      </div>
    </div>
  );
}

export default App;
