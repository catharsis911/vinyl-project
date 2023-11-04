import React, { FC } from 'react'
import Vinyl from '../models/Vinyl'
import SingleVinyl from './SingleVinyl';

interface DisplayVinylProps {
    vinylList: Vinyl[];
    updateVinyl: (newVinyl: Vinyl) => void;
    deleteVinyl: (id: number) => void;
}

const DisplayVinyl: FC<DisplayVinylProps> = ({vinylList, updateVinyl, deleteVinyl}) => {
  return (
    <div className='container'>
     {vinylList.map((vinyl) => {
        return <SingleVinyl 
                 vinyl={vinyl} 
                 key={vinyl.id}
                 updateVinyl={updateVinyl}
                 deleteVinyl={deleteVinyl}
                 />;
     })}
    </div>
  )
}

export default DisplayVinyl