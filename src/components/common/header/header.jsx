import { Container } from "react-bootstrap";
import { TopMenu, BottomMenu } from "../../";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <Container fluid className="fixed-top p-0">
            <div className="header">
                <Link to="/" title="GO TO HOMEPAGE">
                    <div className="logo">
                        <img src="/testlogo.png" alt="Molib Logo" />
                        <div className="logo_text">
                            MOLIB 
                            <p>Discover the World with Our Library</p>
                        </div>
                    </div>
                </Link>
                <div className="menus">
                    <TopMenu />
                    <BottomMenu />
                </div>
            </div>
        </Container>
    );
};

export default Header;

