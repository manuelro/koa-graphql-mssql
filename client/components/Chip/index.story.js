import React from 'react'
import { storiesOf } from '@storybook/react'
import Chip from './'

storiesOf('Chip', module).add('with text', () => {
  return <Chip>Success</Chip>
})