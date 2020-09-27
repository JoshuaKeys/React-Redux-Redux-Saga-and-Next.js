import { FC, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import './CitiesInput.less'
import { addCityRequest } from "../../store/actions/cities";


const CitiesInput: FC = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    let [inputVal, setInputVal] = useState("")
    const addCity = () => {
        dispatch(addCityRequest(inputVal));
        setInputVal('');
    }
    const onChange = (value: string) => {
        setInputVal(value);
    }
    return (
        <div className="cities-input">
            <div className="cities-input__container">
                <input className="cities-input__field" value={inputVal} onChange={(e) => onChange(e.target.value)} ref={inputRef} type="text" />
                <button onClick={() => addCity()} className="cities-input__btn">Add</button>
            </div>

        </div>
    )
}

export default CitiesInput;