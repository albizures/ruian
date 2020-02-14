import React from 'react';

const getLocalIndex = (name: string) => {
	const lastIndex = Number(localStorage.getItem(name));

	return Number.isNaN(lastIndex) ? 0 : lastIndex;
};

const useLocalIndex = (name: string, action: (value: number) => void) => {
	React.useEffect(() => {
		const lastIndex = getLocalIndex(name);

		action(lastIndex);
	}, [action]);

	return React.useCallback(
		(index: number) => {
			localStorage.setItem(name, String(index));
		},
		[name],
	);
};

export { useLocalIndex };
