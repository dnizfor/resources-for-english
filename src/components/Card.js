import React from 'react'

import "./card.css"

export default function Card({data}) {
    return (
        <div>
            <div className="card my-2">
                <img src={data.image} className="card-img-top" alt="..."/>
                <div className ="card-body">
                <div className="card-title-area">
                <h5 className ="card-title">{data.title}</h5>
                </div>
                <div className ="card-text-area">
                <p className ="card-text">{data.description}</p>
                </div>
                <a  target="_blank" rel="noreferrer"  href={data.link}  className ="btn btn-primary card-button">Look!</a>
                </div>
            </div>

        </div>
    )
}
