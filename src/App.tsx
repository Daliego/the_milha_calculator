import React from 'react';
import '../src/style/App.css';
import { MilhasInputPanel } from './components/milhasInputPanel';
import { MilhasDescountPanel } from './components/milhasDecountPanel';
import { Title } from './components/title';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Title text='Calcular milhas com desconto' fontSize={20}></Title>
        <MilhasInputPanel></MilhasInputPanel>
      </header>
      <body className='App-body'>
          <MilhasDescountPanel ></MilhasDescountPanel>
        <div className='colorThing'>

        </div>
        <div className='price'>

        </div>
        <div className='textFooter'></div>

      </body>
    </div>
  );
}

export default App;
