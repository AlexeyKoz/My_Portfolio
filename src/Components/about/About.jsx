import "./about.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
    const aboutRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const aboutSection = aboutRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // When section is not visible, reset scroll position
                    if (!entry.isIntersecting && contentRef.current) {
                        contentRef.current.scrollTop = 0;
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const skillCategories = [
        {
            title: "Languages & Frameworks",
            skills: ["Python", "Java", "JavaScript", "TypeScript", "Spring Boot", "Django", "Flask", "React", "Angular", "Android Development"]
        },
        {
            title: "AI & Machine Learning",
            skills: ["LangChain", "AI Agents", "RAG", "Prompt Engineering", "NLP", "Machine Learning"]
        },
        {
            title: "DevOps & Databases",
            skills: ["Docker", "Kubernetes", "MySQL", "PostgreSQL", "Redis", "Git", "CI/CD"]
        },
        {
            title: "Hardware & Systems",
            skills: ["FPGA (Altera/Xilinx)", "Embedded Systems", "PCB Repair", "Electronic Calibration"]
        }
    ];

    const experience = [
        {
            title: "Integration Engineer",
            company: "Controp, Israel",
            period: "2020 - Present",
            highlights: [
                "Debug and modify embedded systems code for FPGA platforms",
                "Perform component-level PCB repairs and complex electronic calibrations",
                "Conduct technical training for 50+ international teams in English",
                "Ensure zero-defect delivery of mission-critical defense systems"
            ]
        },
        {
            title: "Department Commander",
            company: "Israeli Air Force, IDF",
            period: "2015 - 2020",
            highlights: [
                "Led team of 8 in high-stakes military operations with zero-failure tolerance",
                "Managed air-defense projects: assembly, testing, and deployment",
                "Received 7 excellence certificates including from Air Force Deputy Commander"
            ]
        }
    ];

    const education = [
        { title: "AI Pro Certification", school: "Yaniv Arad Training Labs", year: "2025", tech: "AI Agents, LangChain, Advanced ML" },
        { title: "Python Full Stack", school: "John Bryce", year: "2024-2025", tech: "Django, Flask, React, Angular, Docker" },
        { title: "Java Full Stack", school: "John Bryce", year: "2022-2023", tech: "Spring Boot, React, Android, MySQL" }
    ];

    return (
        <div className="about" ref={aboutRef}>
            <div className="container" ref={contentRef}>
                <motion.div
                    className="content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Header Section */}
                    <motion.div className="header-section" variants={itemVariants}>
                        <h1 className="title">About Me</h1>
                        <div className="title-underline"></div>
                    </motion.div>

                    {/* Summary Section */}
                    <motion.div className="summary-card" variants={itemVariants}>
                        <p className="summary-text">
                            Full Stack Developer with expertise in Python, Java, Spring Boot, Django, React, Angular,
                            and cutting-edge AI technologies. Proven leader with military background, delivering
                            mission-critical systems. Expert in containerization and hardware-software integration.
                        </p>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="two-column-layout">
                        {/* Left Column - Experience */}
                        <motion.div className="left-column" variants={itemVariants}>
                            <h2 className="section-title">Experience</h2>
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    className="experience-card"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="job-header">
                                        <h3>{job.title}</h3>
                                        <span className="period">{job.period}</span>
                                    </div>
                                    <h4 className="company">{job.company}</h4>
                                    <ul className="highlights">
                                        {job.highlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Column - Skills & Education */}
                        <motion.div className="right-column" variants={itemVariants}>
                            {/* Skills Section */}
                            <h2 className="section-title">Technical Skills</h2>
                            <div className="skills-grid">
                                {skillCategories.map((category, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-category"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <h3>{category.title}</h3>
                                        <div className="skill-tags">
                                            {category.skills.map((skill, idx) => (
                                                <span key={idx} className="skill-tag">{skill}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Education Section */}
                            <h2 className="section-title">Education</h2>
                            <div className="education-list">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        className="education-item"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h3>{edu.title}</h3>
                                        <p className="school">{edu.school} • {edu.year}</p>
                                        <p className="tech">{edu.tech}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Languages */}
                            <h2 className="section-title">Languages</h2>
                            <div className="language-tags">
                                <span className="language-tag">Russian (Native)</span>
                                <span className="language-tag">Ukrainian (Native)</span>
                                <span className="language-tag">Hebrew (Native)</span>
                                <span className="language-tag">English (Fluent)</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;