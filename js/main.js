import posts from './data.js'
import renderPosts from './renderPosts.js'

// console.log(posts);

renderPosts(posts);

/*

renderPosts ()
    for -> renderSinglePosts()
        renderHeader()
        renderContent()
            renderContentText()
            renderContentGallery()
        renderFooter()

*/