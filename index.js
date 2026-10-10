var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "john.png"
    },
    {
        "name": "Jane Smith",
        "gender": "Female",
        "image": "jane.png"
    }
];

let currentIndex = 0;

function toggle() {
    console.log("hii from js : toggle");
    
    currentIndex = (currentIndex === 0) ? 1 : 0;
    let currentUser = users[currentIndex];

    document.getElementById("user-name").innerText = currentUser.name;
    document.getElementById("user-gender").innerText = currentUser.gender;
    document.getElementById("user-avatar").src = currentUser.image;
}