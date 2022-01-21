import banner from '../../assets/home_banner.png'
import './homeBanner.css'

function HomeBanner(){
    return(
        <div className="bannerContainer">
            <figure>
                <img src={ banner } alt="vue de la mer et des falaises"/>
                <div className="overlay"></div>
                <figcaption>Chez vous, <br/>partout et ailleurs</figcaption>
            </figure>
        </div>
    )
}

export default HomeBanner