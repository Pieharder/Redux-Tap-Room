import React from 'react';
import KegList from './KegStock/KegList';
import NewKegForm from './KegStock/NewKegForm';
import KegDetail from './KegStock/KegDetail'
import EditKegForm from "./KegStock/EditKegForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.props.selectedKeg !== null) {   
      const { dispatch } = this.props;
      const action = {
        type: 'CHANGE_TO_NULL'
      }   
      dispatch(action);
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }
  
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({editing: false});
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
    const { dispatch } = this.props;
    const action = {
      type: 'CHANGE_SELECTED',
      name: selectedKeg.name,
      description: selectedKeg.description,
      brewery: selectedKeg.brewery,
      price: selectedKeg.price,
      quantity: selectedKeg.quantity,
      id: selectedKeg.id
    }
    dispatch(action);
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
    const actionTwo = {
      type: 'CHANGE_TO_NULL'
    }
    dispatch(actionTwo);
  }

  
  handlePourPint = (id) => {
    const { dispatch } = this.props;
    const currentlySelectedKeg = Object.values(this.props.masterKegList).filter(keg => keg.id === id)[0];
    const action = {
      type: 'ADD_KEG',
      quantity: currentlySelectedKeg.quantity - 1,
      name: currentlySelectedKeg.name,
      description: currentlySelectedKeg.description,
      id: id
    }
    dispatch(action);
  }

  // handlePourPint = (item) => {
  //   const newKegItem = {
  //     name: item.name,
  //     description: item.description,
  //     quantity: parseInt(item.quantity) - 1,
  //     id: item.id
  //   }
  //   const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== item.id).concat(newKegItem);
  //   this.setState({masterKegList: newMasterKegList});
  // }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log(this.props.editing);
    if(this.props.editing) {
      console.log("in editing render");
      currentlyVisibleState = <EditKegForm 
      keg = {this.props.selectedKeg} 
      onEditClick = {this.handleEditingKegInList}/>
      buttonText = "Return to Keg list";
    }  else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
      keg = {this.props.selectedKeg}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
      onNewKegCreation={this.handleAddingNewKegToList} />;
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
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;