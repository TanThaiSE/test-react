import React from 'react'
import b1 from '../img/b1.jpg'
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import b4 from '../img/b4.jpg'
import b5 from '../img/b5.jpg'
import b6 from '../img/b6.jpg'
import b7 from '../img/b7.jpg'
import OnePicture from './OnePicture'
const ListPicture = () => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'auto auto auto'}}>
        <OnePicture img={b1}/>
        <OnePicture img={b2}/>
        <OnePicture img={b3}/>
        <OnePicture img={b4}/>
        <OnePicture img={b5}/>
        <OnePicture img={b6}/>
        <OnePicture img={b7}/>
    </div>
  )
}

export default ListPicture