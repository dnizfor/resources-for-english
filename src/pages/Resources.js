import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getData from "../modules/getDatasByCategory"
import categories from "../data/categoriesData"
import resourcesData from "../data/resourcesData"
import Card from '../components/Card'

export default function Resources() {

    const [category, setCategory] = useState('')

    return (
        <div>

            {/* Top Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand " to="/"><b>Resources For English</b></Link>
                </div>
            </nav>

            {/* Side Navbar And Content*/}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 bg-light">
                        <ul className="navbar-nav">

                            <li className="m-3 btn" onClick={() => { setCategory('') }}>All Resources</li>

                            {
                                categories.map(((data, index) => (

                                    <li className="m-3 btn" onClick={() => { setCategory(data.title) }} key={index}>{data.title}</li>

                                )))
                            }
                        </ul>

                    </div>

                    {/*content */}

                    <div className="col-10 ">

                        <div className="row ">

                            {
                                getData(resourcesData, category).map((data, index) => (


                                    <div key={index} className='col mt-2'>
                                        <Card data={data} />
                                    </div>

                                ))
                            }

                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}
