import React from "react";
import ReactDOM from "react-dom";
import contacts from "./contact";

function Card(props) { //passing props as an object into the funcion component containg input properties inside
    return ( <
        div >
        <
        div className = "card" >
        <
        div className = "top" >
        <
        h2 className = "name" > { props.name } < /h2> <
        img className = "circle-img"
        src = { props.img }
        alt = "avatar_img" / >
        <
        /div> <
        div className = "bottom" >
        <
        p className = "info" > { props.phone } < /p> <
        p className = "info" > { props.mail } < /p> <
        /div> <
        /div> <
        /div>
    );
}

ReactDOM.render( <
    div >
    <
    h1 > My Contacts < /h1>

    <
    Card name = { contacts[0].name }
    img = { contacts[0].imgURL }
    phone = { contacts[0].phone }
    mail = { contacts[0].email }
    />  <
    Card name = { contacts[1].name }
    img = { contacts[1].imgURL }
    phone = { contacts[1].phone }
    mail = { contacts[1].email }
    />  <
    Card name = { contacts[2].name }
    img = { contacts[2].imgURL }
    phone = { contacts[2].phone }
    mail = { contacts[2].email }
    />  { /* Making custom attributes for custom component which are called props*/ } <
    /div>,
    document.getElementById("root")
);