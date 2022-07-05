import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";


import NavBar from "../../../services/Navbar";
import { FormButton } from "../../../services/Buttons";
import styles from "../../../css/index.module.css";
import { InputEffect } from "../../../services/Inputs";
import Alert from "../../../services/Alert";

import {
  submit,
  startTime,
  finalTime,
  verifyAvailable,
  handlePickSelected,
  ShowDateReservation
} from "./NewReservation";

const Newreservation = () => {
  const [newReservation, setNewReservation] = useState({});
  const [showFinalPickTime, setFinalShowPickTime] = useState(false);
  const [showPickStationAvailable, setShowPickStationAvailable] = useState(false);
  const [stationSelected, setStationSelected] = useState();
  const [stationsAvailable, setStationsAvailable] = useState([]);
  const [showErrorMsg, setShowErrorMsg] = useState(null);

  const recoveryUser = localStorage.getItem("user");
  const user = JSON.parse(recoveryUser);
  const navigate = useNavigate();
  const handleSubmit = e => {
    submit(e, newReservation, user, stationSelected, setShowErrorMsg, setFinalShowPickTime, navigate);
  };

  return (
    <form className={styles.newReservation_area}>
      <NavBar />
      <Container>
        <Row>
          <Col sm={6}>
            <div className={styles.date_time_zone}>
              <p>Select a day and the starting time of your reservation:</p>
              <InputEffect
                textLabel="Select a day and time:"
                type="datetime-local"
                name="startDate"
                handleOnChange={e => startTime(e, setNewReservation, newReservation, setFinalShowPickTime, setStationSelected, setShowErrorMsg)}
              />
            </div>
            {showFinalPickTime ? (
              <div className={styles.date_time_zone}>
                <p>Select the final time for your reservation:</p>
                <InputEffect
                  textLabel="End time"
                  type="time"
                  name="finalDate"
                  handleOnChange={e => finalTime(newReservation, e, setNewReservation)}
                />
                <FormButton
                  text="Check Availability"
                  handleClick={e =>
                    verifyAvailable(e, newReservation, setStationsAvailable, setShowPickStationAvailable)
                  }
                />
              </div>
            ) : null}
          </Col>
          {showPickStationAvailable ? (
            <Col sm={6}>
              <h2>Available desktop</h2>
              <ListGroup>
                {stationsAvailable.map(station => {
                  return (
                    <ListGroup.Item className={styles.list_area} key={station._id}>
                      <img src={station.image} alt="Equipment" />
                      <span>{station.name}</span>
                      <FormButton
                        text="Choose"
                        handleClick={e =>
                          handlePickSelected(e, station, setStationSelected, setShowPickStationAvailable)
                        }
                      />
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
          ) : null}
          {stationSelected ? (
            <Col sm={6}>
              <Card style={{ width: "18rem" }} className={styles.card}>
                <Card.Img variant="top" src={stationSelected.image} />
                <Card.Body>
                  <Card.Title>{stationSelected.name}</Card.Title>
                  <Card.Text>
                    <strong>Reserve day: </strong>
                    <ShowDateReservation reservation={newReservation} />
                  </Card.Text>
                  <Card.Text>
                    <strong>Desk: </strong> {user.username}
                  </Card.Text>
                  <FormButton text="Confirm" handleClick={e => handleSubmit(e)} />
                  <FormButton
                    text="Cancel"
                    handleClick={e => {
                      e.preventDefault();
                      setStationSelected(false);
                      setShowErrorMsg(false)
                    }}
                  />
                  {showErrorMsg ? <Alert severity="error" msg={showErrorMsg} /> : null}
                </Card.Body>
              </Card>
            </Col>
          ) : null}
        </Row>
      </Container>
    </form>
  );
};

export default Newreservation;
