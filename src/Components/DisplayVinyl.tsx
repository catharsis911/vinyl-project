import React, { FC } from 'react'
import Vinyl from '../models/Vinyl'

interface DisplayVinylProps {
    vinylList: Vinyl[];
}

const DisplayVinyl: FC<DisplayVinylProps> = ({vinylList}) => {
  return (
    <div className='container'>
     {vinylList.map((vinyl) => {
        return vinyl.title;
     })}
    </div>
  )
}

export default DisplayVinyl