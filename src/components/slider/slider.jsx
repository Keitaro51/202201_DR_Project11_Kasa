import '../slider/slider.css'
import Logements from "../../data/logements.json" /*importation temporaire*/
/*
{gallery}
{gallery.map((picture, index) => (
    <img key={index} src={picture} alt=""/>        
))}
*/
function Slider(){
    return(
        <>
            <section className="sliderContainer">
                <div>PREVIOUS</div>
                <img src={Logements.data[0].pictures[0]} alt=""/>
                <img src={Logements.data[0].pictures[1]} alt=""/>
                <img src={Logements.data[0].pictures[2]} alt=""/>
                <div>NEXT</div>
                <div className="pagination">X/2</div>
            </section>
        </>
    )
}

export default Slider