import React from 'react'

import Card from '../components/Card'

export default function Home() {
    return (
        <div>
            <div className='container mt-5'>

                <div className='row'>
                    <h5 className='fw-bold'>Words</h5>
                    <div className='col'>
                            <Card/>
                    </div>
                    <div className='col'>
                            <Card/>
                    </div>
                    <div className='col'>
                            <Card/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
