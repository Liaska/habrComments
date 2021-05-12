import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectUsers } from '../../redux/user/user.select';

import { fetchUsers } from '../../redux/user/userSlice';
import UserCard from '../../components/userCard/UserCard.component';

import {} from './UsersPage.styles';
import { AppDispatch, RootState } from '../../redux/store';

interface IUsersPageProps {
  users: TUsers[] | null;
  fetchUsers: Function;
}

export type TUsers = {
  email: string;
  displayName: string;
};

const UsersPage: React.FC<IUsersPageProps> = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <UserCard key={user.email} email={user.email} displayName={user.displayName}></UserCard>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    users: selectUsers(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
