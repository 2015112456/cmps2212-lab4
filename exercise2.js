// exercise2.js
const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

// -- Add a tag when Enter is pressed --
tagInput.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter') return;

    const value = tagInput.value.trim();
    if (!value) return;

    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.innerHTML = `${value} <span class="tag-remove">&times;</span>`;
    tagContainer.appendChild(tag);
    tagInput.value = '';
});

// -- Remove a tag via delegation --
tagContainer.addEventListener('click', function(event) {
    if (event.target.matches('.tag-remove')) {
        const tag = event.target.closest('.tag').remove();
    }
});