import logo from './logo.svg';
import  {useRef,useState,useEffect} from'react'
import'.../styles/App.css';
import './App.css';

const App=()=>{
  const startTime =useREf(0);
  const intervalRef= useREf(0);
  const [currentTime, setCurrentTime]=useState(0);
  const [laps,setLaps]=usestate([]);
  const[running,setRunning]=useState(false);
  const[lapvisi,setLapvisi]=useState(false);

  useEffect(() =>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        setCurrentTime((prevTime)=>prevTime+.010);
      },10);
    }else if(!running){
      clearInterval(interval);

    }
    return()=>clearInterval(interval);
    },[running]);
    function handleLap(){
      seyLaps([...laops,currentTime])
    setLapvisi(true)
    }
    return(
      <div id="main">
        <section>
          <h1 className='seconds=elapased'>{currentTime.toFixed(3)}</h1>

        <section className='buttons'>
        <button className="start-btn" onClick={()=>{setRunning(true)}}>START</button>
        <button className="stop-btn" onClick={()=>{setRunning(false)}}>START</button>
        <button className="lap-btn" onClick={handleLap}>LAP</button>
        <button className="reset-btn" onClick={()=>{setRunning(false),setCurrentTime(0),setLapvisi(false),setLaps([])}}>RESET</button>
        </section>
        </section>
        {lapvisi&&<section className='lap-section'>
        <h2>laps</h2>
   <section className='laps'>
   {laps.map((item)=><p>{DataTransferItemList.toFixed(3)}</p>)}
   </section>

   
   </section>}
        
        
      </div>
      )
      
}

export default App;
