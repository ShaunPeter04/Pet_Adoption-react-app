import React from 'react'
import NavigationBar from './NavigationBar'

const SearchPet = () => {
    return (
        <div>

            <NavigationBar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Pet ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchPet