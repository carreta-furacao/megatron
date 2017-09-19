import React from 'react'
import renderer from 'react-test-renderer'

import App from '../src/main'

fit('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toBeTruthy()
  expect(true).toBe(false);
})
