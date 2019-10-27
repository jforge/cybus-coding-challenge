import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from '../components';
import { LocalStorage } from '../storage';
import { bindActionCreators } from 'redux';
import { actionResetStore } from '../redux/actions';
import { connect } from 'react-redux';
import logotype from '../res/logotype.svg';

function Navigation({ store, resetStore, history }) {
  const isLoggedIn = store.isLoggedIn && LocalStorage.getItem('isLoggedIn');

  const logout = e => {
    e.preventDefault();
    LocalStorage.reset();
    resetStore();
    history.push('/');
  };

  const login = e => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <div className="navigation">
      <div className="logotype">
        <img
          src={logotype}
          onClick={() => {
            history.push('/');
          }}
        />
        <p>Cybedock</p>
      </div>
      {isLoggedIn ? (
        <Button onClick={logout} text="Logout" />
      ) : (
        <Button onClick={login} text="Login" />
      )}
    </div>
  );
}

const mapStateToProps = store => {
  return { store };
};

const mapDispatchToProps = dispatch => {
  return {
    resetStore: bindActionCreators(actionResetStore, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));
