import renderHeader from './renderHeader.js';
import renderContent from './renderContent.js';
import renderFooter from './renderFooter.js';

function renderSinglePost(data) {
    console.log(data);
    return `<div class="post">
            ${renderHeader()}
            ${renderContent()}
            ${renderFooter()}
            </div>`;
}

export default renderSinglePost;

// HTML += `<div class="post">
// <header>
// ${post.author.name} ${post.author.lastname}
// </header>
// <div>
// ${post.content.text}
// </div>
// <div>LIKE + COMMENT</div>
// </div>`;