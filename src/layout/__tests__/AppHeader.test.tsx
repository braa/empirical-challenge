// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import AppHeader from '../AppHeader';
import { server } from '../../mocks/server'


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('GIVEN an AppHeader', async () => {
    beforeEach(async () => {
      render(<AppHeader />);
    })

    describe('WHEN the component is rendered', () => {
      it('THEN should show the app title', ()=>{
        expect(screen.getByText('Crypto App')).toBeVisible();
      })
    })
})
