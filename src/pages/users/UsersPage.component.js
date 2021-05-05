import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectUsers } from '../../redux/user/user.select';

import { fetchUsers } from '../../redux/user/userSlice';
import UserCard from '../../components/userCard/UserCard.component';

import {} from './UsersPage.styles';

const UsersPage = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  return (
    <div>s
      {users.map((user) => {
          console.log(user)
          return (<UserCard key={user.email} email={user.email} displayName={user.displayName}></UserCard>);
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state, state.users),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
