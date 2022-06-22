import { Component } from 'react';
import { FormSection } from './components/Form/Form';
import axios from 'axios';

export class App extends Component {

  state = {
    inputValue: "",
  }

  handleChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
  }

  getData = () => {
    return axios({
      method: 'get',
      url: '',
    });
  }

  render(){
    return (
      <>
        <section>
          <FormSection 
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
          />
        </section>
        <section>

        </section>
      </>
    );
  }
}

