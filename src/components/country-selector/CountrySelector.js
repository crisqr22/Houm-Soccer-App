import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';


function CountrySelector({icon, countryCode, keyName, index}) {
    const { t } = useTranslation();
    return(
        <Link 
            key={index} className="box-child-select"
            to={`/players?country=${countryCode.toLowerCase()}`}>
                <li className="d-flex align-items-center">
                    <img className="flag-sm" src={icon} alt={countryCode} />
                    <span>{t(keyName)} </span>
                </li>
        </Link>
    )
}


export default CountrySelector;