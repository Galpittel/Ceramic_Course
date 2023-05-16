import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import WorkshopForm from './WorkshopForm';
import Gallery from './Gallery'
import CreateBackground from "./background";

function App() {
    return (
        <div className="App">
            <CreateBackground/>
            <header className="App-header">
                <h1>🌸 Garden in a Plate 🌸 Ceramic Workshop </h1>
            </header>
            <div className="cover img">
            <img
                src="https://content.vp4.me/orlysmoove/Content/960x180%20botanical_900x180-r.jpg"
            />
            </div>
            <section className="intro">
                <p>Looking for a unique and engaging activity that brings the beauty of nature into your home and allows you to explore the art of ceramics? Look no further than my studio! Join me for a special one-time workshop where you'll create a stunning ceramic plate adorned with real plants and flowers.</p>
                <h2>About the Workshop</h2>
                <p>This workshop is perfect for groups of friends, bachelorette parties, family birthdays, mitzvah celebrations, and more - no prior experience necessary! Held in a small group setting at my studio in Moshav Kfar Neter (just next to IKEA Netanya), the Garden in a Plate workshop is a 3-hour session where you'll create a one-of-a-kind plate design using fresh plants and flowers, then paint it with your choice of colors from our wide selection.</p>
                <p>Once complete, the plates will dry and be fired in our ceramic oven, ready for collection 1-2 weeks later. The cost per participant is based on groups of 4-8 participants.</p>
            </section>

            <img className='images' src="https://content.vp4.me/orlysmoove/Content/%d7%a1%d7%93%d7%a0%d7%aa%20%d7%92%d7%99%d7%a0%d7%94%20%d7%91%d7%a6%d7%9c%d7%97%d7%aa%203_900x600-r.png"/>

            <p>
                Working with this remarkable material is not just an ordinary task; it is a calming and peaceful experience. We will use our hands to mold and shape the clay, select our favorite flowers, and place them on the surface in a way that aligns with our imagination. The intricate process of lining and painting requires focus, allowing all other thoughts to fade away and bringing our attention to the present moment.
                It's like mindfulness and meditation, providing us with a moment to escape from the chaos of the world and indulge in the creative process. Through the touch of the clay and the vibrant colors of the flowers, we can connect with our inner selves, promoting a sense of calm and serenity.
            </p>
            <img className='images' src="https://content.vp4.me/orlysmoove/Content/%d7%a1%d7%93%d7%a0%d7%aa%20%d7%92%d7%99%d7%a0%d7%94%20%d7%91%d7%a6%d7%9c%d7%97%d7%aa%204_900x600-r(2).png"/>
            <section>
                <h2>For whom is this workshop appropriate?</h2>

                <ul className="potential-customers">
                    <li><strong>Spending time with friends</strong> - a great way to celebrate a birthday, bachelorette party, or just have a unique evening to connect with one another.</li>
                    <li><strong>Families</strong> - ideal for children aged 6 and up, teenagers, young adults, and even those in their 20s or beyond. It's a fantastic opportunity for quality family time and bonding while creating art together.</li>
                    <li><strong>Couples</strong> - a fun and exciting option for pre-wedding, anniversary, or just a unique date night.</li>
                    <li><strong>Bat Mitzvah (or any girls' birthday)</strong> - an enjoyable way to celebrate with friends while creating art and capturing memories on social media.</li>
                    <li><strong>Grandparents and grandchildren</strong> - an experiential activity for the family that creates an exciting memory.</li>
                    <li><strong>Siblings</strong> - a fun and nostalgic way to connect with brothers and sisters, regardless of age, and make new memories together.</li>
                    <li><strong>Colleagues or team building</strong> - a unique way to connect and form bonds outside of the typical office environment.</li>
                </ul>
            </section>
            <div className="container">
                <img
                    className='images'
                    src="https://content.vp4.me/orlysmoove/Content/20210711_074835_900x675-r.jpg"
                />
            </div>
            <section>
                <h2>About Me</h2>
                <div className="about">
                    <img src="https://content.vp4.me/orlysmoove/Content/orly%20pittel%20profile_900x1116-r.jpg" alt="Orly Pittel"/>
                    <div>
                        <h3>Hi there, I'm Orly!</h3>
                        <p>I'm Orly Pittel, a designer specializing in personalized ceramic gifts and hosting workshops. Growing up in a creative household, where artistic expression was a part of our everyday lives, I developed a deep love for handicrafts. The influence of art, creation, and my profound appreciation for nature and flowers during my childhood has greatly shaped the person I am today.</p>
                        <p>Fifteen years ago, I stumbled upon a ceramics class that sparked a profound passion within me. Since then, ceramics has become my world, and I am completely immersed in the joy and creativity it brings. There's something incredibly fun, exciting, and addictive about taking a formless lump of clay and transforming it into a vibrant, colorful item that brings smiles to people's faces. Working with clay feels like a collaboration, and I often find myself spending hours in the studio, completely engrossed in the process. </p>
                        <p>One workshop that perfectly combines my loves is the 'garden on a plate.' Inspired by my deep connection to nature and my fascination with the beauty of flowers, I created this workshop. Nature, with its boundless beauty, serves as my greatest inspiration, and I find immense pleasure in incorporating the diverse designs of flowers and plants into my ceramic art. Join me in the 'Garden on a Plate' ceramics workshop, where you can experience the addictive nature of working with clay, the tranquility of nature, and the joy of creating something truly unique.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Gallery</h2>
                <p>Experience the beauty of our workshop creations, showcasing the intricate details and creativity of some of our costumers. Get inspired by the artistry and imagination that flows through our workshop, and discover the magic of bringing your own unique designs to life.</p>
                <Gallery></Gallery>
            </section>
            <h2>Sounds great, but how much does it cost?</h2>
            <p>The price includes:</p>
            <ul>
                <li>A personal design piece that you create with your own hands.</li>
                <li>All required materials and tools</li>
                <li>Light refreshments during the workshop</li>
            </ul>
            <div className="container">
                <WorkshopForm/>
                <div className="workshopImage">
                    <img src="https://market.marmelada.co.il/images/detailed/6117/20210423_132811.jpg?source_page=products.view"
                         width="250"
                         height="auto"/>
                </div>
            </div>

            <p>You have the option to pay using several methods, including Bit, Paybox, bank transfer, and credit card. If you're interested in booking a workshop at a different location, for a large group or event, or a private couples workshop, please don't hesitate to reach out to me directly for more details.</p>

            <section>
                <h2>Location</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1411.7304106499298!2d34.870568733707906!3d32.278755217029186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3f7914e4f2a3%3A0x78c2347068875e14!2z15TXodeY15XXk9eZ15Ug16nXnCDXkNeV16jXnNeZINek15nXmNec!5e0!3m2!1siw!2sil!4v1684152136630!5m2!1siw!2sil"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to schedule a workshop, please fill out the form below and we'll get back to you as soon as possible:</p>
                <ContactForm />
            </section>

            <h2>Cancellation Policy:</h2>
            <p className="cancel-container">
                We understand that plans can change, and we strive to accommodate our participants as best as we can. Please take note of our cancellation policy:
                <ul>
                    <li>Cancellation made up to one week before the workshop will result in a full refund of the workshop cost.</li>
                    <li>For cancellations made within the week leading up to the workshop, up to 24 hours prior to the scheduled session, a 50% refund of the workshop cost will be provided.</li>
                    <li>Cancellations made within 24 hours of the workshop will require full payment, but we do offer the opportunity to join a future workshop, subject to availability.</li>
                </ul>
                We value your understanding and cooperation. If you need to cancel your participation, please notify us as soon as possible to ensure smooth arrangements for both parties.
            </p>
        </div>
    );
}

export default App;
