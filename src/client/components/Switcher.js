import React from 'react';
import { bindActionCreators } from 'redux';
import { actionUpdateStore } from '../redux/actions';
import { connect } from 'react-redux';

function Switcher({ items, store, updateStore }) {
  const chooseActive = item => () => {
    updateStore({ currentTab: item });
  };

  return (
    <div className="switcher">
      {items.map(item => {
        return (
          <div
            className={`tab${store.currentTab === item ? ' active' : ''}`}
            onClick={chooseActive(item)}
            key={item}
          >
            All {item}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = store => {
  return { store };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStore: bindActionCreators(actionUpdateStore, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
