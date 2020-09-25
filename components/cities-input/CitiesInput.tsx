import { FC } from "react";
import './CitiesInput.less'

const CitiesInput: FC<{ mode: 'edit' | 'create' }> = ({ mode }) => {
    return (
        <div className="cities-input">
            <div className="cities-input__container">
                <input className="cities-input__field" type="text" />
                {mode === 'edit' ? (<button className="cities-input__btn">Edit</button>) : (<button className="cities-input__btn">Add</button>)}
            </div>

        </div>
    )
    // const display = mode === 'edit' ? 
}

export default CitiesInput;