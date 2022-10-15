import './App.css';
import { useEffect, useState } from 'react';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import { Link } from 'react-router-dom';

function App() {
const [dogImages, setDogImages] = useState([]);
const [loading, setLoading] = useState(false);
const [disableButton, setDisableButton] = useState(false);

const fetchDogs = async (quantity) => {
  setLoading(true);

  const response = await fetch(`https://dog.ceo/api/breeds/image/random/${3}`);
  const dogImages = await response.json();

  setDogImages(dogImages.message);
  setLoading(false);
}

useEffect(() => {
  fetchDogs();
}, [])

return (
  <div className="App">
    <Title>Dogs</Title>
    <Link to='/welcome'>Go to Welcome</Link>
    <Checkbox onChange={(event) => setDisableButton(event.target.checked)}>Enable Button</Checkbox>
    <Button disabled={!disableButton} loading={loading} onClick={fetchDogs}>Fetch Dogs</Button>
    <div className='dogContainer'>
      {dogImages && dogImages.map((dog, index) => <img className='dogImage' key={index} src={dog}></img>)}
    </div>
  </div>
);
}

export default App;
