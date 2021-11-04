import React from 'react'


export default function HomeHeader() {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex flex-column align-items-center text-center">
                        <img className="img-fluid w-50" src="https://cdn-icons-png.flaticon.com/512/2628/2628757.png" alt="" />

                        <div className="mt-5 py-2">

                            <div>This is a list of free resources about learning english.</div>
                            <div>You can contribute to the project adding more resources</div>

                            <div className="my-2 "><a className="btn text-primary" href="https://github.com/dnizfor/resources-for-english">This project is open source.</a></div>

                            <div >
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button btn btn-primary me-2" data-text="Learn Free English ! Most common words , series ,free books and more " data-hashtags="learnenglish" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button btn btn-primary ms-2" data-text="Learn Free English ! Most common words , series ,free books and more " data-hashtags="learnenglish" data-show-count="false">Linkedn</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                        </div>


                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>

        </div>
    )
}
