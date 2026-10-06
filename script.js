const words = ["KIRE", "TOR", "KI", "KHOBOR"];

let showStarted = false;

document.addEventListener("click", function () {

    // Prevent starting the show multiple times
    if (showStarted) return;

    showStarted = true;

    startShow();
});


function startShow() {

    let delay = 0;

    words.forEach(function (word, wordIndex) {

        for (let i = 0; i < word.length; i++) {

            setTimeout(function () {

                // Spread fireworks across the screen
                const spacing = window.innerWidth / (word.length + 1);

                const x = spacing * (i + 1);

                // Different height for each word
                const y = 180 + (wordIndex * 130);

                launchFirework(
                    x,
                    y,
                    word[i]
                );

            }, delay);

            delay += 450;
        }

        // Small pause between words
        delay += 700;
    });


    // Show final message after fireworks finish
    setTimeout(function () {

        showFinalMessage();

    }, delay + 1000);
}


function launchFirework(targetX, targetY, letter) {

    const projectile =
        document.createElement("div");

    projectile.classList.add("projectile");

    projectile.style.left =
        targetX + "px";

    projectile.style.top =
        window.innerHeight + "px";

    document.body.appendChild(projectile);


    const animation =
        projectile.animate(

            [
                {
                    transform:
                        "translateY(0)"
                },

                {
                    transform:
                        `translateY(${targetY - window.innerHeight}px)`
                }
            ],

            {
                duration: 650,
                easing: "ease-out"
            }

        );


    animation.onfinish = function () {

        projectile.remove();

        createFirework(
            targetX,
            targetY,
            letter
        );
    };
}


function createFirework(x, y, letter) {

    const numberOfParticles = 45;

    const colors = [
        "#ff4d6d",
        "#ffd60a",
        "#00f5d4",
        "#4cc9f0",
        "#c77dff",
        "#ffffff",
        "#ff9f1c"
    ];


    // FIREWORK PARTICLES

    for (
        let i = 0;
        i < numberOfParticles;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = x + "px";
        particle.style.top = y + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() * 140 + 40;


        const moveX =
            Math.cos(angle) *
            distance;


        const moveY =
            Math.sin(angle) *
            distance;


        const randomColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        particle.style.backgroundColor =
            randomColor;


        particle.style.boxShadow =
            `0 0 10px ${randomColor}`;


        document.body.appendChild(
            particle
        );


        particle.animate(

            [
                {
                    transform:
                        "translate(0, 0) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(${moveX}px, ${moveY}px) scale(0.2)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() *
                    600 +
                    1000,

                easing: "ease-out"
            }

        );


        setTimeout(function () {

            particle.remove();

        }, 1700);
    }


    // LETTER IN THE FIREWORK

    const letterElement =
        document.createElement("div");


    letterElement.classList.add(
        "firework-letter"
    );


    letterElement.innerText =
        letter;


    letterElement.style.left =
        x + "px";


    letterElement.style.top =
        y + "px";


    const letterColor =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    letterElement.style.color =
        letterColor;


    letterElement.style.textShadow =
        `
        0 0 10px ${letterColor},
        0 0 20px ${letterColor},
        0 0 30px ${letterColor}
        `;


    document.body.appendChild(
        letterElement
    );


    letterElement.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(0)",

                opacity: 0
            },

            {
                transform:
                    "translate(-50%, -50%) scale(1.7)",

                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -50%) scale(1)",

                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -70%) scale(0.8)",

                opacity: 0
            }
        ],

        {
            duration: 1800,
            easing: "ease-out"
        }

    );


    setTimeout(function () {

        letterElement.remove();

    }, 1800);
}


// FINAL MESSAGE

function showFinalMessage() {

    const finalMessage =
        document.createElement("div");

    finalMessage.classList.add(
        "final-message"
    );


    finalMessage.innerHTML =
        `
        <div>Tor cokh duto lobon dia khaia falamu</div>
        <div>Chup Thak🤫</div>
        `;


    document.body.appendChild(
        finalMessage
    );


    finalMessage.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(0)",

                opacity: 0
            },

            {
                transform:
                    "translate(-50%, -50%) scale(1.2)",

                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -50%) scale(1)",

                opacity: 1
            }
        ],

        {
            duration: 1500,
            easing: "ease-out",
            fill: "forwards"
        }

    );


    // Fireworks around final message
    celebrationFireworks();
}


function celebrationFireworks() {

    const positions = [

        [0.15, 0.25],

        [0.85, 0.25],

        [0.20, 0.70],

        [0.80, 0.70],

        [0.50, 0.20]

    ];


    positions.forEach(
        function (position, index) {

            setTimeout(function () {

                createFirework(

                    window.innerWidth *
                    position[0],

                    window.innerHeight *
                    position[1],

                    "😹"

                );

            }, index * 400);

        }
    );
}