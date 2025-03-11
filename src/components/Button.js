import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({ children, type, buttonStyle, buttonSize, targetId, offset = 100 }) => {  // Add offset prop
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const scrollToSection = (e) => {
    e.preventDefault();
    const section = document.getElementById(targetId);

    if (section) {
      const yOffset = -offset; // Negative value to scroll slightly above the section
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={scrollToSection}
      type={type}
    >
      {children}
    </button>
  )
}
