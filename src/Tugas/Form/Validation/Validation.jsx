import React from "react";
import * as Validator from "validatorjs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px', marginBottom: '20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component {
    state = {
        nama: '',
        email: '',
        telepon: '',
        tglLahir: '',
        gender: '',
        password: '',
        skb: false,
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {nama, email, telepon, tglLahir, gender, password, skb} = this.state;
        
        let data = {nama, email, telepon, tglLahir, gender, password, skb}

        Validator.register('checked', function(value, requirement, attribute){
            return value === true;
        }, 'The :attribute checkbox has not been checked');

        let today = new Date().toLocaleDateString();

        let rules = {
            nama: 'required',
            email: 'required|email',
            telepon: 'required|numeric',
            tglLahir: 'required|date|before:today',
            gender: 'required',
            password: 'min:8|required',
            skb: 'checked'
        }

        let validation = new Validator(data, rules);
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('email'),
                ...validation.errors.get('telepon'),
                ...validation.errors.get('tglLahir'),
                ...validation.errors.get('gender'),
                ...validation.errors.get('password'),
                ...validation.errors.get('skb')
            ]
            // errors: Object.keys(this.state).splice(0,7).map((k) => ([
            //     ...validation.errors.get(k),
            // ]))
        })
        console.log(validation.errors.all());

        if(Object.keys(validation.errors.all()).length === 0) {
            alert(`
            Nama: ${this.state.nama}
            Email: ${this.state.email}
            HP: ${this.state.telepon}
            Tgl lahir: ${this.state.tglLahir}
            Jenis kelamin: ${this.state.gender}
            Password: ${this.state.password}
            Setuju SKB? ${this.state.skb ? 'YA' : 'TIDAK'}
            `);
            this.setState({
                nama: '',
                email: '',
                telepon: '',
                tglLahir: '',
                gender: '',
                password: '',
                skb: false
            });
        }
    }

    render() {
        return (
            <Container className="my-5">
                <Card border="secondary">
                    <Card.Header>
                        <Card.Title className="mt-2">Buat akun baru</Card.Title>
                    </Card.Header>                    
                    <Card.Body>
                        {
                            this.state.errors && <ShowErrors errors={this.state.errors} />
                        }
                        <Form onSubmit={this.handleSubmit} style={{marginTop: '-16px'}}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" name="nama" placeholder="Masukkan nama lengkap"
                                onChange={ e => this.setState({nama: e.target.value}) } />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Masukkan email (name@example.com)"
                                        onChange={ e => this.setState({email: e.target.value}) } />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nomor telepon seluler</Form.Label>
                                        <Form.Control type="tel" name="telepon" placeholder="Masukkan nomor telepon"
                                        onChange={ e => this.setState({telepon: e.target.value}) } />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Tanggal lahir</Form.Label>
                                <Form.Control type="date" name="tglLahir"
                                onChange={ e => this.setState({tglLahir: e.target.value}) } />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Jenis kelamin</Form.Label>
                                <div key="inline-radio">
                                    <Form.Check inline type="radio" name="gender" value="Laki-laki" label="Laki-laki" id="inline-radio-1"
                                    onChange={ e => this.setState({gender: e.target.value}) } />
                                    <Form.Check inline type="radio" name="gender" value="Perempuan" label="Perempuan" id="inline-radio-2"
                                    onChange={ e => this.setState({gender: e.target.value}) } />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Masukkan password baru"
                                onChange={ e => this.setState({password: e.target.value}) } />
                            </Form.Group>
                            <Form.Check type="checkbox" className="mb-4">
                                <Form.Check.Input type="checkbox" checked={this.state.skb} name="skb"
                                onChange={ e => this.setState({skb: e.target.checked}) } />
                                <Form.Check.Label>
                                    Saya menyetujui <Link href="#">syarat dan ketentuan yang berlaku</Link>
                                </Form.Check.Label>
                            </Form.Check>
                            <Button variant="primary" type="submit">Daftar</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}