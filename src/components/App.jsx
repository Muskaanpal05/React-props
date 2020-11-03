import React from "react";
import Card from "./Card";
import contacts from "../contact";
import Avatar from "./Avatar";
import { isPropertySignature } from "typescript";

function App() {
    return ( <
        div >
        <
        h1 className = "heading" > My Contacts < /h1> <
        Avatar image = "https://scontent.fslv1-2.fna.fbcdn.net/v/t1.0-9/80858280_2505886906300993_94301946923450368_n.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=7Cbv6JkLbtEAX_ys9dy&_nc_ht=scontent.fslv1-2.fna&oh=a2163a6bc6ed37682a53e21bb49cf115&oe=5FC8A4FB" / >
        <
        Card name = { contacts[0].name }
        img = { contacts[0].imgURL }
        tel = { contacts[0].phone }
        email = { contacts[0].email }
        /> <
        Card name = { contacts[1].name }
        img = { contacts[1].imgURL }
        tel = { contacts[1].phone }
        email = { contacts[1].email }
        /> <
        Card name = { contacts[2].name }
        img = { contacts[2].imgURL }
        tel = { contacts[2].phone }
        email = { contacts[2].email }
        /> <
        /div>
    );
}

export default App;