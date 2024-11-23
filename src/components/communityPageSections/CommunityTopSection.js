import React from 'react'
import '../../assets/styles/communityPageSectionCSS/communityTopSection.css'
import sectionIcon from '../../assets/images/recources/community/arrowIcon.png'

const CommunityTopSection = () => {
    return (
        <>
            <div className='community-page-top-section-container'>
                <div className='community-page-top-section-content'>
                    <span>join the community</span>
                    <h1>A world built by you, for you.</h1>
                    <p>Come talk shop in meetups, join us on social, and contribute to the evergrowing community.</p>
                    <div className='community-page-top-section-content-buttons'>
                        <button className='host-btn'>Host a meetup</button>
                        <button className='join-btn'>Join our community</button>
                    </div>
                </div>
                <div className='community-page-top-section-svg-icon'>
                    <img src={sectionIcon} className='img-fluid' alt='section-img' />
                </div>
            </div>
        </>
    )
}

export default CommunityTopSection
