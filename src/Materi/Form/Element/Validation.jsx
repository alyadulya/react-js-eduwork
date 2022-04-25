import React from "react";
import * as Validator from "validatorjs";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label} </label><br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} /><br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        
        let data = {email, password}

        let rules = {
            email: 'required|email',
            password: 'min:8|required'
        }

        let validation = new Validator(data, rules);
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })
        console.log(validation.errors.all());

        // let message = [];
        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if(email.length === 0) {
        //     message = [...message, 'Email tidak boleh kosong'];
        // } else if(email.length > 0) {
        //     if(!re.test(String(email).toLowerCase())) {
        //         message = [...message, 'Email tidak valid'];
        //     }
        // }

        // if(password.length === 0) {
        //     message = [...message, 'Password tidak boleh kosong'];
        // } else if(password.length > 0 && password.length < 8) {
        //     message = [...message, 'Password minimal 8 karakter']
        // }

        // if(message.length > 0) {
        //     this.setState({
        //         errors: message
        //     })
        // } else {
        //     alert(`
        //         email: ${this.state.email},
        //         password: ${this.state.password}
        //     `);
        //     this.setState({
        //         errors: []
        //     })
        // }
    }

    render() {
        const style = {
            width: "400px",
            margin: "100px auto 0",
            border: "1px solid black",
            padding: "10px"
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Login page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email"
                    onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Password"
                    onChange={value => this.setState({password: value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}