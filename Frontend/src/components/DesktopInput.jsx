import React from 'react';

function DesktopInput ({ userDesktop, desktopChange }) {
  const options = [
    { label: 'Worker', value: 1 },
    { label: 'Manager', value: 2 }
  ];
  return (
    <div class='input-group mb-3'>
      <button class='btn btn-outline-secondary' type='button'>Button</button>
      <select class='form-select' id='inputGroupSelect03'>
        value={userDesktop}
        options={options}
        onChange={desktopChange}
      </select>
    </div>
  );
}

export default DesktopInput;
