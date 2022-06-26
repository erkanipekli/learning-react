import logos from './logo.svg';

function App() {

  return (
  <div className = "App" >
      <h1>Hello World!</h1>
       <img src="/logo192.png" alt="" />
       <img style={{width:'80px',height:'80px'}} src={logos} alt="" />
    </div>
  );
}

export default App;