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
        reverse
      // iconSize='20px'
      title='from props'
      >
        {/* <img src={bil} style={{ width: 30 }} /> */}
        {/* <>from children</> */}

      </Button>
    </>
  )
}

export default App;
