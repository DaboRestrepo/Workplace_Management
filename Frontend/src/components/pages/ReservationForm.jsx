import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import '../../css/ReservationForm.css';
import 'react-datepicker/dist/react-datepicker.css';
import encorapurple from '../../assets/imgs/encorapurple.PNG';

function ReservationForm () {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  return (
    <div className='reservation-block'>
      <div className='container'>
        <div className='row'>
          <div className='card w-50'>
            <img src={encorapurple} alt='encora' className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title w-100'><u>Select date and time</u></h5>
              <div className='row'>
                <div className='col'>
                  <label className='text-label'>Staring time</label>
                  <DatePicker
                    className='datepicker1'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={60}
                    timeCaption='time'
                    dateFormat='Pp'
                    withPortal
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label className='text-label'>Finishing time</label>
                  <DatePicker
                    className='datepicker2'
                    selected={finishDate}
                    onChange={(date) => setFinishDate(date)}
                    showTimeSelect
                    timeFormat='p'
                    timeIntervals={60}
                    timeCaption='time'
                    dateFormat='Pp'
                    withPortal
                  />
                </div>
              </div>
            </div>
            <div className='btn-group' role='group'>
              <button className='btn-save btn-success' type='button'>Save</button>
              <button className='btn-cancel btn-danger' type='link'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
