import React, { Component } from 'react'
import axios from 'axios'

class Pagina extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // status: false,
            // texto: "Indisponível"
            listaDeCrushs: null
        }
    }

    // mudaStatus = () => {
    //     this.setState({status: true, texto:"Disponível"})
    // }

    getCrushs = () => {
        return axios.get('https://crush-management.herokuapp.com/api/crushs')
            .then(bunda => {
                console.log(bunda)
                this.setState({ listaDeCrushs: bunda.data.result })
            })
            
    }

    render = () => {
        const { listaDeCrushs } = this.state
        return (
            <div>
                <button onClick={this.getCrushs}>Buscar crushs</button>
                {
                    listaDeCrushs && listaDeCrushs !== null ?

                        listaDeCrushs.map((crush, i) => {
                            return (
                                <div key={i}>
                                    <h3>Nome: <b>{crush.nome}</b></h3>
                                    <h3>Apelido: <b>{crush.apelido}</b></h3>
                                    <h3>Nota: <b>{crush.nota}</b></h3>
                                    <img src={crush.foto} width='300'/>
                                </div>
                            )
                        }) : null
                }
            </div>
            // <div>
            //     <h1 style={{color: status ? 'green' : 'red' }}>{texto}</h1>
            //     <button onClick={this.mudaStatus.bind(this)}>Click Me!</button>
            // </div>
        )
    }
}

export default Pagina