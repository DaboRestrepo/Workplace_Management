import { ListGroup, Card } from "react-bootstrap";
import React, { useState } from "react";
import axios from 'axios';

import styles from "../../../css/my-reservation.module.css";
import ModalCustom from "../../../services/ModalCustom";
import { FormButton } from "../../../services/Buttons";


const baseURL = `http://localhost:8000/api/reservation/${localStorage.getItem('user_id')}`

console.log(baseURL)


export const getStation = async (name) => {
  return await axios.get(baseURL).then((response) => {
    console.log(response)
  })
}

export const deleteBooking = async (id) => {
  return await axios.delete(baseURL)
}

export const MyReservationList = ({ bookings }) => {
  const [showList, setShowList] = useState(true);
  const [stationSelected, setStationSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  const date = new Date(bookings.startDate).toLocaleDateString();
  const hour = new Date(bookings.startDate)
    .getHours()
    .toString()
    .padStart(2, "0");
  const minutes = new Date(bookings.startDate)
    .getMinutes()
    .toString()
    .padStart(2, "0");

  const hourFinal = new Date(bookings.finalDate)
    .getHours()
    .toString()
    .padStart(2, "0");
  const minutesFinal = new Date(bookings.finalDate)
    .getMinutes()
    .toString()
    .padStart(2, "0");

  const handleClick = async (e, stationName) => {
    e.preventDefault();
    try {
      const station = await getStation(stationName);
      setStationSelected(station.data[0]);
      setShowList(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmClick = async bookings => {
    try {
      await deleteBooking(bookings._id);
      console.log("reserva deletado com sucesso");
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
    setShowModal(false);
  };

  return (
    <>
      {showList ? (
        <ListGroup className={styles.area_booking}>
          <ListGroup.Item>
            <span>
              <strong>{bookings.stationName}: </strong>
              {date} from {hour}:{minutes} to {hourFinal}:{minutesFinal}
            </span>
            <FormButton text="delete" handleClick={() => setShowModal(true)} />
            <FormButton text="see desktop" handleClick={e => handleClick(e, bookings.stationName)} />
          </ListGroup.Item>
        </ListGroup>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={stationSelected.image} />
          <Card.Body>
            <Card.Title>{stationSelected.name}</Card.Title>
            <div className={styles.button}>
              <FormButton text="fechar" handleClick={() => setShowList(true)} />
            </div>
          </Card.Body>
        </Card>
      )}
      <ModalCustom
        showModal={showModal}
        setShowModal={setShowModal}
        title="Are you sure you want to delete the reservation?"
        handleConfirmClick={() => handleConfirmClick(bookings)}
      />
    </>
  );
};
