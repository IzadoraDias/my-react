import React, { Component } from 'react'

class Pagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            texto: "Indisponível"
        }
    }

    mudaStatus = () => {
        this.setState({status: true, texto:"Disponível"})
    }

    render = () => {
        const { texto, status } = this.state
        return (

            <div>
                <h1 style={{color: status ? 'green' : 'red' }}>{texto}</h1>
                <button onClick={this.mudaStatus.bind(this)}>Click Me!</button>
            </div>
        )
    }
}

export default Pagina