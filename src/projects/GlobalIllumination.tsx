import sample_400 from "../images/400samples.bmp"
import sample_100 from "../images/16samples.bmp"
import sample_1 from "../images/1sample.bmp"
import report from "../reports/montecarlo.pdf"

const GlobalIllumination: React.FC<{}> = () => {
    return(
        <div>
            <h1>ADVANCED GLOBAL ILLUMINATION RENDERING ENGINE</h1>
            <p>
                No, these images are <strong><u>not</u></strong> made using 3d modelling software.
                They are the product of a particularly interesting course:
                "TNCG15 - Advanced Global Illumination and Rendering"
                which allowed me and my friend Tilda to deep dive into
                the world of raytracing.
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
            <h3>
                The images show some results obtained when varying the amount of sampling
                rays per pixel used by the Monte Carlo raytracing engine.
            </h3>
            <p>
                The implementation is a total from scratch (except for one library which
                was used to produce a bitmap image format) implementation of a Monte Carlo
                raytracing rendering engine written in C++. The solution handles different
                material properties as well as light sources and mirror surfaces!
            </p>
            <a href={report} target="_blank" rel="noreferrer">
                Click here to read the full report
            </a>
        </div>
    )
}

export default GlobalIllumination;