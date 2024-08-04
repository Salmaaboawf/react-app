import { Navbar } from "flowbite-react";
import { UserContext } from "./Cotext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Button } from "flowbite-react";

import { Link, NavLink } from 'react-router-dom'
import Counter from "./Counter";
export default function Component() {
    // const [user,setUser] = useContext(UserContext);
    // console.log(user)
    const count = useSelector((state) => state.counter);
    const [user] = useContext(UserContext);
    return (
        <Navbar fluid rounded>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/product">Product</Navbar.Link>
                <Navbar.Link href="/todo">Todo</Navbar.Link>
                <Navbar.Link href="/teacher">Teacher</Navbar.Link>
                <Navbar.Link href="/form">Form</Navbar.Link>
                <Navbar.Link href="/counter">counter</Navbar.Link>
                <Navbar.Link href="/Movi">Movi</Navbar.Link>
                <Navbar.Link href="/favorite"> favorite Movi</Navbar.Link>


                <Navbar.Link ><NavLink to="/Counter">{count}</NavLink></Navbar.Link>
                {/* <Navbar.Link className="bg-red-500">{user.name}</Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>
    );
}
