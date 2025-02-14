const messages = [
    "Chắc chưa?",
    "Thật luôn :((",
    "Hông đùa mà đúng hôg?",
    "Hoooooi màaaaaaa",
    "Suy nghĩ lại ikkkkkkk!",
    "Trúc Trúc hoogn đi, Fog buồn đó T-T",
    "Buồn luônnnnn...",
    "Rất rất buồn luônnnnn...",
    "Ok fine, Kìn chán nà...",
    "Giỡn hoiffoiiiii, đồng ý chứ gìiiiii! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Tăng kích thước nút Yes
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Ẩn nội dung hiện tại
    document.querySelector(".question-container").style.display = "none";

    // Hiển thị nội dung trang "yes"
    const yesContent = document.createElement("div");
    yesContent.classList.add("yes-content");
    yesContent.innerHTML = `
        <div class="gif_container">
            <img src="./media/kiss-love.gif">
        </div>
        <audio id="valentineMusic" autoplay>
            <source src="./media/music.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <h1 class="header_text">Biết Trúc Trúc sẽ đồng ý màaaaaa! ❤️</h1>
    `;
    document.body.appendChild(yesContent);

    // Phát nhạc
    const audio = document.getElementById("valentineMusic");
    audio.play().catch(error => console.log("Tự động phát bị chặn, yêu cầu tương tác người dùng."));
}
