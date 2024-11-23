import React from 'react'
import '../../assets/styles/starkWhitePaperSectionCSS/topSection.css'
import sectionBgImg from '../../assets/images/recources/starkSectionBgImg.svg'

const TopSection = () => {
    return (
        <>
            <div className='stark-white-paper-top-section-container'>
                <div className='stark-white-paper-top-section-content'>
                    <span>white paper</span>
                    <h1>Managing a modern accessibility posture and growing accessibility maturity at any scale</h1>
                    <button>Download as PDF</button>
                </div>
                <img src={sectionBgImg} className='img-fluid' alt='section-img' />
            </div>
        </>
    )
}

export default TopSection
