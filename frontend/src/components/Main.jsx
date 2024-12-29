import NavBar from "./NavBar"

const Main = ({child}) => {
  return (
    <div>
        <NavBar />
        {child}
    </div>
  )
}

export default Main