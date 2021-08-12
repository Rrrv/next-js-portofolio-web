import {Fragment} from "react";
import Head from "next/head";

import Navbar from "../components/Navbar"

function About() {
    return (
        <Fragment>
            <Head>
                <title>About</title>
            </Head>

            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">About.</h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde vitae cupiditate aperiam consequatur saepe excepturi delectus possimus quam corporis, quas ipsam ab alias perspiciatis, non ullam. Dolores minima esse dolorum cupiditate voluptas ut autem soluta eius, excepturi, natus nihil optio vitae perferendis, ipsam accusamus libero enim! Nesciunt error molestiae eum vero incidunt nemo in dicta illo quidem atque deserunt quam ullam, corrupti aliquam ex, temporibus quis. Nemo quibusdam voluptatum incidunt fugit quidem aliquid esse id, harum error! Dolorum, incidunt!
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
 
export default About;