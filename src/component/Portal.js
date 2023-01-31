import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Portal() {

    const navigate = useNavigate();
    const forJavaTest = () => {
        alert("sorry , Try another way")
    }
    useEffect(() => {
        axios.get(`http://xapi.ngminds.com/getQuizData`)
       .then((response) => {
           console.log(response);
           localStorage.setItem('tests',JSON.stringify(response.data.tests))
       })
       .catch((error) => {
       console.log(error)
   })
    }, [])
    return (
        <div className="container">
        <div className="row">
            <h1>My Interview Portal</h1>
            <hr />
            <div className="col-md-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>No of Questions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AngularJS Test</td>
                            <td>50</td>
                                <td><button className="btn btn-warning"
                                    onClick={()=>navigate(`/questions?id=${"598e9256cc88456d444e7c0d"}`)}
                                >Start Test</button> </td>
                        </tr>
                        <tr>
                            <td>Javascript Test</td>
                            <td>25</td>
                            <td><button className="btn btn-warning"
                                onClick={()=>navigate(`/questions?id=${"598e93a7cc88456d444e7c13"}`)}                            
                            >Start Test</button></td>
                        </tr>
                        <tr>
                            <td>Java Test</td>
                            <td>10</td>
                            <td><button className="btn btn-warning"
                                onClick={forJavaTest}                            
                            >Start Test</button></td>
                        </tr>
                        <tr>
                            <td>NodeJS Test</td>
                            <td>5</td>
                            <td><button className="btn btn-warning"
                                onClick={()=>navigate(`/questions?id=${"598e941fcc88456d444e7c1a"}`)}                            
                            >Start Test</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>    
    )
}