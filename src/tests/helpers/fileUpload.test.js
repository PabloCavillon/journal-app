
import cloudinary from 'cloudinary';
const { fileUpload } = require("../../helpers/fileUpload");

cloudinary.config({ 
    cloud_name: 'cavillon', 
    api_key: '188591111541785', 
    api_secret: 'T3fJzP-2l7hAcRELYh2LZKKkZrY' 
});

describe('Pruebas en fileUpload', () => {

   /* test('Debe de cargar un archivo y retornar el URL', async (done) => { 

        const resp = await fetch('https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg');
        const blob = await resp.blob();

        const file = new File([blob],'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            done();
        });
    })*/

    test('Debe de retornar un error', async () => { 
        const file = new File([],'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })

}) 