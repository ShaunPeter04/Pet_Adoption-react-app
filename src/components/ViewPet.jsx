import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewPet = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(

            (response) => {

                changeData(response.data)
            }

        ).catch()
    }

    useEffect(

        () => {
            fetchData()
        }
    )


    return (

        <div>

            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {data.map(

                                (value, index) => {

                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div className="card h-100">
                                                {/* Aspect ratio wrapper forces identical heights, object-fit-cover stops stretching */}
                                                <div className="ratio ratio-4x3">
                                                    <img
                                                        src={value.image}
                                                        className="card-img-top object-fit-cover"
                                                        alt="..."
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.petName}</h5>
                                                    <p className="card-text">{value.species}</p>
                                                    <p className="card-text">{value.breed}</p>
                                                    <p className="card-text">{value.age}</p>
                                                    <p className="card-text">{value.gender}</p>
                                                    <p className="card-text">{value.adoptionFee}</p>

                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewPet