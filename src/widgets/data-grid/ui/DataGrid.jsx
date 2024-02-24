import React from 'react';
import { convertNumericToText } from 'shared/lib/helpers';
import styles from './DataGrid.module.css';

const DataGrid = ({ data, config, keyExtractor }) => {
	return (
		<div className='table-responsive'>
			<table className={`table table-bordered ${styles.striped_table}`}>
				<thead className={styles.tableHeader}>
					<tr>
						{config.columns.map((column) => (
							<th key={column.key}>{column.label}</th>
						))}
						{config.actions.length > 0 && <th>Aktion</th>}
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((item) => {
							const key = keyExtractor ? keyExtractor(item) : item.id;
							return (
								<tr key={key}>
									{config.columns.map((column) => (
										<td key={column.key}>
											{convertNumericToText(item[column.key])}
										</td>
									))}
									{/* Actions */}
									{config.actions.length > 0 && (
										<td className='d-flex gap-3 justify-content-center'>
											{config.actions.map((action, index) => (
												<React.Fragment key={index}>
													{action(key)}
												</React.Fragment>
											))}
										</td>
									)}
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default DataGrid;
