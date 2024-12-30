import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions/index'

class TableManageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user?.id)
    }

    handleEditUser = (item) => {
        this.props.handleEditUSer(item)
    }

    render() {
        let listUsers = this.state.usersRedux
        // console.log('action: ', this.props.action);
        return (
            <table id='TableManageUser'>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
                {listUsers && listUsers?.length > 0 && listUsers.map((item, index) => {
                    return (
                        <tr key={item?.id}>
                            <td>{item?.email}</td>
                            <td>{item?.firstName}</td>
                            <td>{item?.lastName}</td>
                            <td>{item?.address}</td>
                            <td>{item?.gender}</td>
                            <td>{item?.roleId}</td>
                            <td>{item?.positionId}</td>
                            <td>
                                <button onClick={() => this.handleEditUser(item)} className='w-25 btn btn-warning'> <i className='fas fa-pencil-alt'></i></button>
                                <button onClick={() => this.handleDeleteUser(item)} className='w-25 ms-1 btn btn-danger'> <i className='fas fa-trash'></i></button>
                            </td>
                        </tr>
                    )
                })}

            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteNewUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
