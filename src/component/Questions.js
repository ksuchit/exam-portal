import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


export default function Questions() {

    const [searchParams,] = useSearchParams();
    const [data, setData] = useState();
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('tests')).find((item) => item._id === searchParams.get('id')))
        setData(JSON.parse(localStorage.getItem('tests')).find((item) => item._id === searchParams.get('id')))
    }, [])
    console.log(data)
    return (
        <div className="container">
            <div className="row">
            <h1>My Interview Portal</h1>
                <hr />
                {data &&
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">{data?.name}</div>
                            <div className="panel-body">
                                <h3>{data?.questions[index]?.questionText}</h3>
                                {data?.questions[index].options.map((item, i) => {
                                
                                    return <div className="form-check" key={i}>
                                        {data?.questions[index].type === "Multiple-Response" ?
                                            <>
                                                <input class="form-check-input" type="checkbox" value={i} id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    {item}
                                                </label>
                                            </>
                                            :
                                            <>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" value={i} />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    {item}
                                                </label></>
                                        }
                                    </div>
                                })}
                            </div>
                            <div className="panel-footer">
                                {index !== 0 ?
                                    <button className="btn btn-success" onClick={() => setIndex((prev) => prev - 1)}>Previous</button>
                                    : ""}
                                {index < data.questions.length-1?
                                    <button className="btn btn-success" onClick={() => setIndex((prev) => prev + 1)}>Next</button>
                                    : ""}
                                <button className="pull-right btn btn-danger">Finish</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}