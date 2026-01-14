document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");

    // Se NON è desktop → niente overlay
    const isDesktop = window.matchMedia("(pointer: fine)").matches;

    if (!isDesktop) {
        startScreen.style.display = "none";
        return;
    }

    if (!startBtn) return; // sicurezza

    startBtn.addEventListener("click", () => {
        const wantFullscreen = confirm("Vuoi lo schermo intero? 🖥️");
        if (wantFullscreen) {
            document.documentElement
                .requestFullscreen()
                .catch(err => console.log(err));
        }

        // Nascondi overlay
        startScreen.style.display = "none";
    });
});
