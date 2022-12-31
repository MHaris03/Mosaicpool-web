import React, { Component } from 'react';
//class LabelText extends Component {
  //  render() 
  const LabelText = (props) =>
  {
        return (
            <label 
                style={{
                    color: props.color? props.color: '#04153d',
                    fontSize: props.FontSize ? props.FontSize : "18px",
                    marginLeft: props.marginLeft ? props.marginLeft : "",
                    marginRight: props.marginRight ? props.marginRight : "",
                    marginTop: props.marginTop ? props.marginTop : "",
                    float: props.float ? props.float : "",
                    marginBottom: props.marginBottom? props.marginBottom : ""
                }}>
            {props.text ? props.text : "Label"}</label>
        );
    }


export default LabelText;