import React, { Component } from "react"

class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            assunto: '',
            email: '',
            mensagem: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('send email', this.state)

        let emailSended = true

        if (emailSended) {
            this.setState({
                assunto: '',
                email: '',
                mensagem: ''
            })
        }
    }

    render() {
        return (
            <div className="contact-form" onSubmit={this.handleSubmit}>
                <form>
                    <div className="form-group">
                        <label>Assunto</label>
                        <input className="form-control" value={this.state.assunto} name="assunto" type="text" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input className="form-control" value={this.state.email} name="email" type="text" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mensagem</label>
                        <textarea className="form-control" value={this.state.mensagem} name="mensagem" onChange={this.handleChange}>

                        </textarea>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm