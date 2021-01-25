import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faFlag, faArrowsAltV, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'


function Card({name, age, nationality, height, weight, photo}) {
    return(
        <div className="card player-card animate__animated animate__fadeIn">
            <div className="card-image">
                <img src={photo} />
            </div>
            <div className="card-content">
                <h3 className="text-center">{name}</h3>
                <div> <span className="icon-card"><FontAwesomeIcon icon={faBirthdayCake} /></span>  {age} </div>
                <div><span className="icon-card"><FontAwesomeIcon icon={faFlag} /> </span> {nationality}</div>
                <div><span className="icon-card"><FontAwesomeIcon icon={faArrowsAltV} /> </span> {height}</div>
                <div><span className="icon-card"><FontAwesomeIcon icon={faArrowsAltH} /> </span> {weight}</div>
            </div>
            
        </div>
    )
}

export default Card;