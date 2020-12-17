import { renderHook } from "@testing-library/react-hooks";

import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Pruebas en hook "useFetchGifs"', () => {

    
    test('debe retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Rei Ayanami' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate;

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();

    })

    test('debe retornar un arreglo de imgs y loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Naruto' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();

    })
    
    


})

