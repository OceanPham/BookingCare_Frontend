import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { createNewUserService, deleteUserService, editUserService, getAllUsers } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModal: false,
            isOpenEditModal: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllDataUser()
    }

    getAllDataUser = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenEditModal: !this.state.isOpenEditModal
        })
    }

    createNewUser = async (data) => {
        let response = await createNewUserService(data)
        if (response?.errCode && response.errCode !== 0) {
            alert(response?.message)
        } else {
            alert('Create new user successfully! ')
            this.setState({
                isOpenModal: false
            })
            await this.getAllDataUser()

        }
    }

    handleDeleteUser = async (user) => {
        console.log(user);
        let response = await deleteUserService(user?.id)
        if (response?.errCode && response.errCode !== 0) {
            alert(response?.message)
        } else {
            alert('Delete user successfully! ')
            await this.getAllDataUser()
        }
    }


    handleEditUser = (user) => {
        this.setState({
            isOpenEditModal: true,
            userEdit: user
        })
    }

    editUser = async (data) => {
        let response = await editUserService(data)
        if (response?.errCode && response.errCode !== 0) {
            alert(response?.message)
        } else {
            alert('Edit user successfully! ')
            this.setState({
                isOpenEditModal: false
            })
            await this.getAllDataUser()

        }
    }


    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className='users-container'>
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />

                {this.state.isOpenEditModal &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditModal}
                        toggleFromParent={this.toggleUserEditModal}
                        userEdit={this.state.userEdit}
                        editUser={this.editUser}
                    />
                }

                <div className="title text-center">Manage users</div>

                <div className='btn btn-info mx-2 px-3 text-white text-center'
                    onClick={() => this.handleAddNewUser()}><i className='fas fa-plus'> Add New</i></div>
                <div key={Math.floor(Math.random() * 1000)} className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tr key={Math.floor(Math.random() * 1000)}>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.length > 0 && arrUsers.map((item, index) => {
                            return <>
                                <tr key={item.id}>
                                    <td>{item?.email}</td>
                                    <td>{item?.firstName}</td>
                                    <td>{item?.lastName}</td>
                                    <td>{item?.address}</td>
                                    <td>
                                        <button onClick={() => this.handleEditUser(item)} className='w-25 btn btn-warning'> <i className='fas fa-pencil-alt'></i></button>
                                        <button onClick={() => this.handleDeleteUser(item)} className='w-25 ms-1 btn btn-danger'> <i className='fas fa-trash'></i></button>
                                    </td>
                                </tr>
                            </>
                        })}


                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
