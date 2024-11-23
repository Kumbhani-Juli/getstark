import React from 'react'
import '../../assets/styles/communityPageSectionCSS/communityHostingJoiningSection.css'
import heartImg from '../../assets/images/recources/community/heartImg.svg'

const CommunityHostingJoiningSection = () => {
    const sectionData = [
        {
            spanTitle: "What it is",
            title: "Meetups are places to amplify topics",
            content: "Whether it’s talking shop or educating others, this is the place where we get to speak about and amplify different important topics.",
        },
        {
            spanTitle: "Benefits",
            title: "Spread knowledge and engage others",
            content: "Hosting meetups has many benefits including giving our community the platform to spread the knowledge that they’ve acquired with so many others.",
        },
        {
            spanTitle: "The Goal",
            title: "Building a strong community",
            content: "Our goal is to engage the community and hold a space where they can ask questions and learn about about accessibility, design, and much more.",
        },

        {
            spanTitle: "How To Host",
            title: "Get in touch with us",
            content: "Want to host a meetup of your own? We’d love to hear everything you have to say. Reach out to us and we’ll get you all set up!",
        },
    ]
    return (
        <>
            <div className='community-hosting-joining-section-container'>
                <div className='community-hosting-joining-section-title'>
                    <div className='community-hosting-joining-section-title-left-content'>
                        <h1><span>Hosting and Joining</span> Stark Meetups</h1>
                    </div>
                    <div className='community-hosting-joining-section-title-right-content'>
                        <img src={heartImg} className='img-fluid' alt='heart-img' />
                    </div>
                </div>
                <div className='community-hosting-joining-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='community-hosting-joining-section-content-box' key={index}>
                                <span>{data?.spanTitle}</span>
                                <h2>{data?.title}</h2>
                                <p>{data?.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CommunityHostingJoiningSection
