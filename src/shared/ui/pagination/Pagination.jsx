import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages, refetch }) => {
	const nextPage = async (e) => {
		if (currentPage < totalPages) {
			setCurrentPage((prev) => prev + 1);
			await refetch({ page: currentPage });
		}
	};

	const prevPage = async (e) => {
		if (currentPage > 1) {
			setCurrentPage((prev) => prev - 1);
			await refetch({ page: currentPage });
		}
	};

	return (
		<nav className='d-flex justify-content-center mt-3'>
			<ul className='pagination'>
				{/* Previous page */}
				<li className={`page-item ${styles.item}`}>
					<button className={`page-link ${styles.link}`} onClick={prevPage}>
						&lt; Zurück
					</button>
				</li>
				{/* Page numbers */}
				<li className='page-item disabled'>
					<span className='page-link color-body background-tertiary'>
						{currentPage}/{totalPages}
					</span>
				</li>
				{/* Next page */}
				<li
					className={`page-item ${styles.item}`}>
					<button className={`page-link ${styles.link}`} onClick={nextPage}>
						Weiter &gt;
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
