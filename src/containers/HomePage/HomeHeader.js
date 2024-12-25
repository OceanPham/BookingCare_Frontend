import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';


class HomeHeader extends Component {

    changeLanguage = (langue) => {
        this.props.changeLanguageAppRedux(langue)
    }

    render() {
        let language = this.props.language
        return (

            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>

                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='logo-image'></div>
                        </div>

                        <div className='center-content d-flex align-items-center justify-content-between'>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.specialty" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.findDoctorBySpecialty" /></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.medicalFacility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.chooseHospital" /></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.chooseGoodDoctor" /></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.healthPackage" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.generalHealthCheck" /></div>
                            </div>

                        </div>

                        <div className='right-content d-flex align-items-center justify-content-center'>
                            <div className='support'>
                                <i className="fas fa-question-circle me-1"></i>
                                <FormattedMessage id="homeHeader.support" />
                            </div>

                            <div className={`language-vn ${language === LANGUAGES.VI && 'active'}`} onClick={() => this.changeLanguage(LANGUAGES.VI)}> <span>VN</span> </div>
                            <div className={`language-en ${language === LANGUAGES.EN && 'active'}`} onClick={() => this.changeLanguage(LANGUAGES.EN)}> <span>EN</span> </div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>
                            <FormattedMessage id="banner.platform" />
                        </div>
                        <div className='title2'>
                            <FormattedMessage id="banner.comprehensiveCare" />
                        </div>
                        {/* <div className='search'>
                            <i className='fas fa-search'></i>
                            <input
                                type='text'
                                placeholder={<FormattedMessage id="banner.searchPlaceholder" />}
                            />
                        </div> */}
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <FormattedMessage
                                id="banner.searchPlaceholder"
                                defaultMessage="Input name to search"
                            >
                                {placeholder => (
                                    <input
                                        type='text'
                                        placeholder={placeholder}
                                    />
                                )}
                            </FormattedMessage>
                        </div>

                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='far fa-hospital'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.specializedExamination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-mobile-alt'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.remoteExamination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-procedures'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.generalExamination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-flask'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.medicalTesting" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-user-md'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.mentalHealth" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className='fas fa-briefcase-medical'></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.dentalExamination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
