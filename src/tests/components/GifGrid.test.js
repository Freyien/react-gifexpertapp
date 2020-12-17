import { shallow } from "enzyme"
import '@testing-library/jest-dom'

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Naruto';


    test('Debe renderearse de forma correcta', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/any_image.jpg',
            title: 'Título del gif'
        },{
            id: '123',
            url: 'https://localhost/any_image.jpg',
            title: 'Título del gif'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
    
        const wrapper = shallow( <GifGrid category={ category }/> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

    })
    
    


})


