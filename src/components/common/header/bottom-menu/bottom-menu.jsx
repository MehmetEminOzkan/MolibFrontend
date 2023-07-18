import { Container, Nav, Navbar } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import {  BsInfoCircleFill, BsHeadphones } from "react-icons/bs";
import {  FaBook } from "react-icons/fa";
import { constants } from "../../../../constants";
import { Link, useLocation } from "react-router-dom";
import { UserMenu } from "../../../";
import "./bottom-menu.scss";

const {
    routes: { about, contact, home, books },
} = constants;

const navigationLinks = [
    {
        direct: home,
        icon: <ImHome />,
        text: "Home",
    },
    {
        direct: books,
        icon: <FaBook />,
        text: "Books",
    },
    {
        direct: about,
        icon: <BsInfoCircleFill />,
        text: "About Us",
    },
    {
        direct: contact,
        icon: <BsHeadphones />,
        text: "Contact Us",
    },
];

const BottomMenu = () => {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <div className="bottom-menu">
            <Navbar expand="lg">
                <Container className="p-0">
                    <Navbar.Toggle aria-controls="toggle" />
                    <Navbar.Collapse id="toggle">
                        <Nav className="me-auto">
                            {navigationLinks.map((navigationLink) => (
                                <Nav.Link style={{color:"#114B45"}}
                                    key={navigationLink.text}
                                    as={Link}
                                    to={navigationLink.direct}
                                    active={pathname === navigationLink.direct}>
                                    {navigationLink.icon} {navigationLink.text}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Nav className="ms-auto"> {/* Değişiklik burada */}
                            <UserMenu />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default BottomMenu;
