import CityItem from "../city-item/CityItem";
import { FC } from "react";
import { CityDTO } from "../../dtos/city.dto";
import './Cities.less';
import CitiesInput from "../cities-input/CitiesInput";

const Cities: FC<{ cities: CityDTO[] }> = ({ cities }) => {
    return <div className="cities">
        <div className="cities__container">
            <h1 className="cities__header">Cities</h1>
            <CitiesInput mode="create" />
            <ul className="cities__items">
                {
                    cities.map(city => <li className="cities__item" key={city.id}><CityItem city={city} /></li>)
                }
            </ul>
        </div>

    </div>
}


export default Cities;