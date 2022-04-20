import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const NavBar =  observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg = "dark" variant = "dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Магазин мебели</NavLink> 
                {user.isAuth ?
                <Nav className="mr-auto" style={{color: 'white'}}> 
                    <button variant={'outline-light'}>Админ панель</button>   
                    <button variant={'outline-light'} className = "ml-2">Выйти</button> 
                </Nav>  
                :
                <Nav className="ml-auto" style={{color: 'white'}}> 
                    <button variant={'outline-light'} onClick = {() => user.setIsAuth(true)}>Авторизация</button>    
                </Nav>    
                }
            </Container>
           
        </Navbar>
    );

});

export default NavBar;