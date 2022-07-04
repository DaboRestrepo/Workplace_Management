import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import '../../css/ReservationForm.css';
import 'react-datepicker/dist/react-datepicker.css';
import encorapurple from '../../assets/imgs/encorapurple.PNG';

const baseUrl = 'http://127.0.0.1:8000/api/reservation';

function ReservationForm () {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [isLoading, setIsloading] = useState(false);

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
            </div>
            <div className='row'>
              <div className='col'>
                <button className='btn-save' type='submit' onClick={handleClick}>Save</button>
                {isLoading && <h2 className='loading-text'>Loading...</h2>}
              </div>
              <div className='col'>
                <button className='btn-cancel' type='link'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
