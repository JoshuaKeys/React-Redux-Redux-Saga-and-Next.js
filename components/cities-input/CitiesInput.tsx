import { FC, useRef } from "react";
import { useDispatch } from 'react-redux';
import './CitiesInput.less'
import { addCityRequest } from "../../store/actions/cities";


const CitiesInput: FC<{ mode: 'edit' | 'create' }> = ({ mode }) => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    return (
        <div className="cities-input">
            <div className="cities-input__container">
                <input className="cities-input__field" ref={inputRef} type="text" />
                <button onClick={() => dispatch(addCityRequest(inputRef.current.value))} className="cities-input__btn">Add</button>
            </div>

        </div>
    )
    // const display = mode === 'edit' ? 
}

export default CitiesInput;