import SoundBtn from './components/SoundBtn'
import './styles/App.css'

function App() {
  const heater1Audio = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  );
  const heater2Audio = new Audio(
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  );
  const heater3Audio = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  );
  const heater4Audio = new Audio(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  );
  return (
    <div className='contenedor'>
      <SoundBtn audioSample={heater1Audio} type='Heater 1'/>
      <SoundBtn audioSample={heater2Audio} type='Heater 2'/>
      <SoundBtn audioSample={heater3Audio} type='Heater 3'/>
      <SoundBtn audioSample={heater4Audio} type='Heater 4'/>
    </div>
  )
}

export default App
