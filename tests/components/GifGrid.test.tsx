import { render, screen } from "@testing-library/react";
// import { mocked } from 'ts-jest'
import { GifGrid } from '../../src/components';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Marvel';

    test('debe de mostrar el loading inicialemnete', () => {
        jest.mocked(useFetchGifs).mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Marvel',
                url: 'https://localhost/marvel.jpg'
            },
            {
                id: '123',
                title: 'DC',
                url: 'https://localhost/dc.jpg'
            }
        ]

        jest.mocked(useFetchGifs).mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2); 
    });
});