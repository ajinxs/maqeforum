import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("header renders with correct text", () => {
  const component = render(<Header/>);
  const headerElement = component.getByTestId('header');

  expect(headerElement.textContent).toBe("MAQE Forum");
})
