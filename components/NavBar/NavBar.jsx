import React, { Component } from "react";

import Link from "next/link";
import styles from './nav.module.css';

class NavBar extends Component {
  state = {
    click: true,
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu = (page_num) => {
    this.setState({ click: true });
  };

  render() {
   
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <a className="navbar-logo" to="/" onClick={() => this.closeMenu(1)}>
              <img src={process.env.NEXT_PUBLIC_MAINPATH+`/img/logo.png`} alt="" />
            </a>
            <div className="menu-icon" onClick={this.handleMenu}>
              <label htmlFor="" className="menu-btn">
                <i
                  className={this.state.click ? "fas fa-bars" : "fas fa-times"}
                ></i>
              </label>
            </div>
            <ul className={!this.state.click ? `nav-menu active ${styles.removePadding}` : "nav-menu"}>
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      this.props.page_no == 1
                        ? "nav-links current-page"
                        : "nav-links"
                    }
                    onClick={() => this.closeMenu(1)}
                  >
                    HOME
                  </a>
                </Link>
              </li>
{/*
              <li className="nav-item">
                <a
                  href=""
                  className={
                    this.props.page_no == 2
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  // onClick={() => this.closeMenu(2) }
                >
                  LATEST
                </a>
              </li>

              <li className="nav-item">
                <a
                  href=""
                  className={
                    this.props.page_no == 3
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  // onClick={() => this.closeMenu(3)}
                >
                  BLOG
                </a>
              </li>
*/}
              <li className="nav-item">
                <Link href="/teams">
                  <a
                    className={
                      this.props.page_no == 4
                        ? "nav-links current-page"
                        : "nav-links"
                    }
                    onClick={() => this.closeMenu(4)}
                  >
                    TEAMS
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <a
                  href="https://projects.ce.pdn.ac.lk/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                  onClick={() => this.closeMenu(4)}
                >
                  PROJECTS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
export default NavBar;
