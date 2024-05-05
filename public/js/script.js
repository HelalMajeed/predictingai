document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.getElementById('buttonContainer');
    const subButtonContainer = document.getElementById('subButtonContainer');
    const searchBar = document.getElementById('search');
    const searchButtonContainer = document.getElementById('searchButtonContainer');
    let searchButton = null;
    var active = 0;
    buttonContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('category-button')) {
            const clickedButton = event.target;
            const category = clickedButton.getAttribute('data-category');
            showSubButtons(category);
            updateSearchBarStyle(category);
            toggleActiveCategory(clickedButton);
            updateSearchBarState();
        }
    });
    subButtonContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('sub-category-button')) {
            toggleActiveButton(event.target);
            updateSearchBarState();
        }
    });
    function showSubButtons(category) {
        subButtonContainer.innerHTML = '';
        let subButtons = [];
        switch (category) {
            case 'sport':
                subButtons = ['Football', 'Basketball'];
                break;
            case 'exam':
                subButtons = ['GRE', 'TOEFL', 'IELTS', 'SAT', 'ACT'];
                break;
            case 'study':
                subButtons = ['Math', 'Computer Scince', 'Physics'];
                break;
            default:
                subButtons = [];
                break;
        }
        subButtons.forEach(buttonText => {
            const button = createButton(buttonText, 'sub-category-button');
            subButtonContainer.appendChild(button);
        });
    }
    function updateSearchBarStyle(category) {
        switch (category) {
            case 'sport':
                searchBar.style.backgroundColor = '#007bff43'; 
                searchBar.style.color = '#fff';
                break;
            case 'study':
                searchBar.style.backgroundColor = '#28a745'; 
                searchBar.style.color = '#fff';
                break;
            case 'exam':
                searchBar.style.backgroundColor = '#ffee005f'; 
                searchBar.style.color = '#fff';
                break;
            case 'weather':
                searchBar.style.backgroundColor = '#ff00005f';
                searchBar.style.color = '#212529'; 
                break;
            default:
                searchBar.style.backgroundColor = '';
                searchBar.style.color = '';
                break;
        }
    }
    function toggleActiveCategory(clickedButton) {
        const categoryButtons = buttonContainer.querySelectorAll('.category-button');
        categoryButtons.forEach(button => {
            if (button === clickedButton) {
                button.classList.add('active');
                searchBar.style.display = "none";
            } else {
                button.classList.remove('active');
                searchBar.style.display = "none";
            }
        });
        updateSearchBarState();
    }


    function toggleActiveButton(clickButton) {
        subButtonContainer.classList.toggle('active');
        if (subButtonContainer.classList.contains('active')) {
            searchBar.style.display = "flex";
            searchBar.style.justifyContent = "center";
        } else {
            searchBar.style.display = "none";
        }
        ///////////////// sub button activity here ////////////////////////
        const isActive = clickButton.classList.contains('active');
        if (isActive) {
            clickButton.classList.remove('active');
            console.log('not active')
        } else {
            clickButton.classList.add('active');

            console.log('active')
        }
        console.log(isActive);
        updateSearchBarState();
    }

    searchBar.addEventListener('input', function () {
        updateSearchBarState();
    });
    function updateSearchBarState() {
        const searchValue = searchBar.value.trim(); 
        const searchButtonContainer = document.getElementById('searchButtonContainer');

        if (searchValue !== '') {
            if (!searchButton) {
                searchButton = createButton('Search', 'search-button');
                searchButtonContainer.appendChild(searchButton);
            }
            searchButton.style.display = 'flex'; 
            searchButton.style.justifyContent = 'center'; 
        } else {
            // if searchValue is empty, hide the search button
            if (searchButton) {
                searchButtonContainer.removeChild(searchButton);
                searchButton = null;
            }
        }
    }

    function createButton(text, className) {
        const button = document.createElement('button');
        button.textContent = text;
        button.type = 'button';
        button.classList.add(className);
        return button;
    }
});
