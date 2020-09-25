import './Navbar.less';
import Dropdown from '../dropdown/Dropdown';
import { DropdownDTO } from '../../dtos/dropdown.dto';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUnits, setLanguage } from '../../store/actions/selection';

const Navbar = () => {
    const { units, language } = useSelector(state => state.selection);
    const dispatch = useDispatch();
    return <nav className='navbar'>

        <div className="navbar__container">
            <h1>Test App</h1>

            <ul className='navbar__nav'>
                <li className='navbar__nav-item'>
                    <Dropdown list={units as DropdownDTO[]} title="Unit" toggleItem={(id) => dispatch(setUnits(id))}></Dropdown>
                </li>
                <li className='navbar__nav-item'>
                    <Dropdown list={language as DropdownDTO[]} toggleItem={(id) => dispatch(setLanguage(id))} title="Language"></Dropdown>
                </li>
            </ul>
        </div>

    </nav>
}
export default Navbar;