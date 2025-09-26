import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },

    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants} whileHover={{ scale: 1.05 }}>ALEXEY KOZLOV</motion.h2>
                    <motion.h1 variants={textVariants} whileHover={{ scale: 1.02 }}>
                        Full Stack Developer
                        <span className="subtitle">& AI Engineer</span>
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="https://github.com/AlexeyKoz" target="_blank" rel="noopener noreferrer">
                            <motion.button variants={textVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                See My Latest Works on GitHub
                            </motion.button>
                        </a>

                        <a href="#Contact" >
                            <motion.button variants={textVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                Contact Me
                            </motion.button>
                        </a>

                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Building Tomorrow's Technology Today
            </motion.div>
            <div className="imageContainer">
                <img src="hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;