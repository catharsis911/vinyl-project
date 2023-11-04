import React, { FC, useState } from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Vinyl from '../models/Vinyl';
import EditVinylForm from './EditVinylForm';

interface SingleVinylProps {
    vinyl: Vinyl;
}

const SingleVinyl: FC<SingleVinylProps> = ({vinyl}) => {

 const [edit, setEdit] = useState<boolean>(false)

 const handleToggleEdit = () => {
    setEdit(!edit);
 }

  return (
    <div className='vinyl'>
     <img src={'/images/${vynil.img}'} alt={vinyl.title}/>
     <h2>{vinyl.title}</h2>
     <span>{vinyl.price} $</span>
     <div className='vinyl-controls'>
      <BiEditAlt onClick={handleToggleEdit}/>
      <RiDeleteBin6Line/>
     </div>

     {edit 
      ? <EditVinylForm data={vinyl}/>
      : null}
    </div>
  )
}

export default SingleVinyl