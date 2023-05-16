import React from 'react';
import './background.css';

function CreateBackground() {
    const emojis = ["🌸", "💐", "🌷", "🌹", "🌺", "🌻", "🌼", "🌾", "🌿", "🍀"];

    React.useEffect(() => {
        const container = document.querySelector('.flower-background');

        let emojiCount = 0;
        const maxEmojis = 300;

        function createEmoji() {
            if (emojiCount >= maxEmojis) {
                return; // Limit reached, exit the function
            }
            const emoji = document.createElement('span');
            emoji.classList.add('flower-emoji');
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const centerWidth = 800;
            const sideWidth = (screenWidth - centerWidth) / 2;
            let leftPosition;
            if (Math.random() < 0.5) {
                leftPosition = Math.random() * sideWidth;
            } else {
                leftPosition = sideWidth + centerWidth + Math.random() * sideWidth;
            }
            emoji.style.top = `${Math.random() * screenHeight}px`;
            emoji.style.left = `${leftPosition}px`;
            container.appendChild(emoji);
            emojiCount++;
        }

        const interval = setInterval(createEmoji, 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flower-background"></div>
    );
}

export default CreateBackground;
