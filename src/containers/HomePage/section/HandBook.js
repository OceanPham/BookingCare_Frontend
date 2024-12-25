import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class HandBook extends Component {

    render() {

        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Tìm kiếm</button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div> Hệ thống bệnh viện 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div> Hệ thống bệnh viện 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div> Hệ thống bệnh viện 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div> Hệ thống bệnh viện 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div> Hệ thống bệnh viện 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div> Hệ thống bệnh viện 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
