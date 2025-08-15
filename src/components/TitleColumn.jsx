import React from 'react';
import { motion } from 'framer-motion';

const titleColumnStyles = {
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
};

const titleStyles = {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 800,
    color: '#fff',
    textShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
};

const TitleColumn = () => {
    return (
        <aside style={titleColumnStyles} className="title-column">
            <motion.h1
                style={titleStyles}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // This is the corrected line - uses a standard ease array
                transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            >
                Skyera
            </motion.h1>
        </aside>
    );
};

// Hide the title column on smaller screens where layout stacks
const mediaQuery = `
    @media (max-width: 1024px) {
        .title-column {
            display: none;
        }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQuery;
document.head.appendChild(styleSheet);


export default TitleColumn;