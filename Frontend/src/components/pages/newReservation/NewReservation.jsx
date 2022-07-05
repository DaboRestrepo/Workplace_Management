import axios from 'axios';

const baseURL = 'http://localhost:8000/api/desktop/';

export const availableStations = async (object) => {
  return await axios.get(baseURL, object)
}

export const createBooking = async (object) => {
  return await axios.post(baseURL, object)
}

export const submit = async (
  e,
  newReservation,
  stationSelected,
  setShowErrorMsg,
  setFinalShowPickTime,
  navigate
) => {
  e.preventDefault();
  const today = Date.now();
  const dateSelected = new Date(newReservation.startDate).getTime();
  if (dateSelected < today) {
    setShowErrorMsg('it is not possible to make the reservation, invalid date');
    setFinalShowPickTime(false);
    return;
  }
  const reservation = {
    stationName: stationSelected.name,
    ...newReservation,
    username: axios.get('http://127.0.0.1:8000/api/user/')
  };
  try {
    await createBooking(reservation);
    navigate('/myreservations', { state: { message: 'Reserve created successfully!' } });
  } catch (err) {
    console.log(err);
    setShowErrorMsg('Some error occurred when making the reservation');
  }
};

export const startTime = (
  e,
  setNewReservation,
  newReservation,
  setFinalShowPickTime,
  setStationSelected,
  setShowErrorMsg
) => {
  const startDate = new Date(e.target.value);
  setShowErrorMsg(false);
  setStationSelected(false);
  setNewReservation({ ...newReservation, [e.target.name]: startDate });
  startDate !== null ? setFinalShowPickTime(true) : setFinalShowPickTime(false);
};

export const finalTime = (newReservation, e, setNewReservation) => {
  const initialDate = new Date(newReservation.startDate);
  const finalDate = new Date(
    `${initialDate.getFullYear()}/${initialDate.getMonth() + 1}/${initialDate.getDate()} ${e.target.value}`
  );
  setNewReservation({ ...newReservation, [e.target.name]: finalDate });
};

export const verifyAvailable = async (e, newReservation, setStationsAvailable, setShowPickStationAvailable) => {
  e.preventDefault();
  const initialDate = new Date(newReservation.startDate);
  const endDate = new Date(newReservation.finalDate);
  const stations = await availableStations({
    startDate: initialDate,
    finalDate: endDate,
  });
  setStationsAvailable(stations.data);
  setShowPickStationAvailable(true);
};

export const handlePickSelected = (event, station, setStationSelected, setShowPickStationAvailable) => {
  event.preventDefault();
  setStationSelected(station);
  setShowPickStationAvailable(false);
};

export const ShowDateReservation = ({ reservation }) => {
  const initialDate = new Date(reservation.startDate).toLocaleDateString();
  const startHour = new Date(reservation.startDate).getHours().toString().padStart(2, '0');
  const startMinutes = new Date(reservation.startDate).getMinutes().toString().padStart(2, '0');

  const endHours = new Date(reservation.finalDate).getHours().toString().padStart(2, '0');
  const endMinutes = new Date(reservation.finalDate).getMinutes().toString().padStart(2, '0');

  return `${initialDate} from ${startHour}:${startMinutes} to ${endHours}:${endMinutes}`;
};
