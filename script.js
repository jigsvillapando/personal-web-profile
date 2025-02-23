document.getElementById("funFactBtn").addEventListener("click", function() {
    const facts = [
        "I love connecting people",
        "I started html when I was in Seychelles",
        "I work in Coca-Cola Head Office as a Network Engineer"
    ];
    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("funFact").textContent = randomFact;
});
