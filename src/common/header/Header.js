import react from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
class Header extends react.Component{
    render(){
        return(
            <div className="header">
                <img src={logo} alt="logo" id="image"></img>    
            </div>
        )
    }
}
export default Header;