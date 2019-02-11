import PropTypes from "prop-types";
import React from "react";
import { Well } from "react-bootstrap";

const ContactPanel = ({ contact }) => {
    let styleOverride = {
        marginBottom: "5px",
        width: "100%"
    };

    if (contact.image) {
        styleOverride = Object.assign(styleOverride, {
            backgroundImage: 'url("/images/contacts/'+contact.image+'")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "64px 64px",
            backgroundPosition: "right 10px top 15px"
        });
    }

    return (
        <Well bsSize="small" style={styleOverride}>
            <h4>Ihr Ansprechpartner:</h4>
            <h5>
                {contact.anrede} {contact.vorname} {contact.nachname}{" "}
            </h5>
            <h6>
                Telefon: <a href={"tel:" + contact.telefon}>{contact.telefon} </a>
            </h6>
            <h6>
                eMail: <a href={"mailto:" + contact.mail}>{contact.mail} </a>
            </h6>
        </Well>
    );
};
ContactPanel.propTypes = {
    contact: PropTypes.object
};

ContactPanel.defaultProps = {
    contact: {
        anrede: "Herr",
        vorname: "Dirk",
        nachname: "Steinbacher",
        telefon: "+49-202-563 5794",
        mail: "dirk.steinbacher@stadt.wuppertal.de",
        image: "SteinbacherD102.png"
    }
};
export default ContactPanel;
