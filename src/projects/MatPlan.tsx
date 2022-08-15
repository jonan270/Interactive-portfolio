import targetAudienceReport from "../reports/ux_target_audience.pdf"
import evaluationReport from "../reports/ux_evaluation.pdf"

import overview from "../images/ux_overview.png"

const MatPlan: React.FC<{}> = () => {
    const prototypeLink: string = 
        "https://www.figma.com/proto/CY5OnzYy8s8xj8TsBvegxg/Foodrunner?page-id=39%3A2&node-id=128%3A926&viewport=782%2C518%2C1&scaling=scale-down&starting-point-node-id=128%3A926&show-proto-sidebar=1"

    return(
        <div>
            <h1>MATPLAN - A PURE UX PROJECT</h1>
            <p>
                I believe knowledge about UX is very useful skill for any type of developer. This is
                why I decided to read the most in depth UX course available on our program plan:
                "TNM100 - Structural Methods for User Experience". Together with my group members
                Elin and Miranda we set out to develop a UX prototype that would serve as a kind of
                "pricerunner for groceries".

            </p>
            <div className="showcaseRow">
                <div className="showcaseItem">
                    <img src={overview}
                    alt="ux_img1"
                    className="showcaseImage"
                    />
                </div>
            </div>
            <p>
                The work included making a detailed target audience analysis and
                evaluating the prototype by survey conducting and interviews. Although
                not necessary, we also decided to make the prototype interactive
                using the prototyping tool Figma. Try it out using the link below!
            </p>
            <a href={prototypeLink} target="_blank" rel="noreferrer">
                Live interactive prototype
            </a>
            <br />
            <a href={targetAudienceReport} target="_blank" rel="noreferrer">
                Read about target audience and prototype development
            </a>
            <br />
            <a href={evaluationReport} target="_blank" rel="noreferrer">
                Read about prototype evaluation
            </a>
        </div>
    )
}

export default MatPlan;