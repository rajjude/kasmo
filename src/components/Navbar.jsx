import { NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

import CrmModal from "./Crm.jsx";
import ConfigDBDD from "./Database.jsx";
import SnowflakeLogin from "./SnowflakeLogin.jsx";

import ConnectToCrm from "./ConnectToCRM.jsx";
import ConnectToDB from "./ConnectToDB.jsx";
import Upload from "./Upload.jsx";

function Navbar() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const crmModalRef = useRef();
  const [showDatabasePopup, setShowDatabasePopup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [showConnectToCrm, setShowConnectToCrm] = useState(false);
  const [showConnectToDB, setShowConnectToDB] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const handleConfigSelect = (action) => {
    action();
    setShow(false);
  };

  const handleDatasourceSelect = (action) => {
    action();
    setShow2(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#0600e8" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand text-white fw-bold" href="/">
            Kasmo CDP
          </a>
        </div>

        {/* Center: Menu */}
        <div className="d-none d-lg-flex">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <NavLink
                href="/"
                className="nav-link active text-white "
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                Home
              </NavLink>
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
                  onClick={() =>
                    handleConfigSelect(() => crmModalRef?.current?.open())
                  }
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  CRM
                </NavDropdown.Item>
                <CrmModal ref={crmModalRef} />

                <NavDropdown.Item
                  as={Link}
                  onClick={() =>
                    handleConfigSelect(() => setShowDatabasePopup(true))
                  }
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  Database
                </NavDropdown.Item>
                <ConfigDBDD
                  show={showDatabasePopup}
                  handleClose={() => setShowDatabasePopup(false)}
                />

                <NavDropdown.Item
                  as={Link}
                  onClick={() => handleConfigSelect(() => setShowLogin(true))}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
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
                <NavDropdown.Item
                  as={Link}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                  onClick={() =>
                    handleDatasourceSelect(() => setShowConnectToCrm(true))
                  }
                >
                  Connect to CRM
                </NavDropdown.Item>
                <ConnectToCrm
                  show={showConnectToCrm}
                  handleClose={() => setShowConnectToCrm(false)}
                />
                <NavDropdown.Item
                  as={Link}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                  onClick={() =>
                    handleDatasourceSelect(() => {
                      setShowConnectToDB(true);
                    })
                  }
                >
                  Connect to DB
                </NavDropdown.Item>
                <ConnectToDB
                  show={showConnectToDB}
                  handleClose={() => {
                    setShowConnectToDB(false);
                  }}
                />
                <NavDropdown.Item
                  as={Link}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                  onClick={() =>
                    handleDatasourceSelect(() => {
                      setShowUpload(true);
                    })
                  }
                >
                  Upload
                </NavDropdown.Item>
                <Upload
                  show={showUpload}
                  handleClose={() => {
                    setShowUpload(false);
                  }}
                />
              </NavDropdown>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="/user-experience"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                User Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-dark me-2"
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Login
          </button>
          <a href="/request-demo">
            <button className="btn btn-warning fw-semibold">
              Request Demo
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
