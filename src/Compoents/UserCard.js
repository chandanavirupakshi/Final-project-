import React from "react";
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Styles/Jobs.css'
import img4 from "./Images/cts.jpg"
import img9 from "./Images/tcs2.jpg"
const UserCard = (props) => {
    return(
    <>
  
    {props.details.map((value,index) => (
    <Nav.Link as ={Link} to ={`/applyjob/${value.id}`}>
        <div className="cards">
            <div class="card flex-row flex-wrap" key={index}>
                <div class="card-header border-0">
          
                  <img src={value.img} className="card-image"/>

                </div>
                
                <div class="card-block px-1">
          

                        <h4 class="card-title">ID:{value.id}</h4>
                    <h4 class="card-title">Role:{value.role}</h4>
                    <p class="card-text">

                        <i className="bi bi-buildings"/>{value.company}
                        <i className="bi bi-briefcase"/> {value.experience}
                        <i className="bi bi-currency-rupee"/>{value.salary}
                        <i className="bi bi-geo-alt-fill"/>{value.location}
                    </p>
                </div>
              
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                
              </div>
             
            </div>
        </div>
    </Nav.Link>
    ))}
    </>
    )
}

export default UserCard;



