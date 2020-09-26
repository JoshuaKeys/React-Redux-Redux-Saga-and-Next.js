import { CityDTO } from "./city.dto";
import { EditModalDTO } from "./edit-modal.dto";

export interface CityStateDTO {
    cities: CityDTO[],
    editModal: EditModalDTO
}