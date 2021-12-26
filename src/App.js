import logo from './logo.svg';
import './App.css';
import Pullman from './Component/pullman';
import Navbar from './Component/navbar';
import React, { Component } from 'react'; 


class App extends React.Component {

  state = {
    pullmans: [
      { id: 0, nome: 'Pullman 0', prezzo: 100 },
      { id: 1, nome: 'Pullman 1', prezzo: 101 },
      { id: 2, nome: 'Pullman 2', prezzo: 102 },
      { id: 3, nome: 'Pullman 3', prezzo: 103 },
      { id: 4, nome: 'Pullman 4', prezzo: 104 },
      { id: 5, nome: 'Pullman 5', prezzo: 105 },
      { id: 6, nome: 'Pullman 6', prezzo: 106 },
    ]
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className='row'>
            {
              this.state.pullmans.map(pullman => (
                <Pullman key={pullman.id} pullman={pullman}></Pullman>
              ))
            }

          </div>
        </div>
      </>
    )
  };
}

export default App;
