
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Card() {
  const [foods,setfoods]= useState([])
    
  const { food } = useParams();
  let token = localStorage.getItem('token');
  //console.log(bookId)
  const navigate = useNavigate();
  useEffect(() => {


      if(food){
          axios.get(`http://localhost:5000/foods/${food}`).then((responce) => { setfoods(responce.data.data) })
  }

  }, [])

  return (
    <div map>
      <div>
        {" "}
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card.
            </p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
        
