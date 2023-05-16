import React, { useState } from 'react';
import './ContactForm.css'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [participants, setParticipants] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");

        const formData = {
            name: name,
            email: email,
            phone: phone,
            message: message,
            participants: participants,
            date: date
        };

        fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: 'gal.pittel@gmail.com' }],
                    subject: 'New form submission'
                }],
                from: { email: 'gal.pittel@gmail.com' },
                content: [{
                    type: 'text/plain',
                    value: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}Participants: ${formData.participants}\nDate: ${formData.date}\n`
                }]
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Email sent:', data);
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setParticipants('');
        setDate('');
    }

    function handleDateChange(e) {
        const selectedDate = new Date(e.target.value);
        if (selectedDate.getDay() === 6) {
            alert("Sorry, we're closed on Saturdays. Please choose another date.");
            return;
        }
        setDate(e.target.value);
    }

    return (
        <div>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit}>
                    <label for="name" required>Name:</label>
                    <input type="text"
                           id="name"
                           value={name}
                           required={true}
                           onChange={(e) => setName(e.target.value)} />

                    <label for="email" required>Email:</label>
                    <input type="email"
                           id="email"
                           value={email}
                           required={true}
                           onChange={(e) => setEmail(e.target.value)} />

                    <label for="phone" required>Phone:</label>
                    <input type="tel"
                           id="phone"
                           value={phone}
                           required={true}
                           onChange={(e) => setPhone(e.target.value)} />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}></textarea>

                    <label htmlFor="participants">Number of Participants:</label>
                    <input type="number"
                           id="participants"
                           value={participants}
                           min={1}
                           onChange={(e) => setParticipants(e.target.value)} />

                    <label htmlFor="date">Date:</label>
                    <input type="date"
                           id="date"
                           value={date}
                           min={new Date().toISOString().split("T")[0]}
                           max={new Date(new Date().setDate(new Date().getDate() + 365)).toISOString().split("T")[0]}
                           onChange={handleDateChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <button type="whatsapp">
                <a href="https://wa.me/0523321678" target="_blank" rel="noreferrer">
                    Contact us via WhatsApp
                </a>
            </button>
        </div>
    );
}

export default ContactForm;
