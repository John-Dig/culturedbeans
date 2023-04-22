import React from 'react';
import NewBeansForm from './NewBeansForm';
import BeansList from './BeansList';

class BeansControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewBeansToList = (newBeans) => {
    const newMainBeansList = this.state.mainBeansList.concat(newBeans);
    this.setState({ mainBeansList: newMainBeansList, formVisibleOnPage: false });
  }
  

  render() {
    let currentlyVisibleContent = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewBeansForm />;

    }
    else if (!this.state.formVisibleOnPage) {
      currentlyVisibleContent = <BeansList />;
    }

    else if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewBeansForm onNewBeansCreation={this.handleAddingNewBeansToList} />;
      buttonText = "Return to Beans List";
    }

    else {
      buttonText = "Add Beans";
    }

    return (
      <React.Fragment>
        <p>hello</p>
        {currentlyVisibleContent}
        <button onClick={this.handleClick}>Add Beans</button>
      </React.Fragment>
    );
  }
}

export default BeansControl;