// Function to update the clock
function updateClock() {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;  // Convert 24-hour format to 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("time").innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay
updateClock();

// Search engine functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');
const loadingAnimation = document.getElementById('loading-animation');

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        loadingAnimation.style.display = 'block';
        setTimeout(() => {
            window.location.href = `https://www.google.com/search?q=${searchQuery}`;
        }, 1000);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            loadingAnimation.style.display = 'block';
            setTimeout(() => {
                window.location.href = `https://www.google.com/search?q=${searchQuery}`;
            }, 1000);
        }
    }
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
});

// Autocomplete suggestions
const autocompleteSuggestions = document.getElementById('autocomplete-suggestions');

searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        // Get autocomplete suggestions from API
        fetch(`https://api.example.com/autocomplete?q=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                autocompleteSuggestions.innerHTML = '';
                data.forEach(suggestion => {
                    const suggestionElement = document.createElement('div');
                    suggestionElement.textContent = suggestion;
                    autocompleteSuggestions.appendChild(suggestionElement);
                });
            });
    } else {
        autocompleteSuggestions.innerHTML = '';
    }
});

window.addEventListener('beforeunload', () => {
    searchInput.value = '';
});

// searching 
searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        searchInput.classList.add('searching');
        // Rest of your code here
    }
});

// video 
const videoSearchButton = document.getElementById('video-search-button');

videoSearchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        const videoPlatform = document.querySelector('.video-search-dropdown-content a:hover');
        if (videoPlatform) {
            const videoPlatformUrl = videoPlatform.href;
            window.location.href = videoPlatformUrl + searchQuery;
        }
    }
});