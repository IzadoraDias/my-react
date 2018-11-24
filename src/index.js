import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = <h1>ELEMENTO EM UMA VARIÁVEL</h1>


const ElementoComFuncao = () => {
    return <h1>HTML dentro de uma função</h1>
}

const ElementoComFuncao2 = () => {
    return (
    <div>
        <h1>linha 1</h1>
        <h2>linha 2</h2>
    </div>
    )
}

//na classe da pra usar os states
class ElementoComClasse extends Component{
    render = () => {
        return (
            <div>
                <h1>Uma classe</h1>
                <button>click Me!</button>
                <ElementoComFuncao2/>
                {element}
            </div>
        )

    }
}

ReactDOM.render(<ElementoComClasse />, document.getElementById('root'));
