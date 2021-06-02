import React, {useEffect} from "react";
import FullStackProjects from "./FullStackProjects";
import { titleAnimation } from "./Animations";


const Projects = () => {
    useEffect(() => {
        titleAnimation("[data-project-titles]");
    }, [])

    return (
        <div>
            <div className="container">
                <a id="projects"></a>
                <h3 className="secondaryTitle" data-project-titles>Projects</h3>
                <h2 className="primaryTitle" data-project-titles>Full Stack</h2>
            </div>
            <FullStackProjects />
        </div>
    );
};

export default Projects;
