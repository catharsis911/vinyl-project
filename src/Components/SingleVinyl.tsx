import React, { FC } from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Vinyl from '../models/Vinyl';

interface SingleVinylProps {
    vinyl: Vinyl;
}

const SingleVinyl: FC<SingleVinylProps> = ({vinyl}) => {
  return (
    <div className='vinyl'>
     <img src={'/images/${vynil.img}'} alt={vinyl.title}/>
     <h2>{vinyl.title}</h2>
     <span>{vinyl.price} $</span>
     <div className='vinyl-controls'>
      <BiEditAlt/>
      <RiDeleteBin6Line/>
     </div>
    </div>
  )
}

export default SingleVinyl