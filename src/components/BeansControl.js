import React from 'react';
import NewBeansForm from './NewBeansForm';
import BeansList from './BeansList';
import BeansDetails from './BeansDetails';
import EditBeansForm from './EditBeansForm';
import { Simulate } from 'react-dom/test-utils';

class BeansControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeansList: [],
      selectedBeans: null,
      //     editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBeans != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeans: null,
        // editing: false
      })

    } else {
      this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
    }
  }

  handleAddingNewBeansToList = (newBeans) => {
    const newMainBeansList = this.state.mainBeansList.concat(newBeans);
    this.setState({ mainBeansList: newMainBeansList, formVisibleOnPage: false });
  }

  handleChangingSelectedBeans = (id) => {
    const selectedBeans = this.state.mainBeansList.filter(beans => beans.id === id)[0];
    this.setState({ selectedBeans: selectedBeans });
  }

  handleDeleteBeans = (id) => {
    const newMainBeansList = this.state.mainBeansList.filter(beans => beans.id !== id);
    this.setState({ mainBeansList: newMainBeansList, selectedBeans: null });
  }

  handleEditingBeansInList = (beansToEdit) => {
    const editedMainBeansList = this.state.mainBeansList.filter(beans => beans.id !== this.state.selectedBeans.id).concat(beansToEdit);
    this.setState({ mainBeansList: editedMainBeansList, editing: false, selectedBeans: null });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  render() {
    let currentlyVisibleContent = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleContent = <EditBeansForm beans={this.state.selectedBeans}  //add ?
        onEditBeans={this.handleEditingBeansInList} />
      buttonText = "Return to beans list";
    }

    else if (this.state.selectedBeans != null) {
      currentlyVisibleContent = <BeansDetails beans={this.state.selectedBeans} onClickingDelete={this.handleDeleteBeans}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to beans list"
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewBeansForm onNewBeansCreation={this.handleAddingNewBeansToList} />; //NewBeansForm is a React component
      buttonText = "Return to beans list";
   } else {
    currentlyVisibleContent = <BeansList beansList= {this.state.mainBeansList} onNewBeansSelection = {this.handleChangingSelectedBeans} />;
    buttonText = "Add beans";
   }

    // else if (!this.state.formVisibleOnPage) {
    //   currentlyVisibleContent = <BeansList />;
    //   buttonText = "Add some beans"
    // }

    // else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleContent = <NewBeansForm onNewBeansCreation={this.handleAddingNewBeansToList} />;
    //   buttonText = "Return to Beans List";
    // }

    // else {
    //   buttonText = "else reached";
    // }

    return (
      <React.Fragment>
        {currentlyVisibleContent}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BeansControl;