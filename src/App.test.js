// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// the component to test
import App from './App'

test('app rendered successfully', async () => {
  () => render(<App url="/company" />)
})
