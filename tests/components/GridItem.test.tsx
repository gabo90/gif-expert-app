import { render, screen } from "@testing-library/react";
import { GridItem } from '../../src/components';

describe('Pruebas en <GridItem/>', () => {

    const title = 'Marvel';
    const url = "https://marvel.com/image.jpg";

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe contener la url y el alt correspondiente', () => {
        render(<GridItem title={title} url={url} />);
        
        const {src, alt}: HTMLImageElement = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe mostrar el titulo en el componente', () => {
        render(<GridItem title={title} url={url} />);
        
        expect(screen.getByText(title)).toBeTruthy();
    });
});