import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import Cities from '../components/cities/Cities';
import { GetServerSideProps } from 'next';
import { CityDTO } from '../dtos/city.dto';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesSuccess, clearModal, editCityRequest } from '../store/actions/cities';
import { useEffect } from 'react';
import { fetchCitiesRequest } from '../store/sagas/city.saga';
import { CityStateDTO } from '../dtos/city-state.dto';
import { EditModal } from '../components/edit-modal/EditModal';
import { EditModalDTO } from '../dtos/edit-modal.dto';

export default function Home({ cities: citiesProps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    if (citiesProps.length) {
      dispatch(fetchCitiesSuccess(citiesProps));
    } else {
      dispatch(fetchCitiesRequest());
    }
  }, [])
  const closeEditModal = () => {
    dispatch(clearModal())
  }
  const updateCity = (city: CityDTO) => {
    console.log(city);
    dispatch(editCityRequest(city));
    closeEditModal()
  }
  const cities: { cities: CityDTO[] } = useSelector((state: CityStateDTO) => state);
  const edit: EditModalDTO = useSelector(((state: CityStateDTO) => state.editModal))
  return (
    <div>
      <Head>
        <title>Test App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Navbar />
        <Cities cities={cities.cities} />
      </div>
      {edit.city && <EditModal update={updateCity} editedCity={edit.city} clear={closeEditModal} />}
    </div>

  );
}

export const getServerSideProps: GetServerSideProps<{ cities: CityDTO[] }> = async (context) => {

  if (!context.req) {
    return {
      props: { cities: [] }
    }
  }
  const cities = await fetch('http://localhost:3000/api/city');
  const citiesData = await cities.json() as CityDTO[];

  return {
    props: {
      cities: citiesData
    }
  }
}