import React from 'react'
import Link from 'next/link'

function ScrollLink({ children, ...props}) {
    const handleScroll = (e) => {
        e.preventDefault();

        const targetId = e.currentTarget.href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    }

    return (
        <Link {...props} onClick={handleScroll}>
            {children}
        </Link>
    )
}

export default ScrollLink