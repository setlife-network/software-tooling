import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Input } from '../'
import Readme from './readme/Input.md'

storiesOf('Components|Input', module)
    .addDecorator(withDocs(Readme))
    .add(
        'Input Component',
        () => (
            <div>
                <Input mr='1rem' placeholder='Placeholder' />
                <Input mr='1rem' value='Input with text' />
                <Input mr='1rem' placeholder='Blue border' borderColor='blue' />
                <Input mr='1rem' value='Green text' color='green' />
                <Input mr='1rem' placeholder='disabled' disabled />
            </div>
        )
    )