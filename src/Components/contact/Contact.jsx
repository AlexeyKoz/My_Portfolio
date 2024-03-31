import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_j2odtvl', 'template_wvw8wr8', formRef.current, {
            publicKey: '8RZ2BZVV_pAXBaezG',
        })
        .then(
            (result) => {
                setSuccess(true);
            },
            (error) => {
                setError(true);
            });
};

    return (
        <div className="backGround">
            <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
                <motion.div className="textContainer" variants={variants}>
                    <motion.h1 variants={variants} whileHover={{ scale: 1.05 }}>
                        Let's work together
                    </motion.h1>
                    <motion.div className="item" variants={variants} whileHover={{ scale: 1.05 }}>
                        <h2>My Email</h2>
                        <span>AL7koz@gmail.com</span>
                    </motion.div>
                </motion.div>

                <div className="formContainer">
                    <motion.div className="phoneSvg"

                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{ delay: 1, duration: 1 }}>

                        <svg width="330px" height="330px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c2daf5">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28397 12.1083C3.70912 7.22201 8.02178 3.25 12.8523 3.25C15.6636 3.25 17.6986 4.16965 18.981 5.56536C20.2618 6.95924 20.9197 8.9663 20.7125 11.3964C20.2611 14.8772 18.8615 15.8252 18.1958 15.9697C17.8355 16.0479 17.5754 15.9487 17.4329 15.8262C17.3056 15.7167 17.189 15.521 17.2378 15.1744L18.2721 7.4174C18.3451 6.86996 17.9605 6.367 17.413 6.29401L16.9174 6.22792C16.37 6.15493 15.867 6.53955 15.794 7.08699L15.7793 7.19766C15.2714 6.70421 14.6546 6.30909 13.9342 6.05059C10.8495 4.94365 7.58806 6.96619 6.43793 10.0817C5.28638 13.201 6.4685 16.8379 9.56582 17.9494C11.5253 18.6525 13.556 18.093 15.0716 16.7926C15.2517 17.1454 15.4986 17.46 15.8028 17.7217C16.5881 18.3969 17.6641 18.6433 18.7261 18.4128C20.9033 17.9402 22.6878 15.6574 23.1955 11.6887C23.1976 11.6722 23.1994 11.6557 23.2008 11.6392C23.4647 8.62581 22.6623 5.87667 20.8219 3.87384C18.9789 1.86813 16.2234 0.75 12.8523 0.75C6.70601 0.75 1.32927 5.73254 0.79338 11.8917C0.250578 18.1302 4.86475 23.25 11.1008 23.25C13.0255 23.25 14.2577 23.0912 16.0641 22.3275L16.2943 22.2301C16.803 22.015 17.0411 21.4283 16.826 20.9196L16.6313 20.4591C16.4162 19.9504 15.8295 19.7124 15.3208 19.9275L15.0905 20.0248C13.6716 20.6247 12.7897 20.75 11.1008 20.75C6.35995 20.75 2.86574 16.9152 3.28397 12.1083ZM8.78321 10.9475C9.57932 8.79101 11.6022 7.86986 13.0898 8.40367C14.5648 8.93296 15.5115 10.8999 14.7168 13.0525C13.9207 15.209 11.8978 16.1301 10.4102 15.5963C8.93524 15.067 7.98852 13.1001 8.78321 10.9475Z" fill="#ffffff" /> </g>

                        </svg>
                    </motion.div>
                    <motion.form

                        ref={formRef}
                        onSubmit={sendEmail}

                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}>

                        <input type="text" required placeholder="Name" name="name" />
                        <input type="email" required placeholder="Email" name="email" />
                        <textarea rows={10} placeholder="Message" name="message" />

                        <motion.button whileHover={{ scale: 1.02, color: "#575757" }}>Submit</motion.button>

                        {error && "Erorr"}
                        {success && "Success"}

                    </motion.form>

                </div>
            </motion.div>
        </div>
    );
};


export default Contact;