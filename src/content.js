import React from 'react';
import style from './content.module.css';

const content = () => {
	return (
		<div className={style.addtask}>
			<div className={style.group}>
				<label for="title" className={style.label}>
					Task Title
				</label>
				<input class={style.input} type="text" placeholder="Task Title" id="title" />
			</div>

			<div className={style.group}>
				<label for="description" className={style.label}>
					Description
				</label>
				<input class={style.input} type="text" placeholder="Description" id="description" />
			</div>

			<div className={style.group}>
				<label for="date" className={style.label}>
					Due Date
				</label>
				<input class={style.input} type="date" placeholder="Due Date" id="date" />
			</div>

			<div className={style.group}>
				<label for="assignee" className={style.label}>
					Assignee
				</label>
				<input class={style.input} type="text" placeholder="Assignee" id="assignee" />
			</div>

			<div className={style.group}>
				<label for="reviewer" className={style.label}>
					Reviewer
				</label>
				<input class={style.input} type="text" placeholder="Reviewer" id="reviewer" />
			</div>

			<input type="button" value="Assign Task" className={style.add} />
		</div>
	);
};

export default content;
