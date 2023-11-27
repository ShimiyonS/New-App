import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../styles/Resource.css"
import ResourceNavBar from '../components/Resource/ResourceNavBar'

export default function ResourcePage() {
    return (
        <>
            <NavBar />
            {/* resource section 1 */}
            <div className="resource-behind">
                <div className="resource">
                    <div className="resource-text1">
                        Lorom ipsum dolor
                    </div>
                    <div className="resource-text2">
                        Case Study
                    </div>
                </div>
            </div>

            {/* resource section 2 */}

            <div className="resource-sec-2">
                <ResourceNavBar />
            </div>
            <Footer />
        </>
    )
}
