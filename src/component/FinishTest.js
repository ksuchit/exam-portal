import { useEffect, useState } from "react"


export default function FinishTest() {
    const [finalR, setFinalR] = useState();
    
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('answers')))
        console.log(JSON.parse(localStorage.getItem('currectAns')))

        const result = JSON.parse(localStorage.getItem('answers')).map((item, i) => {
            if (item >= 0 && item < 10) {
                if (item == JSON.parse(localStorage.getItem('currectAns'))[i]) 
                    return true
                else
                    return false
            }
            else {
                let cnt = 0;
                item.map((data, j) => {
                    console.log(JSON.parse(localStorage.getItem('currectAns'))[i].includes(parseInt(data)))
                    if (JSON.parse(localStorage.getItem('currectAns'))[i].includes(parseInt(data)))
                        cnt++
                })
                if (cnt == JSON.parse(localStorage.getItem('currectAns'))[i].length)
                    return true
                else
                    return false
            }
            
        })
        console.log(result)
        setFinalR(result.filter((item)=>item===true))
    }, [])
    
    console.log(finalR)
    return (
        <div class="container">
        <div class="row">
            <h1>My Interview Portal</h1>
            <hr />
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">AngularJS Test - Result</div>
                        {finalR &&
                            <div class="panel-body">
                                <center>
                                    <h2 class="">Total no of Questions: {JSON.parse(localStorage.getItem('currectAns')).length}</h2>
                                    <h3 class="text-success">Correct Answers: {finalR.length} <br></br>
                                        <span class="text-danger">Wrong Answers: {JSON.parse(localStorage.getItem('answers')).length - finalR.length}</span></h3>
                                </center>
                            </div>
                        }
                </div>
            </div>
        </div>
    </div>
    )
}