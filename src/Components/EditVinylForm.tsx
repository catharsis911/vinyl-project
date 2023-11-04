import React, {FC, useState, ChangeEvent, FormEvent} from 'react'
import Vinyl from '../models/Vinyl';


 interface EditVinylFormProps {
  data: Vinyl;
  updateVinyl: (newVinyl: Vinyl) => void;
  handleToggleEdit: () => void;
 }


  const EditVinylForm: FC<EditVinylFormProps> = ({data, updateVinyl, handleToggleEdit}) => {

    const[editVinyl, setEditVinyl] = 
    useState<Vinyl>(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const {name, value} = e.target;
        
        setEditVinyl({
          ...editVinyl,
          [name]: value
        });

    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const {title, price, img} = editVinyl;

        if(title && price && img) {
            updateVinyl(editVinyl);
            handleToggleEdit();
        }
    }

    console.log('edit vinyl', editVinyl)

  return (
    <form className='edit-Form' 
    onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={editVinyl.title}
        />

        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={handleChange}
          value={editVinyl.price}
        />

        <input
          name="img"
          type="text"
          placeholder="Image"
          onChange={handleChange}
          value={editVinyl.img}
        />
        <button type="submit">Подтвердить</button>
    </form>
  )
}

export default EditVinylForm