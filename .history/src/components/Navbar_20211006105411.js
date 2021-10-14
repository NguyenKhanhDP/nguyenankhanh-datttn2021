import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            K$K
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products/homecart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="headershoppingcart">
               
                <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                    <Container>
                        <Navbar.Brand>
                            <Link to='/products/homecart'>Các sản phẩm</Link>
                        </Navbar.Brand>

                        <Navbar.Text className="search">
                            <FormControl
                                style={{ width: 500 }}
                                placeholder=" Nhap tim kim..."
                                className="m-auto" />
                        </Navbar.Text>

                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    <GiShoppingCart color="white" fontSize="30px" />
                                    <Badge>{cart.length}</Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ minWidth: 220 }}>

                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map((prod) => (
                                                <span className="cartitem" key={prod.id}>
                                                    <img
                                                        src={prod.image}
                                                        className="cartItemImg"
                                                        alt={prod.name} />
                                                    <div className="cartItemDetail">
                                                        <span>{prod.name}</span>
                                                        <span>
                                                            ${prod.price.split(".")[0]}
                                                        </span>
                                                    </div>

                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod,
                                                            })
                                                        }
                                                    />
                                                </span>

                                            ))
                                            }<span><hr /></span>
                                            <Link to="/products/viewcart">
                                                <Button style={{ width: "95%", margin: "0 10px" }}>
                                                    Go To Cart
                                                </Button>
                                            </Link>
                                        </>
                                    ) : (<span style={{ padding: 10 }}>Thanh toán giỏ hàng</span>)}

                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                    </Container>
                </Navbar>

                <h1>Khánh</h1>
            </div>
    </>
  );
}

export default Navbar;
