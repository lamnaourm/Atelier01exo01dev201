import { Component } from "react";

class Tva extends Component{
    render(){
        return (
            <div className="form_control">
              <label htmlFor="tva">Taux TVA : </label>
              <input type="number" placeholder="Tva ...." id="tva" />
            </div>
          );
    }
}


export default Tva;