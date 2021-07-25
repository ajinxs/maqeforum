import React from 'react'
import Location from './Location'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('render location of the user',() => {
    const component = render(<Location/>);
    const locationElement = component.getByTestId('location')

    expect(locationElement.textContent).toBe("Asia/Bangkok");
})