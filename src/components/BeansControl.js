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

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewBeansForm />;
    } else {
      currentlyVisibleContent = <BeansList />;
    }
    return (
      <React.Fragment>
        {currentlyVisibleContent}
        <button onClick={this.handleClick}>Add Beans</button>
      </React.Fragment>
    );
  }
}
