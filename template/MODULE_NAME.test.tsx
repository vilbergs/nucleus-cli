import React from 'react'
import { render, cleanup } from '@alma-utils/test-utils'
import %MODULE_NAME% from './%MODULE_NAME%'

afterEach(cleanup)

const props = {}

test('%MODULE_NAME% renders', () => {
    const { container } = render(<MenuItem {...props} />)

    expect(container.firstChild).toBeTruthy()
})
