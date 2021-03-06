import React, { useEffect } from "react";
import { breakLarge } from "../variables/variables";
import { projectsAnimation } from "./Animations";
import BookShelf from "./BookShelf";
import ShoppingList from "./ShoppingList";
import PyramidLanding from "./PyramidLanding";
import SoapShop from "./SoapShop";

const FullStackProjects = () => {
    useEffect(() => {
        let screenWidth = window.matchMedia(
            `(min-width: ${breakLarge.toString()}px)`
        );
        const projectCards = document.querySelectorAll("[data-project-card]");

        projectsAnimation(projectCards, screenWidth);
        screenWidth.addEventListener("change", () => {
            projectsAnimation(projectCards, screenWidth);
        });
    }, []);

    return (
        <>
            <ShoppingList />
            <SoapShop /> 
            <BookShelf />
            <PyramidLanding /> 
        </>
    );
};

export default FullStackProjects;
