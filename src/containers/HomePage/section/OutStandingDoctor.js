import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Tìm kiếm</button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position w-100 text-center'>
                                        <div> Bác sĩ 1</div>
                                        <div> Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position w-100 text-center'>
                                        <div> Bác sĩ 2</div>
                                        <div> Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position w-100 text-center'>
                                        <div> Bác sĩ 3</div>
                                        <div> Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position w-100 text-center'>
                                        <div> Bác sĩ 4</div>
                                        <div> Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-customize'>
                                <div className='customize-border'>

                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position w-100 text-center'>
                                        <div> Bác sĩ 5</div>
                                        <div> Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>



                        </Slider>

                    </div>

                </div>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
