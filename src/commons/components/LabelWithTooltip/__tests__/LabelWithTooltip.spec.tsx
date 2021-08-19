// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import LabelWithTooltip from '../LabelWithTooltip';
import userEvent from '@testing-library/user-event';

describe('GIVEN an LabelWithTooltip', () => {
    const text = 'my text';
    const tooltip = 'my tooltip';
    beforeEach(() => {
      render(<LabelWithTooltip text={text} tooltip={tooltip} />);
    })

    describe('WHEN the component is rendered', () => {
      it('THEN should show the text', ()=>{
        expect(screen.getByText(text)).toBeVisible();
      })
      it('THEN should show the tooltip icon', ()=>{
        expect(screen.getByTestId('tooltip-icon')).toBeVisible();
      })
      // it('THEN should show the tooltip icon', ()=>{
      //   userEvent.hover(screen.getByLabelText(/tooltip-icon/i))
      //   expect(screen.getByText(tooltip)).toBeInTheDocument()
      // })
    })
})

