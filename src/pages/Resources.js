import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getData from "../modules/getDatasByCategory"
import categories from "../data/categoriesData"
import resourcesData from "../data/resourcesData"
import Card from '../components/Card'

import "./resources.css"

export default function Resources() {

    const [category, setCategory] = useState('')

    function sideNavButton(){
        let size = document.getElementById("sidenav").style.width
        

        if(size === "0px"){
            document.getElementById("sidenav").style.width = "200px"
         
        }else{
            document.getElementById("sidenav").style.width = 0
        }
  
        
    }

    return (
        <div>

            {/* Top Navbar */}
            <nav className="nav d-flex justify-content-center align-items-center bg-light">
                
                    <Link className="navbar-brand text-dark  " to="/"><b>Resources For English</b></Link>
              
                <button onClick={()=>sideNavButton()} className="sidenav-button btn"><ion-icon size="large" name="grid-outline"></ion-icon></button>
            </nav>

            {/* Side Navbar And Content*/}

            <div className="container-fluid">
                <div className="row page">
                    <div id="sidenav" className="sidenav col-2 bg-light">
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

                    <div className="col ">

                        <div className="row ">

                            {
                                getData(resourcesData, category,true).map((data, index) => (


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
