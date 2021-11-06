import React from 'react'

import { useSelector } from 'react-redux'

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

                        <div key={index} className='row'>

                            <h5 className='fw-bold mt-5 mb-3'>{title}</h5>


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
