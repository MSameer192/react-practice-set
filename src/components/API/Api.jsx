import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Api() {


    // const [toDoList, setToDoList] = useState('');
    // const [list, setList] = useState([]);
    


    // const addFunc = () => {

    //     if (toDoList) {
    //         setList([...list, toDoList])
    //     } else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }

    //     setToDoList("");

    // }

    // const OnChange = (e) => {
    //     setToDoList(e.target.value);

    // };

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // };

    const [trainList, setTrainList] = useState([]);

    useEffect(() => {

        const URL = 'https://api.pakraillive.com/api/Train/GetTrains'

        axios.get(URL).then(response=>{
            if(response.data.Response) {
                setTrainList(response.data.Response)
            }
        }).catch(error=>{console.log(error);})

        







        // axios.get(URL)
        //     .then(response => {
        //         console.log(response.data);
        //         if (response.data.Response) {
        //             const trainList = response.data.Response
        //             const trainArrayList = trainList.map((trainName) => { return trainName.TrainName })
        //             setList(trainArrayList)
        //         }
        //     }).catch(error => { console.log(error); })

    }, []);



    return (
        <div>
            <div className='container text-center mt-5 pt-5' >
                <p style={{marginBottom: '10px'}}>Todo list</p>

                {/* <form className="my-5 form" onSubmit={onSubmit}>

                    <div className="d-flex justify-content-center my-row">

                        <input type="text" value={toDoList} onChange={OnChange} className='py-2 ps-4 my-input mx-2' placeholder='Enter your task' />

                        <button type="submit" className="my-button"
                            onClick={addFunc}>Add
                        </button>
                    </div>
                </form>         

                    <ul>
                    
                        {
                            list.map((item) => {
                                return (
                                    <>
                                        <li className='input'>   {item}  </li>
                                    </>
                                )
                            }
                            )
                        }
                    </ul> */}
        
                    
                <ul>    
                    {
                        trainList.map(train=>{

                         
                            return (
                                <>
                                <li> <p style={{marginBottom: '10px'}}>{`${train.TrainName} --- ${train.TrainNameUR}`}</p></li>
                                </>
                                    
                            )
                        })
                    }    
                </ul>



            </div>




        </div>
    );
}
