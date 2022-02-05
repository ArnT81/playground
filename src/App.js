import React from 'react'
//  COMPONENTS
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Input from './components/Input';
//  IMAGES & ICONS 
import bil from './bil.svg'

function App() {

  function submit() {
    console.log('happens');
  }

  return (
    <>

      {/* <Input
        // placeholder='temp'
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
        />
      </Input> */}


      

      {/* <Checkbox /> */}

      <Button
        type="text"
        type="outlined"
        type="filled"
        reverse
        iconSize='60px'
        // icon={bil}
        // title='from props'
        functionality={submit}
        // ripple
        wave
      >
        <img src={bil} style={{ width: 30 }} />
        <>from children</>
      </Button>

    </>
  )
}

export default App;
