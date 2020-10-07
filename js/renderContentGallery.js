function renderContentGallery(data) {
    //validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija, reikia duoti tinkama informacija.');
        return ``;        
    };
    
    //logika
    const maxGallerySize = 4;
    const totalPhotoCount = data.length;
    const visiblePhotoCount = data.length > maxGallerySize ? maxGallerySize : data.length;
 
    let extraAttribute = ''
    if (data.length > maxGallerySize) {
        extraAttribute = `data-extra = "${totalPhotoCount - maxGallerySize}"`;
    }   

    let imagesHTML = '';
    for (let i = 0; i < visiblePhotoCount; i++) {
        if (i===visiblePhotoCount-1) {
        imagesHTML +=  `<div class ='img' ${extraAttribute}>
                            <img src='./img/posts/${data[i]}' alt='User posr gallery picture'>
                        </div>`            
        } else {
            imagesHTML +=  `<div class ='img'>
            <img src='./img/posts/${data[i]}' alt='User posr gallery picture'>
        </div>`

    }    
}

    // console.log(data);
    return `<div class = 'gallery gallery-${visiblePhotoCount}'>
            ${imagesHTML}
            </div>`;
    
}

export default renderContentGallery;