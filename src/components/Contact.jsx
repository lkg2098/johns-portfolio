import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const initialFormState = {
        user_name: '',
        user_email: '',
        message: ''
    }

    const [formData, setFormData] = useState(initialFormState)
    const [showToast, setShowToast] = useState(false)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            { publicKey:process.env.REACT_APP_EMAILJS_PUBLIC_KEY}
        )
        .then(
            () => {
                console.log('SUCCESS!');
                setShowToast(true);
                setFormData(initialFormState);
                setTimeout(() => setShowToast(false), 5000)
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    }

    return (
        <section id="contact-section">
            <div>
                <h1>Contact</h1>
                <p>Reach out for business or just to chat.</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} id="contact-form">
                    <div>
                        <label htmlFor="user_name">Name</label>
                        <input
                        value={formData.user_name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        type="text"
                        id="user_name"
                        name="user_name"
                        />
                    </div>
                    <div>
                        <label htmlFor="user_email">Email</label>
                        <input
                        value={formData.user_email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your email address"
                        type="email"
                        id="user_email"
                        name="user_email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Your message"
                        type="text"
                        id="message"
                        name="message"
                        rows="8"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div id="success-message">
                {showToast && (
                    <div>
                        <div>
                            <strong>Success</strong>
                            <button type="button" onClick={() => setShowToast(false)}></button>
                        </div>
                        <div>
                            Message sent. We'll be in touch!
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
