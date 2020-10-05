function renderContentGallery(data) {
    //validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama informacija.');
        return ``;        
    };
    
    //logika
    const maxGallerySize = 4;
    const visiblePhotoCount = data.length > maxGallerySize ? maxGallerySize : data.length;
    
    let imagesHTML = '';
    for (let i = 0; i < visiblePhotoCount; i++) {

        imagesHTML += `<img src='./img/posts/${data[i]}' alt='User posr gallery picture'>`
    }    

    let extraHTML = ''
    if (data.length > maxGallerySize) {
        extraHTML = `<div class ='extra'>+${data.length - visiblePhotoCount}</div>`
    }

    console.log(data);
    return `<div class = 'gallery gallery-${visiblePhotoCount}'>
            ${imagesHTML}
            ${extraHTML}
            </div>`;
    
}

export default renderContentGallery;