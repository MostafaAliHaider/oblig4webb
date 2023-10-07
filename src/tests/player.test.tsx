
import Player from '@/components/Player';
import { usePlayers } from '@/components/usePlayers';
import {fireEvent, render, screen, renderHook, act} from '@testing-library/react';





describe('' ,() => {
    it('should print out the name', () => {
        render(<Player player ={'Mostafa'} />)
    
        const paragraph = document.querySelector('p')
        expect(screen.getByText('Player is: Mostafa')).toBeInTheDocument();
    })

    /* it('should count the times it gets called', () =>{
        const mock = vitest.fn();
        render(<Player player='hehe' onClickHandler={mock} />)
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(mock).toHaveBeenCalledTimes(1)
        
    }) */

    it('should updates state on button click', () => {
        const mockOnHandler = vitest.fn();
        render(<Player player='hehehehehe' onClickHandler={mockOnHandler}/>)
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(mockOnHandler).toHaveBeenCalledOnce;
    })

    it('should do whatever', () =>{
        const { result } = renderHook(() => usePlayers())
        
        
        expect(result.current.players).toBe('SUIII')

        act(() =>{
            result.current.onClickHandler()
        })
        
        expect(result.current.players).toBe('Im Yahye')
    })
})