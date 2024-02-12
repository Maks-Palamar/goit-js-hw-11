export default function renderCard(cards) {
const gallery = document.querySelector('.cards');
    gallery.innerHTML = '';
      cards.forEach(card => {
        const cardHTML =
            `<li class="card"> 
                <a href="${card.largeImageURL}">
                    <img src="${card.webformatURL}" alt="${card.tags}" />
                </a>
                <div>
                        <p>Likes: ${card.likes}</p>
                        <p>Views: ${card.views}</p>
                        <p>Comments: ${card.comments}</p>
                        <p>Downloads: ${card.downloads}</p>
                </div>
             </li>`;
        gallery.innerHTML += cardHTML;
    })
}