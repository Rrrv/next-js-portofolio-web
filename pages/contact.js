import {Fragment} from "react";
import Head from "next/head";

import Navbar from "../components/Navbar"

function Contact() {
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Contact.</h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ratione.
                        </p>
                        <ul className="contact-links">
                            <li className="contact-item">Email: evriliano@evriliano.com</li>
                            <li className="contact-item">Phone: +6212345678123</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default Contact;