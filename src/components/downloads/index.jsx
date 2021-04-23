import React from 'react';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

const Downloads = () => {
	return (
		<div className='downloads'>
			<Navbar />
			<div
				className='heading'
				style={{ backgroundImage: `url("/downloads/bg.png")` }}>
				<h1>Downloads</h1>
			</div>
			<div className='content container'>
				<h2>
					Check our <span style={{ color: '#27ae60' }}>Documents</span>
				</h2>
				<div className='download-list'>
					<div className='section'>
						<div className='table-heading'>
							<h2>Brochure</h2>
						</div>
						<div className='list'>
							<a
								href='/downloads/placement-brochure.pdf'
								download='placement-brochure-2020-2021'>
								Placement Brochure 2020-21
							</a>
							{/* <a href='' download='brochure'>
								Lorem, ipsum.
							</a>
							<a href='' download='brochure'>
								Lorem, ipsum.
							</a> */}
						</div>
					</div>
					<div className='section'>
						<div className='table-heading'>
							<h2>Training Documents</h2>
						</div>
						<div className='list'>
							<a
								href=''
								// download=''
							>
								Campus Intern Form (CIF)
							</a>
						</div>
					</div>
					<div className='section'>
						<div className='table-heading'>
							<h2>Placement Documents</h2>
						</div>
						<div className='list'>
							<a
								href='/downloads/invitation-doc.pdf'
								download='invitation-doc-2020-2021'>
								Company Invitation Document
							</a>
							<a
								href='/downloads/campus-recruitment-form.docx'
								download='campus-recruitment-form'>
								Campus Recrutment Form (CRF)
							</a>
							<a
								href='/downloads/placement-policy.pdf'
								download='placement-policy-2020-2021'>
								Placement Policy 2020-2021
							</a>
							<a
								href='/downloads/undertaking-opt-out.pdf'
								download='undertaking-opt-out-2020-2021'>
								Undertaking for students who wish to opt out for placements
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Downloads;
