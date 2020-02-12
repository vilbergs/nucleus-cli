import React from 'react'
import { render, cleanup } from '@alma-utils/test-utils'
import MyModule from './MyModule'

afterEach(cleanup)

const props = {}

test('MyModule renders', () => {
    const { container } = render(<MenuItem {...props} />)

    expect(container.firstChild).toBeTruthy()
})
