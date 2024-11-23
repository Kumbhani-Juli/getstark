import React from 'react'
import '../../assets/styles/starkWhitePaperSectionCSS/bottomSection.css'
import companyLogo from "../../assets/images/recources/companyLogo.svg"; // Ensure the path is correct for your image
import sectionBgImg from '../../assets/images/recources/starkSectionBgImg.svg'

const BottomSection = () => {
    return (
        <>
            <div className='stark-white-paper-bottom-section-container'>
                <div className='stark-white-paper-bottom-section-content'>
                    <div className='stark-white-paper-bottom-section-content-title'>
                        <img src={companyLogo} className='img-fluid' alt='company-logo' />
                        <p>Want to read the full white paper? Please complete the form below to get access.</p>
                    </div>
                    <hr />
                    <div className='stark-white-paper-bottom-section-content-form'>
                        <div className='stark-white-paper-bottom-section-content-form-body'>
                            <p>First name</p>
                            <input type='text' />
                        </div>
                        <div className='stark-white-paper-bottom-section-content-form-body'>
                            <p>Last name</p>
                            <input type='text' />
                        </div>
                        <div className='stark-white-paper-bottom-section-content-form-body'>
                            <p>Company</p>
                            <input type='text' />
                        </div>
                        <div className='stark-white-paper-bottom-section-content-form-body'>
                            <p>Business email</p>
                            <input type='email' />
                        </div>
                    </div>
                    <div className='stark-white-paper-bottom-section-content-btns'>
                        <button className='read-btn'>Read white paper</button>
                        <button className='download-btn'>Download as PDF</button>
                    </div>
                    <div className='stark-white-paper-bottom-section-content-footer'>
                        <small>By submitting this form, you will receive information, tips, and promotions. To learn more, see our <a href=''>Privacy Policy</a>.</small>
                    </div>
                </div>
                <div className='stark-white-paper-bottom-section-bg-img'>
                    <img src={sectionBgImg} className='img-fluid' alt='section-img' />
                </div>
            </div>
        </>
    )
}

export default BottomSection
