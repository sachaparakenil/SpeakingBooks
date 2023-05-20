const book = document.querySelector('.succesful');
let output = '';
books_summ.forEach(element => {
    output += `
    <div class="box">
        <p class="embed-text primary">${element.Title}</p>
        <div class="responsive-youtube">
        <div id="youTube-load"></div>
        <iframe width="560" height="315" src="${element.youTube_src}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
        </div>
        <a href="${element.download}"
        download=""><i class="fas fa-cloud-download-alt"></i> Download Audio</a>
    </div>
    `
});
book.innerHTML = output;