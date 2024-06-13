import { useLocation } from "react-router-dom";
import Header from "../components/Main/Header";

const HideHeader = () => {
  const location = useLocation()
  if (location.pathname === '/404') return null
  return <Header />
}

export default HideHeader