import React from "react";
import Dialog from "./Dialogs/Dialog";
import ContactMessage from "./Dialogs/ContactMessage";





function Messages(props) {
    return (
        <div className="Messages">
            <div className="list-contact">
                {props.contactList.map((el, i) => <Dialog key={i} id={el.id} name={el.name} />)}
            </div>
            <div className="list-messages">
                {props.contactMessages.map((el, i) => <ContactMessage key={i} id={el.id} message={el.message} />)}
            </div>
        </div>
    );
}

export default Messages;
