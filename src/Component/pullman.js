import React, { Component } from 'react';


class Pullman extends React.Component {

    GetImageIdRandom = function () {
        return this.getRandomArbitrary(1, 5);
    }

    getRandomArbitrary = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    render() {
        return (
            <div className="col" style={{ padding: '20px' }}>
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top"
                        src={require(`../images/pullman${this.GetImageIdRandom()}.jpg`)}
                        alt="Card image cap"
                        style={{width:'286px', height:'190px'}}>
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.pullman.nome}</h5>
                        <p className="card-text">{this.props.pullman.prezzo}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pullman;
