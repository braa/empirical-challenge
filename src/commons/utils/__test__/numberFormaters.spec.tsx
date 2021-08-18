import {formatUSD} from '../numberFormaters';

describe('WHEN calling formatUSD', () => {
    it('THEN should format the number', ()=>{
        expect(formatUSD(1234567)).toBe('$1,234,567.00');
    })
})
