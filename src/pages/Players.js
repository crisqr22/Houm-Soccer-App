import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../components/card/Card';
import SearchForm from '../components/forms/search-form/SearchForm';
import Loader from '../components/loading/Loader';
import { COUNTRIES_AVALIABLE } from '../utils/constants/GlobalSettings';
import dataZeroImage from '../resources/search.svg';
import { $eventFilter, PlayerService } from '../services/PlayerService';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function Players({ t }) {

    const query = useQuery();

    const selectedCountry = query.get('country');

    const playerService = PlayerService();

    const [playerData, setPlayerData] = useState({
        players: [],
        isLoadingRequest: false
    });


    useEffect(() => {
        $eventFilter.subscribe( async (data) => {
            if(data) {
                setPlayerData({
                    isLoadingRequest: true,
                    players: []
                })
                const players = await playerService.filter(data);
                setPlayerData({
                    isLoadingRequest: false,
                    players
                })
            }       
        })        
    });


    return(
        <div className="search-dashboard-layout">
            
            { playerData.isLoadingRequest ? <Loader primaryClass="bg-loader-dashboard" animationClass="content-animation"  />: null }
            
             <div className="aside-navigation">
                <div className="aside-head">
                    <Link to={'/'}><img className="logo-nav" alt="Logo Houm" src={`${process.env.PUBLIC_URL}/logo-houm.png`} /></Link>
                </div>

                <SearchForm />


                <div className="aside-footer">
                    {
                        COUNTRIES_AVALIABLE.map((country, index) => {
                            const countryCode = country.countryCode.toLocaleLowerCase();
                            return <span key={index} onClick={() => window.location.href = `/players?country=${country.countryCode.toLowerCase()}`}>
                                        <img className={`flag-sm  ${selectedCountry === countryCode ? 'active': 'inactive'} `} src={country.icon} alt={'Spain'} />
                                    </span>
                        }) 
                    }  
                
                </div>
            </div>
            <div className="primary-container-dashboard">
                <div className="nav-bar-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1 className="primary-title">{t('PLAYER_TITLE')} 
                                {t(COUNTRIES_AVALIABLE.filter( country => country.countryCode.toLowerCase() === selectedCountry).shift().keyName)}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid">
                        <div>
                            <div className="col-xs-12">
                                {
                                    playerData.players && playerData.players.length === 0 ? (
                                        <div className="data-zero-info animate__animated animate__bounce">
                                            <img alt="Data zero" src={dataZeroImage}/>
                                            <p>{t('ASIDE_WELCOM_INFO')}</p>
                                        </div>
                                    ): (
                                        <div className="card-container animate__animated animate__bounce">
                                            <div className="card-render d-flex flex-wrap" >
                                                {
                                                    playerData.players.map( ({player}, index) => {
                                                    return <Card 
                                                        key={player.id}
                                                        photo={player.photo}
                                                        name={player.name} 
                                                        nationality={player.nationality} 
                                                        age={player.age} 
                                                        height={player.height} 
                                                        weight={player.weight} />
                                                    })
                                                }                                        
                                            </div>
                                        </div>
                                    )
                                }


                            </div>
                        </div>
                </div>
            </div>

        </div>

    )
};


export default Players;