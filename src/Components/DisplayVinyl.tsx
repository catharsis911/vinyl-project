import React, { FC } from 'react'
import Vinyl from '../models/Vinyl'
import SingleVinyl from './SingleVinyl';

interface DisplayVinylProps {
    vinylList: Vinyl[];
}

const DisplayVinyl: FC<DisplayVinylProps> = ({vinylList}) => {
  return (
    <div className='container'>
     {vinylList.map((vinyl) => {
        return <SingleVinyl vinyl={vinyl} key={vinyl.id}/>;
     })}
    </div>
  )
}

export default DisplayVinyl