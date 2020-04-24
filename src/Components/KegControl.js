import React from 'react';
import KegList from './KegStock/KegList';
import NewKegForm from './KegStock/NewKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false,
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
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }


  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  
  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList, formVisibleOnPage: false});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList, selectedKeg: null})
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedkeg.id)
      .concat(kegToEdit);
      this.setState({masterKegList: editedMasterKegList, editing: false, selectedKeg: null});
  }

  
  // handleRestock = (item) => {
  //   const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== item.id);
  //   const newKegItem = {
  //     name: item.name,
  //     description: item.description,
  //     quantity: parseInt(item.quantity) + 1,
  //     id: item.id
  //   }
  //   const newerList = newMasterKegList.concat(newKegItem);
  //   this.setState({masterKegList: newerList});
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
    console.log(this.state.masterKegList);
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} 
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

export default KegControl;