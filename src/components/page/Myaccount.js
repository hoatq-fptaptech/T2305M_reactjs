import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function MyAccount(){
    const [fullname,setFullname] = useState("");
    const handleInput = (e)=>{
        const value = e.target.value;
        setFullname(value);
    }
    return (
        <div className="container">
            <h1>Register</h1>
            <Row>
                <Col xs={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control onChange={handleInput} value={fullname} name="fullname" type="text" placeholder="Full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" name="telephone" placeholder="Telephone"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" name="address" placeholder="Address"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}