/**
 * Created by METALuga on 9/25/2016.
 */

var deleteBook = function (title) {
    fetch('books', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': title
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        }).
        then(data => {
            console.log(data);
        })
};

var updateBook = function (newAuthor, newTitle, itemToUpdate) {
    fetch('books', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'itemToUpdate': itemToUpdate,
            'author': newAuthor,
            'title': newTitle
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log(data);
            window.location.reload();
        })
};

document.addEventListener("DOMContentLoaded", function (event) {

    var delButtons = document.getElementsByClassName('js-del');
    var updateButtons = document.getElementsByClassName('js-update');

    for (var i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener('click', function (e) {
            var title = e.target.parentNode.childNodes[5].firstChild.innerHTML;
            deleteBook(title);
            window.location.reload();
        });

        updateButtons[i].addEventListener('click', function (e) {
            var newAuthor = prompt('New author: ');
            var newTitle = prompt('New title: ');
            var author = e.target.parentNode.childNodes[3].firstChild.innerHTML;
            var title = e.target.parentNode.childNodes[5].firstChild.innerHTML;

            if (newAuthor.length < 1 && newTitle.length > 1) {
                updateBook(author, newTitle, title);
            }
            else if (newAuthor.length > 1 && newTitle.length < 1) {
                updateBook(newAuthor, title, title);
            }
            else {
                updateBook(newAuthor, newTitle, title);
            }
        });
    }
});
