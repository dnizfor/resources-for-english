import React, { useEffect } from 'react'

export default function HomeHeader() {

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.setAttribute("charset", "utf-8")
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
        
    }, [])

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center text-center">
                        <img className="img-fluid w-50" src="https://cdn-icons-png.flaticon.com/512/2628/2628757.png" alt="" />

                        <div className="mt-5 py-2">

                            <div>This is a list of free resources about learning english.</div>
                            <div>You can contribute to the project adding more resources.</div>

                            <div className="my-2 "><a className="btn text-primary" href="https://github.com/dnizfor/resources-for-english">This project is open source.</a></div>

                            <div >
                                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Learn Free English ! Most common words , series ,free books and more www.resourcesforenglish.github.com" data-show-count="false" data-size="large">Tweet</a>
                            </div>
                           
                        </div>


                    </div>

                </div>
            </div>


            <div className="container my-3">
                <div className="row">
                    <div className="col">
                    <div className="">
                            <iframe title="substack" src="https://englishlearner.substack.com/embed" className="w-100" height="300" style={{border:"1px solid #EEE", background:"white"}} frameborder="0" scrolling="no"></iframe>
                            </div>

                    </div>

                </div>
                
            </div>

        </div>
        

        
    )
}