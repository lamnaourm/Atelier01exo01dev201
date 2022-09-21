import "./App.css";
import { Pht } from "./components/Pht";
import TauxVA from "./components/Tva";

function Res() {
  return (
    <div className="form_control">
      <label htmlFor="res">Resultat : </label>
      <input type="number" id="res" readOnly/>
    </div>
  );
}

function Buttons() {
  return (
    <div className="form_control">
      <input type="button" value='Calculer' />
      <input type="button" value='Initialiser' />
    </div>
  );
}


function CalculPTTC(){
  return <fieldset>
    <legend>Calcul PTTC</legend>
    <Pht/>
    <TauxVA/>
    <Buttons/>
    <Res/>
  </fieldset>
}
function App() {
  return <div className="container">
      <CalculPTTC />
  </div>;
}

export default App;
