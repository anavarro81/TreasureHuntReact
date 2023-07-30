import logo from './logo.svg';
import './App.css';
import Attempts from './components/Attempts';
import Board from './components/Board';

// Genera numero aleatorio entre dos números
function RandonNumber(min, max) {
  return Math.random() * (max - min) + min;
}

 let elem =prompt('Introduce un numero de elementos: ')

 // Genera un numero aletorio para ocultar el tesoro. 
let TreasureNumber = Math.floor(RandonNumber(1,elem))
console.log(('El tesoro está en: ' + TreasureNumber));

function App() {

  return (
    <>
    {/* <Attempts> </Attempts>  */}
    <Board elements={elem} TreasureNumber={TreasureNumber}></Board> 
    </>
    // <Board></Board>
    // <div className="App">
    //   {/* <Header> </Header>
    //   <Main></Main>
    //   <HelloWorld></HelloWorld>      
    //   <List data={["Lujuria", "Pereza", "Gula", "Ira"]}></List> 
      
    //   {/* <Gallery data={galleryList}></Gallery>

    //   <ButtonLog></ButtonLog> */}
    //   {/* <Gallery></Gallery>  */}

    //   <Header></Header>
     
      
    // </div>

  // <ButtonLog></ButtonLog>
  // <ButtonCount> </ButtonCount>
  );
}

export default App;
