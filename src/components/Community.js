import React from 'react'
import CommunityTopSection from './communityPageSections/CommunityTopSection'
import CommunityGallerySection from './communityPageSections/CommunityGallerySection'
import CommunityCountrySection from './communityPageSections/CommunityCountrySection'
import CommunityHostingJoiningSection from './communityPageSections/CommunityHostingJoiningSection'
import CommunityGlobalSection from './communityPageSections/CommunityGlobalSection'

const Community = () => {
    return (
        <>
            <CommunityTopSection />
            <CommunityGallerySection />
            <CommunityCountrySection />
            <CommunityHostingJoiningSection />
            <CommunityGlobalSection />
        </>
    )
}

export default Community
