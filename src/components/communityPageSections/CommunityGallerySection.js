import React from 'react'
import '../../assets/styles/communityPageSectionCSS/communityGallerySection.css'
import sectionImg1 from '../../assets/images/recources/community/classroom.webp'
import sectionImg2 from '../../assets/images/recources/community/panel-1.webp'
import sectionImg3 from '../../assets/images/recources/community/panel-2.webp'
import sectionImg4 from '../../assets/images/recources/community/friends-1.webp'
import sectionImg5 from '../../assets/images/recources/community/friends-2.webp'

const CommunityGallerySection = () => {
    return (
        <>
            <div className='community-page-gallery-section-container'>
                <div className='row mx-0 community-page-gallery-section-content'>
                    <div className='col-md-8 community-page-gallery-section-content-img'>
                        <img src={sectionImg1} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-4 community-page-gallery-section-content-img'>
                        <img src={sectionImg2} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-3 community-page-gallery-section-content-img'>
                        <img src={sectionImg3} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-6 community-page-gallery-section-content-img'>
                        <img src={sectionImg4} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-3 community-page-gallery-section-content-img'>
                        <img src={sectionImg5} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityGallerySection
