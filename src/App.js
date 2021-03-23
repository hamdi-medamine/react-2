import './App.css';
import ecouteurBluetooth from './ecouteur bluetooth.jpg';
import ReactPlayer from 'react-player';
function App() {
  return (
    <div style={{border:"solid 5px red" , maxWidth:"100vw"}}>
       <h1 className="title red">Med Amine Hamdi</h1>

<br/>
<div className="pics">
<img  src={ecouteurBluetooth} alt='ecouteur' ></img>

<br/>

<img  src="/chargeur sans fil.jpg" ></img>
</div>
<br/>
<br/>

<div className="vid"> 
<ReactPlayer  url="https://youtu.be/_Zgx2QMfXVg?list=PLmYBIzXGbEzLhBgbGa7ucqGJr5RgmzjWr" />
</div>
 


    </div>
    
  );
}

export default App;
