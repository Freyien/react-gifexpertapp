import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( 
        <GifGridItem title={ title } url={ url } /> 
    );


    test('Debe mostrar el componente de forma correcta', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar un parráfo con el "title"', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    })

    test('debe mostrar una imagen con la "url" en el atributo "src" y "alt"', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })


    test('Debe tener la clase "animate__fadeIn"', () => {
        
        const div = wrapper.find('div');

        expect( div.hasClass('animate__fadeIn') ).toBe( true );

    })
    
    
    
    
    
})


