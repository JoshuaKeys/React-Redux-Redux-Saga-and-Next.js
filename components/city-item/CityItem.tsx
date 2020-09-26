import { FC } from "react";
import { CityDTO } from "../../dtos/city.dto";
import city from "../../pages/api/city";
import './CityItem.less'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link'
import { deleteCityRquest, initEdit } from "../../store/actions/cities";
import { useDispatch } from 'react-redux'

library.add(faTrash, faPen);

const CityItem: FC<{ city: CityDTO }> = ({ city }) => {
    const dispatch = useDispatch();
    return (

        <div className="city-item">
            <div className="city-item__main"><Link as={`/overview/${city.name}`} href="/overview/[searchItem]">{city.name}</Link></div>
            <div className="city-item__controls">
                <div className="city-item__edit" onClick={() => dispatch(initEdit(city))}><img src="https://img.icons8.com/windows/16/000000/edit.png" /></div>
                <div className="city-item__delete" onClick={() => dispatch(deleteCityRquest(city))}>
                    <img src="https://img.icons8.com/ios/16/000000/delete-trash.png" />
                </div>
            </div>

        </div>
    )
}
export default CityItem;