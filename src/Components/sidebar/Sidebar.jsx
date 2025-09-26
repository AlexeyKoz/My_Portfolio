import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 738);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: isMobile ? "tween" : "spring",
                stiffness: isMobile ? undefined : 20,
                duration: isMobile ? 0.2 : undefined,
                delay: 0,
            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: isMobile ? 0 : 0.5,
                type: isMobile ? "tween" : "spring",
                duration: isMobile ? 0.1 : undefined,
                stiffness: isMobile ? undefined : 400,
                damping: isMobile ? undefined : 40,
            },
        },
    };

    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div
                className="bg"
                variants={variants}
            >
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;