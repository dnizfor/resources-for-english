import React from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Card from '../components/Card'
import HomeHeader from "../components/HomeHeader"
import Navbar from "../components/Navbar";

import getData from "../modules/getDatasByCategory"

export default function Home() {

    const categories = useSelector((state) => state.categories.value)

    const resourcesData = useSelector((state) => state.resources.value)



    return (
        <div>
            <Navbar />

            <div className='container mt-5'>

                <HomeHeader />


                {/* Print Datas */}

                {
                    categories.map(({ title }, index) => (

                        <div key={index} className='row mt-5 mb-3'>

                            <div className="col-12 d-flex justify-content-between align-items-cenet ">

                                <div>
                                <h5 className='fw-bold '>{title}</h5>

                                </div>

                                <div>

                                <Link className='fw-bold nav-link text-dark' to="/resources">See All Resources >></Link>

                                </div>
                         
     


                            </div>

                            


                            {
                                getData(resourcesData, title).map((data, index) => (


                                    <div key={index} className='col'>
                                        <Card data={data} />
                                        {console.log(data)}
                                    </div>

                                ))
                            }

                        </div>

                    ))
                }

            </div>
        </div>

    )
}
