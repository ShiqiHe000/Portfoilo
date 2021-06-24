import React, { useEffect } from "react";
import FullStackProjects from "./FullStackProjects";
import { titleAnimation } from "./Animations";
import OtherProjects from "./OtherProjects";

const Projects = () => {
    useEffect(() => {
        titleAnimation("[data-project-titles]");
    }, []);

    return (
        <div>
            <div className="container">
                <h3
                    id="projects"
                    className="secondaryTitle"
                    data-project-titles>
                    Projects
                </h3>
                <h2 className="primaryTitle" data-project-titles>
                    Recent works
                </h2>
            </div>
            <FullStackProjects />
            <OtherProjects /> 
        </div>
    );
};

export default Projects;
