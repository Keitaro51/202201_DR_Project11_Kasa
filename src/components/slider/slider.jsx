import {useState} from "react";
import propTypes from "prop-types"

import chevron from "../../assets/chevron.svg";
import "./slider.css";

function Slider({ gallery }) {
    const [page, setPage] = useState(0)

    const nextSlide = () => {
        setPage(page < gallery.length - 1 ? page + 1 : 0);
    }
    
    const previousSlide = () => {
        setPage(page > 0 ? page - 1 : gallery.length - 1)
    }

    return (
        <section className="sliderContainer">
            {gallery.map((picture, index) => (
                <img key={index} src={picture} alt="" className= {"slider-item" + (page === index ? ' active' : "")} />
            ))}
            {gallery.length > 1 && <div className="slider-nav">
                <div className="nav-btn previous" onClick={previousSlide}>
                    <img src={chevron} alt="flèche précédente orientée vers la gauche"/>
                </div>
                <span className="pagination">{page + 1} / {gallery.length}</span>
                <div className="nav-btn next" onClick={nextSlide}>
                    <img src={chevron} alt="flèche suivante orientée vers la droite"/>
                </div>
            </div>}
        </section>
    );
}

Slider.propTypes = {
    gallery: propTypes.arrayOf(propTypes.string)
}

export default Slider;