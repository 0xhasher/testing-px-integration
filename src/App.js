import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Fetching data from Proxtera API...');
    const myHeaders = new Headers();
    myHeaders.append('api-key', process.env.REACT_APP_PROXTERA_API_KEY);
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      transaction_id: 'be7f4123-7ef9-4b56-9057-2a2875db6409',
      payment_status: 'Dump testing',
      updated: '2024-10-23T02:32:29.1205512Z',
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(process.env.REACT_APP_PROXTERA_API_URL, requestOptions)
      .then(response => response.text())
      .then(result => console.log('result:::', result))
      .catch(error => console.error('error:::', error));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
