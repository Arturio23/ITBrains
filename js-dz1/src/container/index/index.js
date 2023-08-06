// Sample data for history
const history = ['https://www.example.com', 'https://www.example2.com'];

// Function to handle "Go" button click event
function handleGoButtonClick() {
    const urlInput = document.querySelector('.url-input');
    const url = urlInput.value;

    if (url.trim() !== '') {
        // Add the current URL to history
        history.push(url);

        // Update history list
        renderHistory();

        // Navigate to the entered URL
        window.location.href = url;
    }
}

// Function to handle "Back" button click event
function handleBackButtonClick() {
    if (history.length > 1) {
        // Remove the current URL from history
        history.pop();

        // Update history list
        renderHistory();

        // Get the previous URL from history and navigate to it
        const previousURL = history[history.length - 1];
        window.location.href = previousURL;
    }
}

// Function to handle "Forward" button click event
function handleForwardButtonClick() {
    // Get the next URL from history and navigate to it
    const currentIndex = history.indexOf(window.location.href);
    if (currentIndex !== -1 && currentIndex < history.length - 1) {
        const nextURL = history[currentIndex + 1];
        window.location.href = nextURL;
    }
}

// Function to handle "Reload" button click event
function handleReloadButtonClick() {
    // Reload the current page
    window.location.reload();
}

// Function to handle "Home" button click event
function handleHomeButtonClick() {
    // Navigate to the first URL in history (home page)
    const homeURL = history[0];
    window.location.href = homeURL;
}

// Function to render history list
function renderHistory() {
    const historyList = document.querySelector('.history-list');
    historyList.innerHTML = '';

    history.forEach((url) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.textContent = url;
        listItem.appendChild(anchor);
        historyList.appendChild(listItem);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', renderHistory);

document.querySelector('.go-btn').addEventListener('click', handleGoButtonClick);
document.querySelector('.back-btn').addEventListener('click', handleBackButtonClick);
document.querySelector('.forward-btn').addEventListener('click', handleForwardButtonClick);
document.querySelector('.reload-btn').addEventListener('click', handleReloadButtonClick);
document.querySelector('.home-btn').addEventListener('click', handleHomeButtonClick);