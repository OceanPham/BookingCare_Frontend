import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.userEdit
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'user.password',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleInputChange = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {

        let validData = true
        let input = ['email', 'password', 'lastName', 'firstName', 'address']
        for (let i = 0; i < input.length; i++) {
            if (!this.state[input[i]]) {
                alert(' Missing value ' + input[i])
                validData = false
                break
            }
        }
        return validData
    }

    handleSubmit = () => {
        let validData = this.checkValidInput()
        if (validData) {
            this.props.editUser(this.state)
        }
    }

    render() {
        return (

            <Modal
                size='lg'
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className='modal-user-container'
            >
                <ModalHeader toggle={() => this.toggle()}>Modal Edit User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input disabled value={this.state.email} type='text' onChange={(event) => { this.handleInputChange(event, 'email') }}></input>
                        </div>

                        <div className='input-container'>
                            <label>Password</label>
                            <input disabled value={this.state.password} type='password' onChange={(event) => { this.handleInputChange(event, 'password') }}></input>
                        </div>


                        <div className='input-container'>
                            <label>First Name</label>
                            <input value={this.state.firstName} type='text' onChange={(event) => { this.handleInputChange(event, 'firstName') }}></input>
                        </div>

                        <div className='input-container'>
                            <label>Last Name</label>
                            <input value={this.state.lastName} type='text' onChange={(event) => { this.handleInputChange(event, 'lastName') }}></input>
                        </div>

                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input value={this.state.address} type='text' onChange={(event) => { this.handleInputChange(event, 'address') }}></input>
                        </div>


                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleSubmit()}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
