// JavaScript functionality for grocery store website

// Function to display the list of groceries
function displayGroceries(groceries) {
    const groceryList = document.getElementById('grocery-list');
    groceryList.innerHTML = '';
    groceries.forEach(grocery => {
        const listItem = document.createElement('li');
        listItem.textContent = grocery;
        groceryList.appendChild(listItem);
    });
}

// Sample groceries data
const groceries = ['Milk', 'Bread', 'Eggs', 'Fruits', 'Vegetables'];

displayGroceries(groceries);