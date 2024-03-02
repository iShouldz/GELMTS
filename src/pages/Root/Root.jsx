import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root