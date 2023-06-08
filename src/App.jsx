import SoundBtn from './components/SoundBtn'
import './styles/App.css'

function App() {
  const heater1Audio = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  );

  return (
    <div className='contenedor'>
      <SoundBtn audioSample={heater1Audio}/>
    </div>
  )
}

export default App
