import posts from './data.js'
import renderPosts from './renderPosts.js'

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