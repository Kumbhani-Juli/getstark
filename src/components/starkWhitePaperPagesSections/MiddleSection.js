import React from 'react'
import '../../assets/styles/starkWhitePaperSectionCSS/middleSection.css'

const MiddleSection = () => {
    const sectionData = [
        {
            title: "Executive Summary",
            contentData: [
                { content: <>Accessibility is a human right. Yet companies are struggling to meet the human and regulatory accessibility needs with existing approaches. A paradigm shift for digital accessibility management is necessary to meet the demands of the market, and build fully inclusive software services for the more than <a href=''>1.3 billion people with a disability.</a></> },
                { content: <>We as humans are no longer gated by the limits of technology but by the shortcomings of outdated approaches. The failure to fully consider and intentionally include people with respect to their individual needs has left <a href=''>96% of the internet inaccessible</a> and companies facing both high cost of retrofitting and legal risk for non-compliance. The current state means people with disabilities are actively excluded from accessing software services (e.g. shopping, banking, education, traveling, etc.) and being core contributors to economic and societal progress. That’s unacceptable.</> },
                { content: <>Software is the lifeblood of every major corporation. Without it, no scale is possible. Software is vital to internal efficiency and execution as well as connection to its customers. <strong>In a world of drastically accelerating deployment of software, the only sustainable path forward is to proactively manage digital accessibility across all departments of a company.</strong></> },
                { content: <><strong>We need a new approach to manage a company’s accessibility posture in the same transparent, real-time, and continuous way we manage privacy and security at scale.</strong> So that we’re not only hitting the bare minimum mark of legal compliance but creating sustainable processes that ensure accessibility is an essential, non-negotiable requirement of modern software.</> },
                {
                    content: <><strong>Stark has created an advanced operating model based on the use of a modern real-time platform that has...</strong></>,
                    contentList: [
                        { listTitle: "a) a central hub" },
                        { listTitle: "b) flexible compliance frameworks" },
                        { listTitle: "c) integrated end-to-end tooling" },
                    ]
                },
                { content: <>With this approach that has been proven to work to scale privacy and security practices in agile software development, <strong>a company will be able to accelerate time-to-compliance, time-to-market, and reduce both financial and legal risks.</strong> This scalable operating model is not only useful for large enterprise companies but enables businesses of all sizes to grow their accessibility maturity and deliver compliant, inclusive products with less overhead.</> },
            ]
        },
        {
            title: "Introduction",
            contentData: [
                { content: <>More than 5.3 billion people worldwide have internet access with more than 7 billion mobile devices being used around the globe to access digital services. Based on the <a href=''>latest reports from the World Health Organization (WHO)</a> more than 1.3 billion people live with at least one documented disability. <a href=''>Another industry report</a> estimates the number of people with disabilities to be 1.85 billion, which makes it a “<strong>market larger than China</strong>”. If we factor in additional health conditions such as those that appear in aging populations, it makes clear the drastically increasing need to make any and all software services fully accessible at all times.</> }
            ]
        }
    ]
    return (
        <>
            <div className='stark-white-paper-middle-section-container'>
                <div className='stark-white-paper-middle-section-title'>
                    <div className='stark-white-paper-middle-section-title-left-content'>
                        <span>authors</span>
                        <a href=''>Stark Lab, Inc.</a>
                        <p>Benedikt Lehnert, Michael Fouquet, Cat Noone, Oscar Müller, Cady Murg</p>
                    </div>
                    <div className='stark-white-paper-middle-section-title-right-content'>
                        <span>published</span>
                        <p>March 7, 2024</p>
                    </div>
                </div>
                <div className='stark-white-paper-middle-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div key={index}>
                                <h1>{data?.title}</h1>
                                {
                                    data?.contentData?.map((data, index) => (
                                        <div key={index}>
                                            <p>{data?.content}</p>
                                            {
                                                data?.contentList?.map((listData, index) => (
                                                    <li key={index}>{listData?.listTitle}</li>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MiddleSection
