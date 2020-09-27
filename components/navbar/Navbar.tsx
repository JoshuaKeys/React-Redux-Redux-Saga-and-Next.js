import './Navbar.less';
import Dropdown from '../dropdown/Dropdown';
import { DropdownDTO } from '../../dtos/dropdown.dto';
import { useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUnits, setLanguage } from '../../store/actions/selection';

const Navbar: FC<{ showDropdown: boolean, dropDownChanged?: () => void }> = ({ showDropdown, dropDownChanged }) => {
    const { units, language } = useSelector(state => state.selection);
    const dispatch = useDispatch();
    const setNavUnits = (id) => {
        dispatch(setUnits(id));
        dropDownChanged();
    }
    const setNavLang = (id) => {

        dispatch(setLanguage(id))
        dropDownChanged();
    }
    return <nav className='navbar'>

        <div className="navbar__container">
            <h1>Test App</h1>

            {showDropdown && <ul className='navbar__nav'>
                <li className='navbar__nav-item'>
                    <Dropdown list={units as DropdownDTO[]} title="Unit" toggleItem={(id) => setNavUnits(id)}></Dropdown>
                </li>
                <li className='navbar__nav-item'>
                    <Dropdown list={language as DropdownDTO[]} toggleItem={(id) => setNavLang(id)} title="Language"></Dropdown>
                </li>
            </ul>}
        </div>

    </nav>
}
export default Navbar;