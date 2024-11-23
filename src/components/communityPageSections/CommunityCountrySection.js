import React from 'react'
import '../../assets/styles/communityPageSectionCSS/communityCountrySection.css'
import countryIcon1 from '../../assets/images/recources/community/countryIcon1.svg'
import countryIcon2 from '../../assets/images/recources/community/countryIcon2.svg'
import countryIcon3 from '../../assets/images/recources/community/countryIcon3.svg'
import countryIcon4 from '../../assets/images/recources/community/countryIcon4.svg'
import countryIcon5 from '../../assets/images/recources/community/countryIcon5.svg'
import countryIcon6 from '../../assets/images/recources/community/countryIcon6.svg'
import countryIcon7 from '../../assets/images/recources/community/countryIcon7.svg'
import countryIcon8 from '../../assets/images/recources/community/countryIcon8.svg'
import countryIcon9 from '../../assets/images/recources/community/countryIcon9.svg'
import countryIcon10 from '../../assets/images/recources/community/countryIcon10.svg'
import countryIcon11 from '../../assets/images/recources/community/countryIcon11.svg'
import countryIcon12 from '../../assets/images/recources/community/countryIcon12.svg'
import countryIcon13 from '../../assets/images/recources/community/countryIcon13.svg'
import countryIcon14 from '../../assets/images/recources/community/countryIcon14.svg'
import countryIcon15 from '../../assets/images/recources/community/countryIcon15.svg'
import countryIcon16 from '../../assets/images/recources/community/countryIcon16.svg'
import countryIcon17 from '../../assets/images/recources/community/countryIcon17.svg'
import countryIcon18 from '../../assets/images/recources/community/countryIcon18.svg'
import countryIcon19 from '../../assets/images/recources/community/countryIcon19.svg'
import countryIcon20 from '../../assets/images/recources/community/countryIcon20.svg'
import countryIcon21 from '../../assets/images/recources/community/countryIcon21.svg'
import countryIcon22 from '../../assets/images/recources/community/countryIcon22.svg'
import countryIcon23 from '../../assets/images/recources/community/countryIcon23.svg'
import countryIcon24 from '../../assets/images/recources/community/countryIcon24.svg'

import sectionImg1 from '../../assets/images/recources/community/reviewSectionImg1.webp'
import sectionImg2 from '../../assets/images/recources/community/reviewSectionImg2.webp'
import sectionImg3 from '../../assets/images/recources/community/reviewSectionImg3.webp'

const CommunityCountrySection = () => {
    const countryData = [
        { sectionIcon: countryIcon1, countryName: "Australia", },
        { sectionIcon: countryIcon2, countryName: "Austria", },
        { sectionIcon: countryIcon3, countryName: "Bahrain", },
        { sectionIcon: countryIcon4, countryName: "Belgium", },
        { sectionIcon: countryIcon5, countryName: "Canada", },
        { sectionIcon: countryIcon6, countryName: "Denmark", },
        { sectionIcon: countryIcon7, countryName: "Egypt", },
        { sectionIcon: countryIcon8, countryName: "France", },
        { sectionIcon: countryIcon9, countryName: "Germany", },
        { sectionIcon: countryIcon10, countryName: "Greece", },
        { sectionIcon: countryIcon11, countryName: "Iceland", },
        { sectionIcon: countryIcon12, countryName: "India", },
        { sectionIcon: countryIcon13, countryName: "Ireland", },
        { sectionIcon: countryIcon14, countryName: "Italy", },
        { sectionIcon: countryIcon15, countryName: "Jamaica", },
        { sectionIcon: countryIcon16, countryName: "Luxembourg", },
        { sectionIcon: countryIcon17, countryName: "Malta", },
        { sectionIcon: countryIcon18, countryName: "Netherlands", },
        { sectionIcon: countryIcon19, countryName: "Qatar", },
        { sectionIcon: countryIcon20, countryName: "Romania", },
        { sectionIcon: countryIcon21, countryName: "Sweden", },
        { sectionIcon: countryIcon22, countryName: "Switzerland", },
        { sectionIcon: countryIcon23, countryName: "United Kingdom", },
        { sectionIcon: countryIcon24, countryName: "United States", },
    ]
    const reviewData = [
        {
            content: "“One of my favorite things this year has been conversation with the people in the community Stark is building. Come join the Slack group - it’s seriously the best!”",
            sectionImg: sectionImg1,
            userName: 'Caitlyn Mayers',
            position: 'Creative Director',
        },
        {
            content: "“Cat, just a little appreciation note about how you run Stark's community. IMO it's one of the best-run content brands out there, from the tweets to the newsletter. Amazing work to you + the team!”",
            sectionImg: sectionImg2,
            userName: 'Paul Mederos',
            position: 'Designer',
        },
        {
            content: "“Oh, getting on this for sure! Thank you, Cat, for all you do for this community and those of us with accessibility needs.”",
            sectionImg: sectionImg3,
            userName: 'Derek Torsani',
            position: 'Designer',
        },
    ]
    return (
        <>
            <div className='community-page-country-section-container'>
                <div className='community-page-country-section-title'>
                    <h1>Community members from <span>over 30 different</span> countries</h1>
                </div>
                <div className='community-page-country-section-content'>
                    {
                        countryData?.map((data, index) => (
                            <div className='community-page-country-section-content-country-name' key={index}>
                                <img src={data?.sectionIcon} className='img-fluid' alt='country-flag' />
                                <p>{data?.countryName}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='community-page-user-review-section-content'>
                    {
                        reviewData?.map((data, index) => (
                            <div className='community-page-user-review-section-content-box' key={index}>
                                <div className='community-page-user-review-section-content-box-top-content'>
                                    <p>{data?.content}</p>
                                </div>
                                <div className='community-page-user-review-section-content-box-body'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                    <div className='community-page-user-review-section-content-box-right-body'>
                                        <p>{data?.userName}</p>
                                        <h4>{data?.position}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CommunityCountrySection
