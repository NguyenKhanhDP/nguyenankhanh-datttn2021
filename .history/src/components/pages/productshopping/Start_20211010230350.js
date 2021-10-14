import React, { useState } from 'react'
import './style.css'
import './Start.css'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


export const Start = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="start">
            <Alert show={show} variant="success">
                <Alert.Heading><h1>K&K</h1> Xin chào!</Alert.Heading>
                <>
                    Hãy đăng nhập để trải nghiệm được trọn vẹn.
                </>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button  onClick={() => setShow(false)} variant="outline-success">
                        <Link to='/products/homecart'><span>Bắt đầu trải nghiệm</span></Link>
                    </Button>
                </div>
            </Alert>

            {/* {!show && <Button className="button-cart" onClick={() => setShow(true)}></Button>} */}
        </div>
    )
}
