import sample_400 from "../images/400samples.bmp"
import sample_100 from "../images/16samples.bmp"
import sample_1 from "../images/1sample.bmp"
import report from "../reports/montecarlo.pdf"

const GlobalIllumination: React.FC<{}> = () => {
    return(
        <div>
            <h1>Advanced Global Illumination Rendering Engine</h1>
            <p>
                A particularly interesting course: "TNCG15 - Advanced Global Illumination
                and Rendering" allowed me and my friend Tilda to deep dive into the world
                of raytracing.
            </p>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={sample_1}
                    alt="global_illumination_img1"
                    className="showcaseImage"
                    />
                </div>
                <div className="showcaseItem">
                    <img src={sample_100}
                    alt="global_illumination_img1"
                    className="showcaseImage"
                    />
                </div>
                <div className="showcaseItem">
                    <img src={sample_400}
                    alt="global_illumination_img1"
                    className="showcaseImage"
                    />
                </div>
            </div>
            <h2>
                The images show some results obtained when varying the amount of sampling
                rays per pixel used by the Monte Carlo raytracing engine.
            </h2>
            <p>
                The implementation is a total from scratch (except for one library used to
                produce a bitmap image format) implementation of a Monte Carlo raytracing
                rendering engine written in C++. The solution handles different material
                types aswell as light sources and mirror surfaces! Other than the pretty
                results presented above, the project also provided some hilarious bugged
                out images.
            </p>
            <a href={report}>Click here to read the full report</a>
        </div>
    )
}

export default GlobalIllumination;