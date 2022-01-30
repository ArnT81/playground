import React from 'react'
import Button from './components/Button';
import Checkbox from './components/Checkbox';
//  images & icons 
import bil from './bil.svg'

function App() {


  return (

    <>
      {/* //!work in progress */}

      {/* <p>hello</p> */}




      {/* //!done */}
      {/* <Checkbox /> */}


      <Button
        type="text"
        type="outlined"
        type="filled"
        icon={bil}
      // iconSize='20px'
      // iconRight
      // title='title from props'
      >
        {/* <img src={bil} style={{width: 30, height: 30}}/> */}
        {/* Press */}

      </Button>
    </>
  )
}

export default App;
