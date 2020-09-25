import { FC, useState } from "react";
import { DropdownDTO } from "../../dtos/dropdown.dto";

import './Dropdown.less'



const Dropdown: FC<{ title: string, list: DropdownDTO[], toggleItem: (id: any) => void }> = ({ title, list, toggleItem }) => {
    const [dropDownState, setDropDownState] = useState({
        listOpen: false,
        headerTitle: title,
    })
    const handleClickOutside = () => {
        setDropDownState({ ...dropDownState, listOpen: false })
    }
    const toggleList = () => {
        setDropDownState({ ...dropDownState, listOpen: !dropDownState.listOpen })
    }
    const onClickOfItem = (id) => {
        toggleItem(id);
        toggleList();
    }

    const { headerTitle, listOpen } = dropDownState;
    const selectedItem = list.find(item => item.selected)
    return (
        <div className="dd-wrapper">
            <div className="dd-header" onClick={() => toggleList()}>
                <div className="dd-header-title">{headerTitle} {selectedItem && `(${selectedItem.title})`}</div>
                {listOpen
                    ? <img src="https://img.icons8.com/metro/16/000000/chevron-up.png" />
                    : <img src="https://img.icons8.com/metro/16/000000/chevron-down.png" />
                }
            </div>
            {listOpen && <ul className="dd-list">
                {list && list.map(item => (
                    <li onClick={() => onClickOfItem(item.id)} className="dd-list-item" key={item.id}>{item.title}
                        {item.selected && <img src="https://img.icons8.com/metro/16/000000/checkmark.png" />}</li>
                ))}
            </ul>}

        </div>
    )
};

export default Dropdown;