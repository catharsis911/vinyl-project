import React, { FC, useState } from 'react'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import Vinyl from '../models/Vinyl';
import EditVinylForm from './EditVinylForm';

interface SingleVinylProps {
    vinyl: Vinyl;
    updateVinyl: (newVinyl: Vinyl) => void;
    deleteVinyl: (id: number) => void;
}

const SingleVinyl: FC<SingleVinylProps> = ({vinyl, updateVinyl, deleteVinyl}) => {

 const [edit, setEdit] = useState<boolean>(false)

 const handleToggleEdit = () => {
    setEdit(!edit);
 }

 const handleDelete = () => {
    deleteVinyl(vinyl.id);
 }

  return (
    <div className='vinyl bg-white border-[1px] border-[#ededed] flex flex-col relative p-[12px] m-[52px] w-[350px] mx-auto items-center rounded-xl'>
     <img src={`/images/${vinyl.img}`} alt={vinyl.title} className='w-[252px] h-200px object-contain'/>
     <h2>{vinyl.title}</h2>
     <span>{vinyl.price} $</span>
     <div className='vinyl-controls'>
      <BiEditAlt onClick={handleToggleEdit}/>
      <RiDeleteBin6Line onClick= {handleDelete}/>
     </div>

     {edit 
      ? <EditVinylForm 
          data={vinyl}
          updateVinyl={updateVinyl}
          handleToggleEdit={handleToggleEdit}
        />
      : null}
    </div>
  )
}

export default SingleVinyl