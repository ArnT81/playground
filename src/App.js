import React, { useState } from 'react'
//  COMPONENTS
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Input from './components/Input';
//  IMAGES & ICONS 
import bil from './bil.svg'

function App() {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState();


  //  for button
  function submit() {
    console.log('happens');
  }

  //  for checkbox
  function handleChange() {
    setChecked(!checked)
  }

  // for input
  function handleInput(e) {
    setInputValue([...e.target.value])
  }


  return (
    <>

      {/* <Checkbox
        handleChange={handleChange}
        checked={checked}
        margin='20px'
      /> */}


      <Input
        inputValue={inputValue}
        handleInput={handleInput}
        placeholder='temp'
      // background='gray'
      // color='red'
      >
        <Button
          type="text"
          type="outlined"
          type="filled"
          reverse
          iconSize='60px'
          icon={bil}
          title='from props'
          functionality={submit}
          // ripple
        wave
        // shadow
        />
      </Input>



      {/* <Button
        type="text"
        type="outlined"
        type="filled"
        reverse
        iconSize='60px'
        // icon={bil}
        // title='from props'
        functionality={submit}
        // ripple
        // wave
        shadow
      >
        <img src={bil} style={{ width: 30 }} />
        <>from children</>
      </Button> */}

    </>
  )
}

export default App;
