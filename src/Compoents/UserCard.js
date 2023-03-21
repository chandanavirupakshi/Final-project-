import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import './Styles/Jobs.css'

const UserCard = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true); //flag is set to false when there's no data from response.
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/jobLists")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e.message);
        setFlag(false);
        throw new Error();
      });
  }, []);
 
  return (
    <>
       
      {flag ? (
        <div className="bg-light m-0">
          <h1 className="container text-center text-uppercase text-secondary mt-2">
            <u>Job Openings</u>
          </h1>
          <div
            className="bg-info p-4 my-4 border border-4 rounded"
            style={{ width: "80%", display: "block", margin: "auto" }}
          >
            
            {data.map((item, i) => (
              <div
                className="card border border-5 m-4"
                key={i}
                style={{ boxShadow: "12px 5px 10px black", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/applyjob/${item.id}`);
                }}
                
              >
                 <div class="card flex-row flex-wrap">
                <div class="card-header border-0">
          
                  <img src={item.icon} className="card-image"/>

                </div>
             
                <div className="card-body">
                
                  
                  <h4 class="card-title">ID:{item.id}</h4>
                  <p className="card-text text-secondary">{item.role} </p>
                  <p className="card-text text-secondary">
                  <i className="bi bi-buildings"/>{item.company}
                  <i className="bi bi-briefcase"/> {item.experience}    
                 <i className="bi bi-currency-rupee"/>{item.salary}
                    <i className="bi bi-geo-alt-fill"/>{item.location}
                  
                  </p>
                </div>
                
              </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        //<data text="No Data Found" />
      '')}
    </>
  );
};

export default UserCard;


