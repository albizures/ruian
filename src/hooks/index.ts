import React from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const useOnChange = (set: (value: unknown) => void) => {
	return React.useCallback(
		(event: ChangeEvent) => {
			const { value, checked, type } = event.target;
			if (type === 'number') {
				set(Number(value));
			}
			if (type === 'checkbox') {
				set(checked);
			} else {
				set(value);
			}
		},
		[set],
	);
};

export { useOnChange };
