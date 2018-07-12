import React from 'react'
import {render} from 'react-dom'
import Remarkable from 'remarkable';
import PropTypes from 'prop-types';

export default class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.inputChange = this.inputChange.bind(this);
      this.state = {value: 'To enter the text.',inpvalue: ""
    };
    }
    handleChange(e) {
      this.setState({value: e.target.value});
    }
    getRawMarkup() {
          var md = new Remarkable();
          return { __html: md.render(this.state.value) };
        }
    getInpValue() {
          this.state.inpValue = document.getElementById('input').value;
          this.props.getInpData(this.state.inpValue);
    }
    inputChange(prop) {
      this.setState({inpvalue: prop.target.value.toLowerCase()});
    }
    render() {
        return (
          <div className="edition">
          <input id="input" type="text" 
              placeholder="Search"
              onChange={ this.inputChange }
          />
          <div className="texareasearch">
          <p>Input</p>
          <textarea className="textarea"
              onChange={this.handleChange}
              defaultValue={this.state.value}
          />
          </div>
          <div className="output_content">
            <p>Output</p>
            <div
                  className="content"
                  dangerouslySetInnerHTML={this.getRawMarkup()}
            />
          </div>
                
          </div>
            );
          }
    
    }