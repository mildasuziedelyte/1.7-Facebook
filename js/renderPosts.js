function renderPosts(data) {
    //validacija

    //logika, kuri generuoja turini
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += `<div class="post">
                        <header>
                        ${post.author.name} ${post.author.lastname}
                        </header>
                        <div>
                        ${post.content.text}
                        </div>
                        <div>LIKE + COMMENT</div>
                        </div>`;
    }

    console.log(HTML);

    //susirandame elementa, kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');
    console.log(feedDOM);

    //i ta elementa ikeliame HTML kintamojo reiksme
    feedDOM.innerHTML = HTML;
}

export default renderPosts;