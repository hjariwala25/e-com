import { Outlet } from "react-router-dom"
import Footer from "../components/Footer."
import Header from "../components/Header"
import FetchItems from "../components/FetchItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"
import { useState } from "react"

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App