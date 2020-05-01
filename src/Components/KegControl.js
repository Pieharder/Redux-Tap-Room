import React from 'react';
import KegList from './KegStock/KegList';
import NewKegForm from './KegStock/NewKegForm';
import KegDetail from './KegStock/KegDetail'
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }


  
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }


  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, description, brewery, price, quantity, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      description: description,
      brewery: brewery,
      price: price,
      quantity: quantity,
      id: id 
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }
  
  
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, description, brewery, price, quantity, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      description: description,
      brewery: brewery,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }
  
  // handlePourPint = (id) => {
  //   const { dispatch } = props;
  //   const currentlySelectedKeg = Object.values(props.masterKegList).filter(keg => keg.id === id)[0];
  //   const action = {
  //     type: 'ADD_KEG',
  //     id: id,
  //     quantity: currentlySelectedKeg.quantity - 1,
  //     name: currentlySelectedKeg.name,
  //     description: currentlySelectedKeg.description
  //   }
  //   dispatch(action);
  // }

  handlePourPint = (item) => {
    const newKegItem = {
      name: item.name,
      description: item.description,
      quantity: parseInt(item.quantity) - 1,
      id: item.id
    }
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== item.id).concat(newKegItem);
    this.setState({masterKegList: newMasterKegList});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
  
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} 
      onKegSelection={this.handleChangingSelectedKeg}
      onClickingDelete={this.handleDeletingKeg}
      onClickingPourPint={this.handlePourPint}/>;
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        <div style={style1}>
          {currentlyVisibleState}
        </div>
        <br />
        <div style={style2}>
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>  
    );
  }
  
}

const style1 = {

}

const style2 = {

}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;