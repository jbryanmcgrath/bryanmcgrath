import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm(props) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Submit Form", formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        }
    };

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="email" defaultValue={message} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message"> Message:
                    </label>
                    <textarea name="message" row="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>

            </form>
        </section>
    );
}

export default ContactForm;

// function ContactForm(props) {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     return (
//         <form>
//             <h1>Name:{name}</h1>
//             <h1>Email:{email}</h1>
//             <h1>Message:{message}</h1>
//                 <input type="text"
//                        value={name}
//                        onChange={(e) => {setName(e.target.value)}}/>
//                 <input type="email"
//                        value={email}
//                        onChange={(e) => {setEmail(e.target.value)}} />
//                 <input type="text"
//                        value={message}
//                        onChange={(e) => {setMessage(e.target.value)}} />
//         </form>

//     );
// }

// export default ContactForm;
