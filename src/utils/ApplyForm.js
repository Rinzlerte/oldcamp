import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormField from '../utils/FormField'
import {validate} from '../utils/Validation'

const axios = require('axios').default;
export default class ApplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      formError: false,
      formSucces: "Ваші дані буде повністю захищено",
      data: {},
      formData: {
        email: {
          element: "input",
          value: "",
          config: {
            name: "email_input",
            type: "email",
            placeholder: "Email"
          },
          validation: {
            required: true,
            email: true
          },
          valid: false,
          validationMessage: ""
        },
        name: {
          element: "input",
          value: "",
          config: {
            name: "text_input",
            type: "text",
            placeholder: "Ім'я"
          },
          validation: {
            required: true,
          },
          valid: false,
          validationMessage: ""
        },
        number: {
          element: "input",
          value: "",
          config: {
            name: "text_input",
            type: "text",
            placeholder: "Телефон"
          },
          validation: {
            required: true,
            phone: true
          },
          valid: false,
          validationMessage: ""
        }
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  updateForm = element => {

    const newFormData = { ...this.state.formData };
    
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.e.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormData[element.id] = newElement;
      this.setState({
        formError: false,
        formData: newFormData
      });
  };


    handleSubmit(e) {
      e.preventDefault();
       let dataToSubmit = {};
       let formIsValid = true;
       for (let key in this.state.formData) {
         dataToSubmit[key] = this.state.formData[key].value;
         formIsValid = this.state.formData[key].valid && formIsValid;
       }
       
        if (formIsValid) {
          axios({
            method: 'post',
            url: 'https://boyarcamp.com/request/',
            data: {
              name: dataToSubmit.name,
              number: dataToSubmit.number,
              email : dataToSubmit.email
            }
          })
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }

      }

  render() {
    return (
      <div className="form-box">
        <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div style={{marginBottom:`30px`}}>
            <span className="text-center b_f blue_color">ПОДАТИ ЗАЯВКУ</span>
          </div>
          <div className="form_group">
                <FormField
                  id={"name"}
                  formData={this.state.formData.name}
                  change={element => this.updateForm(element)}
                />
                <FormField
                  id={"number"}
                  formData={this.state.formData.number}
                  change={element => this.updateForm(element)}
                />
                <FormField
                  id={"email"}
                  formData={this.state.formData.email}
                  change={element => this.updateForm(element)}
                />
          </div>
          <span className="form-succes text-dark">{this.state.formSucces}</span>
          <div className="row justify-content-center">
            <Button variant="primary btn-lg b_f" type="submit">НАДІСЛАТИ</Button>
          </div>
        </Form>
      </div>
    )
  }
}