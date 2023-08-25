var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('custom-bg-color');
    } else {
        nav.classList.remove('custom-bg-color');
    }
});

const typingElement = document.getElementById("typing-effect");
const symbols = "!@#$%^&*()_-+=[]{}|;:,.<>?";
const texts = [
    "< Welcome to the realm of Data-Driven Art and Music, where algorithms compose symphonies and pixels tell stories. />",
    "< Immerse yourself in the alchemy of technology and artistry, where data breathes life into captivating compositions. />",
    "< Elevate your senses to a plane where data's language speaks in colors and music flows through lines of code. />"    
];

function generateRandomSymbols(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      result += symbols[randomIndex];
    }
    return result;
}

async function typeTextWithEffect(text, delay) {
    for (let i = 0; i <= text.length; i++) {
      typingElement.textContent = generateRandomSymbols(i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    typingElement.textContent = text;
}

const delayBetweenSymbols = 13; 
let currentTextIndex = 0;

async function loopThroughTexts() {
    while (true) {
        const currentText = texts[currentTextIndex];
        await typeTextWithEffect(currentText, delayBetweenSymbols * 2);
        await new Promise(resolve => setTimeout(resolve, 4000)); 
        typingElement.textContent = "";
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
}

loopThroughTexts();

document.getElementById('arrow').addEventListener('click', function() {
    const content = document.getElementById('content2');
    const contentOffset = content.offsetTop;
    
    window.scrollTo({
      top: contentOffset,
      behavior: 'smooth' // Add smooth scrolling effect
    });
});

document.getElementById('arrow2').addEventListener('click', function() {
    const content = document.getElementById('content3');
    const contentOffset = content.offsetTop;
    
    window.scrollTo({
      top: contentOffset,
      behavior: 'smooth' // Add smooth scrolling effect
    });
});