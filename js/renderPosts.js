import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);
    }

    const feedDOM = document.querySelector('main');
    feedDOM.innerHTML = HTML;

    // susirasti dominancius elementus .see-more
    const allSeeMoreDOM = document.querySelectorAll('.post .more');

    // pradedam stebeti paspaudimus ant ju
    for (let i = 0; i < allSeeMoreDOM.length; i++) {
        const seeMore = allSeeMoreDOM[i];
        seeMore.addEventListener('click', () => {
            seeMore.closest('.content').classList.add('show');
        });
    }

    // susirasti dominancius elementus .see-less
    const allSeeLessDOM = document.querySelectorAll('.post .less');

    // pradedam stebeti paspaudimus ant ju
    for (let i = 0; i < allSeeLessDOM.length; i++) {
        const seeLess = allSeeLessDOM[i];
        seeLess.addEventListener('click', () => {
            const contentDOM = seeLess.closest('.content');
            contentDOM.classList.remove('show');

            //issiaiskinti kokiame aukstyje yra .post elementas, kur yra jo virsus
            const postDOM = contentDOM.closest('.post');
            const postHeightPosition = postDOM.offsetTop;
                //scrolliname i nurodyta auksti
                scrollTo({
                    top: postHeightPosition - 40,
                    behavior:'smooth'});

        });
    }

}

export default renderPosts;