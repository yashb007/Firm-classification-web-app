import React,{ Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import { Link } from 'react-router-dom';
import image1 from '../../assets/pitcure.jpeg';
import './nav.css';



class Header extends Component {

    state={
        info:null
    }
    // componentDidMount(){
    //     M.AutoInit();
    //     const data=localStorage.getItem('user');
    //     const td=JSON.parse(data);
    //     console.log(td);
    //     this.setState({
    //         info:td
    //     })
    // }

    componentDidMount(){
        M.AutoInit()
    }
    
    logout = ()=>{
        fetch("http://localhost:8080/admin/logout",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      }
      }).then(res => res.json())
      .then(data => { 
          console.log(data)
        if(data.error){
          alert(`err : ${data.error}`);
        }
        else{
          console.log("1234")
          localStorage.clear()
          window.location.href = '/';
        }
      }
        ).catch(err => console.log(err))
        }
    

     render(){
        return (<nav key="fwefwe" className="log_nav " >
        <div className="navbar-fixed">
            <div className="nav-wrapper ">
                <Link className="brand-logo center black-text " id="navh">Fraud Firm</Link>
                <ul id="nav-mobile " className="left" >
                    <li><Link to="#" data-target="slide-out"  className=" sidenav-trigger show-on-large  right"><i className="material-icons">menu</i></Link></li>
                </ul>
                
            </div>
        </div>

        
        <ul id="slide-out" className="sidenav">
            <li>
                <div className="user-view">
                    
                    <img className="circle " src={image1} />
                    <span className="black-text name">Yash bansal</span>
                    <span className="black-text email">Bansaly37@gmail.com</span>
                </div>               
            </li>
            <li><Link to="regcomplain" className="waves-effect" ><i className="fas fa-clipboard-list"></i>Register Complain</Link></li>
            <li><div className="divider "></div></li>
            <li><Link to="viewfir" className="waves-effect" ><i className="fas fa-clipboard-list"></i>View FIR</Link></li>
            <li><div className="divider "></div></li>
            <li><Link className="waves-effect" to="/edit"><i className="material-icons">create</i>Edit Profile</Link></li>
            <li><div className="divider "></div></li>
                        
            <li><Link className="waves-effect"  onClick={this.logout}><i className="material-icons">arrow_back</i>Logout</Link></li>
            <li><div className="divider "></div></li>
        </ul>
  </nav>) 
}
}

export default Header;