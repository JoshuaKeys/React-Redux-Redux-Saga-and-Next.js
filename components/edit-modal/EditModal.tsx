import { FC, useState } from "react";
import './EditModal.less'
import { useSelector } from 'react-redux';
import { CityStateDTO } from "../../dtos/city-state.dto";
import { CityDTO } from "../../dtos/city.dto";

const EditModal: FC<{ editedCity: CityDTO, update: (city: CityDTO) => void, clear: () => void }> = ({ editedCity, update, clear }) => {

    const [editState, updateEditState] = useState(editedCity);

    return (
        <div className="edit-modal">
            <div className="edit-modal__backdrop"></div>
            <div className="edit-modal__content">
                <div className="edit-modal__content-container" >
                    <img className="edit-modal__close-btn" src="https://img.icons8.com/windows/32/000000/macos-close.png" onClick={clear} />
                    <h1 className="edit-modal__header">Edit City</h1>
                    <div className="edit-modal__input-container">
                        <input type="text" value={editState.name} onChange={e => updateEditState({ ...editState, name: e.target.value })} className="edit-modal__input" />
                        <button className="edit-modal__submit-btn" onClick={() => update(editState)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { EditModal }