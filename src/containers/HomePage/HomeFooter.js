import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>

                <p>&copy; 2025 OceanPham.com <a target='_blank' href='https://www.youtube.com/watch?v=147SkAVXEqM&list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI&index=62' rel="noreferrer">View detail now</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
