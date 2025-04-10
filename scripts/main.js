// let myReq = new XMLHttpRequest();
// myReq.open("GET", "../data/data.json")
// myReq.send()

// console.log(myReq.responseText);

// Fetch data from JSON file
async function loadBoycottData() {
    try {
        const response = await fetch('../data/data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayBoycottList(data.boycottList);
    } catch (error) {
        console.error('Error loading boycott data:', error);
        document.getElementById('flex-container').innerHTML = 
            '<p class="error">Failed to load boycott list. Please try again later.</p>';
    }
}

// Display data in HTML
function displayBoycottList(items) {
    const container = document.getElementById('flex-container');
    
    container.innerHTML = items.map(item => `
        <div class="flex-item">
            <img src="${item["image"]}" width="100px" height="100px">
            <p>${item["en_brand_name"]}</p>
            <p>${item["ar_brand_name"]}</p>
        </div>
    `).join('');

    // for (let item of items) {
    //     let childDiv = document.createElement("div");

    //     let image = document.createElement("img");
    //     image.src = item["title"];

    //     let p1 = document.createElement("p");
    //     p1.innerText = item["id"];

    //     let p2 = document.createElement("p");
    //     p2.innerText = item["author"];

    //     let p3 = document.createElement("p");
    //     p3.innerText = item["category"];

    //     childDiv.append(h2, p1, p2, p3);
        
    //     parentDiv.appendChild(childDiv);
    // }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadBoycottData);
