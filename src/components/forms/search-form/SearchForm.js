import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { LEAGUES } from '../../../utils/constants/GlobalSettings';
import * as Yup from "yup"
import CustomError from '../error/CustomError';
import { setEventFilter } from '../../../services/PlayerService';
import { useTranslation } from 'react-i18next';

const SearchSchema = Yup.object().shape({
    search: Yup.string()
      .min(4, 'Ops la búsqueda está muy corta deben ser mínimo 4 caracteres')
});


function useQuery() {
    return new URLSearchParams(useLocation().search);
}



function SearchForm() {

    const query = useQuery();

    const country = query.get('country');

    const leagues = LEAGUES[country.toUpperCase()];

    const { t } = useTranslation();

    return (
        <div className="search-form">
            <Formik
                initialValues={{
                    search: '',
                    season: '2020',
                    league: leagues[0].id
                }}
                onSubmit={async (values, {resetForm}) => {    
                    console.log("leagues",leagues);                         
                    setEventFilter(values);
                    resetForm({
                        search: '',
                        season: '2020',
                        league: leagues[0].id
                    });
                }} 
                validationSchema={SearchSchema}               
            >
                {({ errors, touched }) => (
                        <Form>
                            <div className={`form-group animate__animated  ${errors.search && touched.search ? 'animate__swing': ''}`}>
                                <label className={'label-light'}> {t('SEARCH_LABEL')} </label>
                                <Field name="search" placeholder={t('SEARCH_PLACEHOLDER')} className={`form-control custom-input ${errors.search && touched.search ? 'is-invalid': ''} `} />
                                <ErrorMessage component={CustomError} name="search" />
                            
                            </div>
                            <div className="form-group">
                                <label className="label-light" > {t('SEASON_LABEL')} </label>
                                <Field className="form-control custom-input" name="season" as="select">
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                </Field>
                            </div> 
                            <div className="form-group">
                                <label className="label-light" >{t('LEAGUE_LABEL')}</label>
                                <Field as="select" name="league"  className="form-control custom-input" >
                                    {
                                        leagues.map((league, index) => {
                                            return <option value={league.id} key={index}>{league.name}</option>
                                        })
                                    }
                                    
                                </Field>
                            </div>
                            <button type="submit" className="btn btn-primary custom-button block brand-primary mt-4"> {t('ACTION_SEARCH_BUTTON')} </button>                                                                
                        </Form>
                )}
            </Formik>
        </div>
    )
}



export default SearchForm;