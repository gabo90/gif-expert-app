import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from '../../src/hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGis', () => { 
    test('debe de regresar el estadoinicial', () => {
        const {result} = renderHook(() => useFetchGifs('Marvel'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes e isLoading en false', async() => {
        const {result} = renderHook(() => useFetchGifs('Marvel'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy  ();
    });
 });