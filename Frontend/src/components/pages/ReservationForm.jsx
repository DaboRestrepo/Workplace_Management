import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import '../../css/ReservationForm.css';
import 'react-datepicker/dist/react-datepicker.css';
import encorapurple from '../../assets/imgs/encorapurple.PNG';
import OffcanvasHeader from 'react-bootstrap/esm/OffcanvasHeader';

const baseUrl = 'http://127.0.0.1:8000/api/reservation';

function ReservationForm () {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [isLoading, setIsloading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = async () => {
    setIsloading(true);
    try {
      await axios.post(
        baseUrl,
        { startDate: startDate, finishDate: finishDate })
        .then(response => {
          return response.data;
        });
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className='reservation-block'>
      <div className='container'>
        <div className='row'>
          <div className='card w-50'>
            <img src={encorapurple} alt='encora' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title w-100'>Select date and time</h5>
              <div className='row'>
                <div className='col'>
                  <label className='text-label'>Staring time</label>
                  <DatePicker
                    name='startTime'
                    className='datepicker1'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={60}
                    timeCaption='time'
                    dateFormat='yyyy-MM-dd HH:mm:ss'
                    withPortal
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <br />
                  <label className='text-label'>Finishing time</label>
                  <DatePicker
                    name='finishTime'
                    className='datepicker2'
                    selected={finishDate}
                    onChange={(date) => setFinishDate(date)}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={60}
                    timeCaption='time'
                    dateFormat='yyyy-MM-dd HH:mm:ss'
                    withPortal
                  />
                </div>
              </div>
              <br />
              <Button variant='primary' onClick={handleShow}>
                Select your Desk
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <OffcanvasHeader closeButton>
                  <Offcanvas.Title>Select your Desktop</Offcanvas.Title>
                </OffcanvasHeader>
                <Offcanvas.Body>
                  <div className='input-group mb-3'>
                    <select className='form-select' id='inputGroupSelect03' aria-label='Example select with button addon'>
                      <option selected>Choose your Desktop...</option>
                      <option value='1'>Desktop 1</option>
                      <option value='2'>Desktop 2</option>
                      <option value='3'>Desktop 3</option>
                    </select>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <button className='btn-save' type='submit' onClick={handleClick}>Reserve</button>
                      {isLoading && <h2 className='loading-text'>Loading...</h2>}
                    </div>
                    <div className='col'>
                      <Link to='/myreservations'>
                        <button className='btn-cancel'>Cancel</button>
                      </Link>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
