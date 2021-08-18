// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PositiveNegativeLabel from '../PositiveNegativeLabel';

describe('GIVEN an PositiveNegativeLabel with positive value', () => {
    beforeEach(() => {
      render(<PositiveNegativeLabel value={2.58} suffix='%' />);
    })

    describe('WHEN the component is rendered', () => {
      it('THEN should show the up icon', ()=>{
        expect(screen.getByTestId('up-icon')).toBeInTheDocument();
      })
      it('THEN should show the value', ()=>{
        expect(screen.getByText(/2.58/)).toBeVisible();
      })
      it('THEN should show the prefix', ()=>{
        expect(screen.getByText(/%/)).toBeVisible();
      })
    })
})

describe('GIVEN an PositiveNegativeLabel with negative', () => {
  beforeEach(() => {
    render(<PositiveNegativeLabel value={-3.77} />);
  })

  describe('WHEN the component is rendered', () => {
    it('THEN should show the up icon', ()=>{
      expect(screen.getByTestId('down-icon')).toBeInTheDocument();
    })
    it('THEN should show the value', ()=>{
      expect(screen.getByText(/3.77/)).toBeVisible();
    })
  })
})

