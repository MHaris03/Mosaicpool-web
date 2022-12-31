import React from 'react';

//class Text extends Component
 const Text = (props) =>
{
   // render() {
        return (
            <p 
                style={{
                    color: props.color? props.color: "",
                    fontSize: props.FontSize ? props.FontSize : "15px",
                    marginLeft: props.marginLeft ? props.marginLeft : "",
                    marginTop: props.marginTop ? props.marginTop : "",
                    textAlign: props.textAlign ? props.textAlign : "",
                    fontWeight: props.fontWeight ? props.fontWeight : ""
                }}>
                {props.text ? props.text : "Heading"}
            </p>
        )
    }
//}
export default Text;
