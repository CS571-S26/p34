import { Link, Outlet } from 'react-router-dom'
import '../App.css'

import { Container, Nav, Navbar } from "react-bootstrap";

// import crest from '../../assets/uw-crest.svg'
import SearchNavbar from "./SearchNavbar";
import HomePage from "../pages/HomePage";

export default function Layout() {
  return (
    <div>
    <SearchNavbar />
      <div style={{ margin: "1rem" }}>
        {/* Context Here */}
          <HomePage />
        {/* /Context Here */}
    </div>
  </div>
  )
}