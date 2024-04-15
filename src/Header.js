import {useState} from 'react'
// const Header = ({country})=> {
    const Header = (props) =>{
    const [name, setName] = useState('Rajesh');
    // let name1 = 'Sravanthi'; it's not render on onchange
    return (
      <div>
        {/* <h1> Hello, {name} from {country}</h1> */}
        <h1> Hello, {name} from {props.country} </h1>

        <button
          onClick={() => {
            setName("sravanthi");
          }}
        >
          {" "}
          clickMe!
        </button>
      </div>
    );
}
export default Header;
