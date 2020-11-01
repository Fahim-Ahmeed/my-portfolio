import React from 'react';

const Education = () => {
    return (
        <div className="col-md-3 col-sm-8 about-section">
            <h4>Education</h4>
            <div className="justify-content-center row">
                <h6 style={{ borderBottom: '2px solid #cf386b', paddingBottom: '2px', display: 'inline' }}>Undergraduate</h6>
            </div>
            <p>Bachelor of Science in Computer Science Engineering</p>
            <div className="justify-content-center row">
                <h6 style={{ borderBottom: '2px solid #cf386b', paddingBottom: '2px', display: 'inline' }}>HSC</h6>
            </div>
            <h6>Background:<span><small>Science</small></span></h6>
            <h6>Result:<span><small>GPA 4:94</small></span></h6>
        </div>
    );
};

export default Education;