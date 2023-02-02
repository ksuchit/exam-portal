import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"


export default function Questions() {

    const navigate = useNavigate();
    const [searchParams,] = useSearchParams();
    const [data, setData] = useState();
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [multiAns, setMultiAns] = useState([]);
    const [currectAns, setCurrectAns] = useState([]);
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('tests')).find((item) => item._id === searchParams.get('id')))
        setData(JSON.parse(localStorage.getItem('tests')).find((item) => item._id === searchParams.get('id')))
        JSON.parse(localStorage.getItem('tests')).find((item) => item._id === searchParams.get('id')).questions.map((item)=>setCurrectAns((prev)=>[...prev,item.correctOptionIndex]))
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('answers',JSON.stringify(answers))
    // }, [answers])
    
    console.log(data)
    console.log(answers)
    console.log(currectAns)

    const [tempAns, setTempAns] = useState([]);
    const oneAnswerSelected = (e) => {
        console.log(e.target.value)
        setTempAns(e.target.value)
    }
    const manyAnswerSelected = (e) => {
        console.log(e.target.value)
        if (multiAns.includes(e.target.value)) {
            const updatedArr = multiAns.filter((data) => data !== e.target.value)
            setMultiAns(updatedArr)
            setTempAns(updatedArr)
        } else {
            setMultiAns((prev) => [...prev, e.target.value])
            setTempAns((prev) => [...prev, e.target.value])
        }
        
        
    }
    console.log(multiAns)
    return (
        <div className="container">
            <div className="row">
            <h1 data-testid='heading'>My Interview Portal</h1>
                <hr />
                {data &&
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">{data?.name}</div>
                            <div className="panel-body d-flex flex-column align-items-start">
                                <h3>{index + 1}.{data?.questions[index]?.questionText}</h3>
                                {data?.questions[index].options.map((item, i) => {
                                    return <div key={i}>
                                        {data?.questions[index].type === "Multiple-Response" ?
                                            <div>
                                                <input class="form-check-input mx-2" type="checkbox" value={i} id="flexCheckDefault"
                                                    onChange={manyAnswerSelected} 
                                                />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    {item}
                                                </label>
                                            </div>
                                            :
                                            <>
                                                <input className="form-check-input mx-2" type="radio" name="flexRadioDefault" value={i}
                                                    onChange={oneAnswerSelected} checked={false}
                                                />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    {item}
                                                </label></>
                                        }
                                    </div>
                                })}
                            </div>
                            <div className="panel-footer">
                                {index !== 0 ?
                                    <button className="btn btn-success mx-2" onClick={() => {
                                        setIndex((prev) => prev - 1)
                                        setAnswers((prev)=>[...prev,tempAns])
                                    }}>Previous</button>
                                    : ""}
                                {index < data.questions.length-1?
                                    <button className="btn btn-success" onClick={() => {
                                        setIndex((prev) => prev + 1)
                                        setAnswers((prev)=>[...prev,tempAns])
                                    }}>Next</button>
                                    : ""}
                                {/* <button className="pull-right btn btn-danger"
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate('/finish')
                                        },2000)
                                        localStorage.setItem('answers',JSON.stringify(answers))
                                        localStorage.setItem('currectAns',JSON.stringify(currectAns))
                                    }}>Go to Result</button> */}
                                <button className="pull-right btn btn-danger mx-2"
                                    onClick={() => {
                                        setAnswers((prev) => [...prev, tempAns])
                                        localStorage.setItem('answers',JSON.stringify([...answers,tempAns]))
                                        localStorage.setItem('currectAns',JSON.stringify(currectAns))
                                        setTimeout(() => {
                                            navigate('/finish')
                                        },2000)
                                    }}>Finish</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}