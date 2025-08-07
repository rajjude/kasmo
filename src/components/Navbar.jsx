import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

import { useState } from "react";
import CrmModal from "./CrmDD.jsx";
import ConfigDBDD from "./ConfigDBDD.jsx";
import SnowflakeLogin from "./SnowflakeLogin.jsx";
function Navbar() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const crmModalRef = useRef();

  const [showDatabasePopup, setShowDatabasePopup] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#0600e8" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand text-white fw-bold" href="#">
            Kasmo CDP
          </a>
        </div>

        {/* Center: Menu */}
        <div className="d-none d-lg-flex">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <a className="nav-link active text-white " href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <NavDropdown
                title={<span className="text-white">Config</span>}
                id="config-dropdown"
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <NavDropdown.Item
                  as={Link}
                  onClick={() => crmModalRef?.current?.open()}
                >
                  CRM
                </NavDropdown.Item>
                <CrmModal ref={crmModalRef} />

                <NavDropdown.Item
                  as={Link}
                  onClick={() => setShowDatabasePopup(true)}
                >
                  Database
                </NavDropdown.Item>
                <ConfigDBDD
                  show={showDatabasePopup}
                  handleClose={() => setShowDatabasePopup(false)}
                />
                <NavDropdown.Item as={Link} onClick={() => setShowLogin(true)}>
                  Snowflake Login
                </NavDropdown.Item>
                <SnowflakeLogin
                  show={showLogin}
                  handleClose={() => setShowLogin(false)}
                />
              </NavDropdown>
            </li>
            <li className="nav-item">
              <NavDropdown
                title={<span className="text-white">Data Source</span>}
                id="datasource-dropdown"
                show={show2}
                onMouseEnter={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
              >
                <NavDropdown.Item as={Link} to="/#">
                  Connect to CRM
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#">
                  Connect to DB
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#">
                  Upload
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                User Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-dark me-2">Login</button>
          <button className="btn btn-warning fw-semibold">Request Demo</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
