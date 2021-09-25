import useOnlyChangeEffect from './use-only-change-effect';
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import "regenerator-runtime/runtime";

describe('useOnlyChangeEffect', () => {
	test('it should call callback function only when value changes and not on mount', async () => {
		const cb = jest.fn();

		const Component = () => {
			const [counter, setCounter] = React.useState(0);
			useOnlyChangeEffect(cb, [counter]);
			return <button onClick={() => setCounter(val => val + 1)} />;
		};

		render(<Component />);
		expect(cb).not.toHaveBeenCalled();

		fireEvent.click(screen.getByRole('button'));

		expect(cb).toHaveBeenCalledTimes(1);
	});
});
