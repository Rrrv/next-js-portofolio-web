import {Fragment} from "react";
import Head from "next/head";
import Image from 'next/image'

import Navbar from "../components/Navbar"

function Portofolio() {
    return (
        <Fragment>
            <Head>
                <title>Portofolio</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">Portofolio.</h1>
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, earum!
                        </p>

                        <div className="portofolio-wrapper">
                            <div className="portofolio-item">
                                <Image src="/chitchat.png" alt="portofolio-image" width={550} height={450} className="portofolio-image" />

                                <h4 className="portofolio-name">Chat App Exploration</h4>
                                <div className="portofolio-catagory">Mobile Dev</div>
                            </div>

                            <div className="portofolio-item">
                                <Image src="/kajian.jpg" alt="portofolio-image" width={550} height={450} className="portofolio-image" />

                                <h4 className="portofolio-name">Kajian App</h4>
                                <div className="portofolio-catagory">Mobile Dev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default Portofolio;