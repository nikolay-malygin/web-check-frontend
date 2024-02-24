import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/consts';

const LastProjectCard = ({ project }) => {
	return (
		<div className='col-12 col-md-6 col-xl-4'>
			<Link
				to={ROUTES.projectDetail + `/${project.project_id}`}
				className='text-decoration-none'>
				<div className='background-secondary border-tertiary rounded-3 p-3'>
					<h5>{project.project_name}</h5>
					<p className='truncate-text'>{project.project_description}</p>
					{project.is_finished ? (
						<span className='badge background-green fw-medium'>Abgeschlossen</span>
					) : (
						<span className='badge background-tertiary p-2 color-body'>
							Nicht abgeschlossen
						</span>
					)}
				</div>
			</Link>
		</div>
	);
};

export default LastProjectCard;
