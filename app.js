const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DreamBoard</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #fff5f7;
    color: #444;
}

header {
    text-align: center;
    padding: 20px;
    background: #ffe4ec;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

header h1 {
    margin: 0;
    color: #ff6f91;
}

.board {
    column-count: 4;
    column-gap: 15px;
    padding: 20px;
}

.card {
    background: white;
    margin-bottom: 15px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    break-inside: avoid;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px) scale(1.02);
}

.card img {
    width: 100%;
}

.card-content {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.like-btn {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
    color: #ff6f91;
}

@media (max-width: 900px) {
    .board { column-count: 2; }
}

@media (max-width: 500px) {
    .board { column-count: 1; }
}
</style>
</head>

<body>

<header>
    <h1>✨ DreamBoard</h1>
    <p>Cute Pinterest Aesthetic</p>
</header>

<section class="board">

<div class="card">
<img src="https://picsum.photos/300/400?1">
<div class="card-content">
<span>Soft Vibes</span>
<button class="like-btn">♡</button>
</div>
</div>

<div class="card">
<img src="https://picsum.photos/300/350?2">
<div class="card-content">
<span>Study Mood</span>
<button class="like-btn">♡</button>
</div>
</div>

<div class="card">
<img src="https://picsum.photos/300/450?3">
<div class="card-content">
<span>Pink Life</span>
<button class="like-btn">♡</button>
</div>
</div>

<div class="card">
<img src="https://picsum.photos/300/380?4">
<div class="card-content">
<span>Minimal Desk</span>
<button class="like-btn">♡</button>
</div>
</div>

</section>

<script>
const buttons = document.querySelectorAll(".like-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = 
        button.textContent === "♡" ? "♥" : "♡";
    });
});
</script>

</body>
</html>
`);
});

app.listen(port, () => {
    console.log("Server running at http://localhost:3000");
});
