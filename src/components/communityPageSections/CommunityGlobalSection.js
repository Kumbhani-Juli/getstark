import React from 'react'
import '../../assets/styles/communityPageSectionCSS/communityGlobalSection.css'
import sectionImg1 from '../../assets/images/recources/community/community__slack.webp'
import sectionImg2 from '../../assets/images/recources/community/community__instagram.png'
import sectionImg3 from '../../assets/images/recources/community/community__twitter.png'
import sectionImg4 from '../../assets/images/recources/community/community__meetup.png'
import sectionImg5 from '../../assets/images/recources/community/community__youtube.png'
import sectionImg6 from '../../assets/images/recources/community/stylized-stark-logo.webp'

const CommunityGlobalSection = () => {
    const sectionData = [
        { sectionImg: sectionImg1, title: "Slack" },
        { sectionImg: sectionImg2, title: "Instagram" },
        { sectionImg: sectionImg3, title: "Twitter" },
        { sectionImg: sectionImg4, title: "Meetup" },
        { sectionImg: sectionImg5, title: "YouTube" },
    ]
    return (
        <>
            <div className='community-global-section-container'>
                <div className='community-global-section-title'>
                    <h1>Become a part of our <span>global</span> community</h1>
                    <div className='community-global-section-title-social-media'>
                        {
                            sectionData?.map((data, index) => (
                                <div className='community-global-section-title-social-media-body' key={index}>
                                    <img src={data?.sectionImg} className='img-fluid' alt='social-img' />
                                    <p>{data?.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='row mx-0 p-0 community-stark-team-section-content'>
                    <div className='col-md-6 p-0 community-stark-team-section-left-content'>
                        <h1>Get involved with the Stark team</h1>
                        <p>We love hearing from all of you and are always looking for new ways to expand and collaborate with our community. Like what we’re up to and want to contribute? Get involved by partnering with us or contributing a resource!</p>
                        <div className='community-stark-team-section-left-content-btns'>
                            <button className='partner-btn'>Become a partner</button>
                            <button className='contribute-btn'>Contribute a resource</button>
                        </div>
                    </div>
                    <div className='col-md-6 p-0 community-stark-team-section-right-content'>
                        <img src={sectionImg6} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityGlobalSection
