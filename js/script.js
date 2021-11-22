document.addEventListener('DOMContentLoaded', function () {
    const submitBook = document.getElementById('inputBook');
    const searchBook = document.getElementById('searchBook');
    const message = document.querySelector('.message_container');

    submitBook.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
        message.removeAttribute('hidden');
    });

    searchBook.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputSearch = document.getElementById('searchBookTitle').value;
        bookSearch(inputSearch);
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }

    document.getElementById('buttonClose').addEventListener('click', function () {
        message.setAttribute('hidden', true);
    });
});

document.addEventListener('ondatasaved', () => {
    console.log('Data berhasil disimpan.');
});

document.addEventListener('ondataloaded', () => {
    refreshDataFromBooks();
});
