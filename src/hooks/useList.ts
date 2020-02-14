import React from 'react';

interface Config<T> {
	initialIndex?: number;
	list: T[];
	loop?: boolean;
	changeWithKeys?: boolean;
}

const useList = <T>(config: Config<T>) => {
	const {
		initialIndex = 0,
		list,
		loop = false,
		changeWithKeys = false,
	} = config;
	const [index, setIndex] = React.useState(initialIndex);
	const current = list[index];
	const prev = list[index - 1];
	const next = list[index + 1];

	const selectNext = () => {
		const newIndex = index + 1;
		if (newIndex !== list.length) {
			setIndex(newIndex);
		} else if (loop) {
			setIndex(0);
		}
	};

	const selectPrev = () => {
		const newIndex = index - 1;
		if (newIndex !== -1) {
			setIndex(newIndex);
		} else if (loop) {
			setIndex(list.length - 1);
		}
	};

	return {
		index,
		prev,
		current,
		next,
		selectNext,
		selectPrev,
		setIndex,
	};
};

export { useList };
