import React, { useState } from 'react'
import './style.css'
import './'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


export const Start = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="start">
            <Alert show={show} variant="success">
                <Alert.Heading><p><h1>K&K</h1> Xin chào!</p></Alert.Heading>
                <p>
                    Hãy đăng nhập để trải nghiệm được trọn vẹn.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button  onClick={() => setShow(false)} variant="outline-success">
                        <Link to='/products/homecart'>Ấn để bắt đầu mua hàng</Link>
                    </Button>
                </div>
            </Alert>

            {/* {!show && <Button className="button-cart" onClick={() => setShow(true)}></Button>} */}
        </div>
    )
}
