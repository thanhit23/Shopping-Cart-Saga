import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <p>Ready</p>
        </div>
        <div className="mt-[5px]">
          <p>Ready</p>
          <div className="flex justify-end">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-[rgb(37,99,235)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgb(29,78,216)] hover:shadow-lg focus:bg-[rgb(29,78,216)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              type="button"
              className="ml-[10px] inline-block px-6 py-2.5 bg-[rgb(220,38,38)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
