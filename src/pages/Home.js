import CountrySelector from "../components/country-selector/CountrySelector";
import { COUNTRIES_AVALIABLE } from '../utils/constants/GlobalSettings';



function Home() {

    return(
        <div className="primary-layout d-flex justify-content-center align-items-center">
            <div className="item-selector-container animate__animated animate__fadeInDown">
                <img className="logo-selector-container" src={`${process.env.PUBLIC_URL}/logo-houm.png`} />
                <div className="panel-container shadow-3" >
                    <ul className="list-none">
                        {
                            COUNTRIES_AVALIABLE.map( (country, index) => {
                                return <CountrySelector
                                                index={index}
                                                countryCode={country.countryCode}
                                                icon={country.icon}
                                                keyName={country.keyName}                                             
                                                />
                                        
                            })
                        }
                    </ul>
                </div>            
            </div>            

        </div>
    )
};


export default Home;