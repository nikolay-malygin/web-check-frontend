import { LastProjectCard } from 'entities/project/ui';
import React from 'react';
import { getAccessToken } from 'shared/lib/helpers';
import useLastProjectsQuery from '../api/queries';

const LastProjectsContainer = () => {
	const { lastProjects } = useLastProjectsQuery(getAccessToken());

	return (
		<div className='container mt-5'>
			<div className='row gy-3 justify-content-center'>
				{lastProjects.map((project) => (
					<LastProjectCard key={project.project_id} project={project} />
				))}
			</div>
		</div>
	);
};

export default LastProjectsContainer;
