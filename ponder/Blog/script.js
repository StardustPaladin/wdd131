/* Dynamic article rendering using the provided articles array.
   Adds each article into the #articles container so new items
   can be added to the array without editing HTML. */

const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

function createArticleElement(a) {
  const article = document.createElement('article');
  article.className = 'book-entry';

  const aside = document.createElement('aside');
  aside.className = 'book-meta';
  aside.setAttribute('aria-label', 'Article details');
  aside.innerHTML = `
    <time datetime="${new Date(a.date).toISOString().slice(0,10)}">${a.date}</time>
    <div class="ages">${a.ages}</div>
    <div class="genre">${a.genre}</div>
    <div class="rating" aria-hidden="true">${a.stars}</div>
  `;

  const section = document.createElement('section');
  section.className = 'book-content';
  section.setAttribute('aria-labelledby', `title-${a.id}`);
  section.innerHTML = `
    <h2 id="title-${a.id}">${a.title}</h2>
    <figure>
      <img src="${a.imgSrc}" alt="${a.imgAlt}" width="220" height="320" loading="lazy" />
    </figure>
    <p>${a.description}</p>
  `;

  article.appendChild(aside);
  article.appendChild(section);
  return article;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('articles');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (!container) return;
  articles.forEach(a => container.appendChild(createArticleElement(a)));
});
