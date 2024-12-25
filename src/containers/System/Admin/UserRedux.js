import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions/index'
import './UserRedux.scss'
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props)

        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: '',

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',

        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        // this.props.dispatch(actions.fetchGenderStart())
        // try {
        //     let res = await getAllCodeServices('gender')
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res?.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('check update', prevProps);
        if (prevProps.gendersRedux !== this.props.gendersRedux) {
            let arrGenders = this.props.gendersRedux
            this.setState({
                genderArr: this.props.gendersRedux,
                gender: arrGenders && arrGenders?.length > 0 ? arrGenders[0].key : ''
            })
        }

        if (prevProps.positionsRedux !== this.props.positionsRedux) {
            let arrPositions = this.props.positionsRedux
            this.setState({
                positionArr: this.props.positionsRedux,
                position: arrPositions && arrPositions?.length > 0 ? arrPositions[0].key : ''

            })
        }

        if (prevProps.rolesRedux !== this.props.rolesRedux) {
            let arrRoles = this.props.rolesRedux
            this.setState({
                roleArr: this.props.rolesRedux,
                role: arrRoles && arrRoles?.length > 0 ? arrRoles[0].key : ''
            })
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                ...this.state,
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: '',
                position: '',
                role: '',
                avatar: '',

            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0]
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImgUrl: objectUrl,
                avatar: file
            })
        }
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })

    }

    checkValidInput = () => {
        let isValid = true
        let fieldsRequire = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']
        for (let i = 0; i < fieldsRequire.length; i++) {
            if (!this.state[fieldsRequire[i]]) {
                isValid = false;
                alert('This input is required: ' + fieldsRequire[i])
                break
            }
        }

        return isValid
    }

    handleSaveUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === false) return null;

        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            role: this.state.role,
            position: this.state.position
        })

        this.props.fetchUserRedux()
    }


    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender

        let { email, password, firstName, lastName, phoneNumber, address, gender, role, position, avatar } = this.state

        return (
            <div className='user-redux-container'>
                <div className="title" >User redux</div>
                <div className="user-redux-body" >

                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='text-success fs-3 fw-bold my-3'> <FormattedMessage id='manage-user.add' /></p>
                            </div>

                            <div className='col-6'>
                                <label><FormattedMessage id='manage-user.email' /></label>
                                <input type='email' className='form-control'
                                    value={email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }} />
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.password' /></label>
                                <input type='password' className='form-control'
                                    value={password}
                                    onChange={(event) => { this.onChangeInput(event, 'password') }} />
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.first-name' /></label>
                                <input type='text' className='form-control'
                                    value={firstName}
                                    onChange={(event) => { this.onChangeInput(event, 'firstName') }} />
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.last-name' /></label>
                                <input type='text' className='form-control'
                                    value={lastName}
                                    onChange={(event) => { this.onChangeInput(event, 'lastName') }} />
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.phone-number' /></label>
                                <input type='text' className='form-control'
                                    value={phoneNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }} />
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.address' /></label>
                                <input type='text' className='form-control'
                                    value={address}
                                    onChange={(event) => { this.onChangeInput(event, 'address') }} />
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.gender' /></label>
                                {isLoadingGender === true && <span className='text-warning ps-3'>Loading</span>}

                                <select className='form-control'
                                    onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                >
                                    {
                                        genders && genders.length > 0 && genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item?.key}>
                                                    {language === LANGUAGES.VI ? item?.valueVi : item?.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.position' /></label>
                                <select className='form-control'
                                    onChange={(event) => { this.onChangeInput(event, 'position') }}
                                >
                                    {
                                        positions && positions.length > 0 && positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item?.key}>
                                                    {language === LANGUAGES.VI ? item?.valueVi : item?.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.role' /></label>
                                <select className='form-control'
                                    onChange={(event) => { this.onChangeInput(event, 'role') }}
                                >
                                    {
                                        roles && roles.length > 0 && roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item?.key}>
                                                    {language === LANGUAGES.VI ? item?.valueVi : item?.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className='col-6'>
                                <label> <FormattedMessage id='manage-user.image' /></label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden
                                        onChange={(event) => { this.handleOnChangeImage(event) }}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'>Upload <i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImgUrl})` }}>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 my-3'>
                                <button className='btn btn-primary' onClick={() => { this.handleSaveUser() }}><FormattedMessage id='manage-user.save' /></button>
                            </div>

                            <div className='col-12 mb-5'>
                                <TableManageUser />

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        gendersRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        positionsRedux: state.admin.positions,
        rolesRedux: state.admin.roles,
        listUsers: state.admin.users

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
