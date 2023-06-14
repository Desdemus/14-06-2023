import "./index.css"
import NavbarElement from "../navbarElement"
const Navbar = () => {
    return (

        <div className="navBarDiv">
            <NavbarElement textContent={"Home"} />
            <NavbarElement textContent={"To-daaan-list"} />
            <NavbarElement textContent={"Altri collegamenti"} />
            <NavbarElement textContent={"Chi siamo"} />
        </div>
    )


}
export default Navbar