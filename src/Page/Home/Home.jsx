import React, { useEffect } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  useEffect(() => {
    // Initialising the canvas
    var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d');

    // Function to handle window resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Setting up the letters
    var letters = "TO'LQINOV ABBOS";
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 15,
      columns = Math.floor(canvas.width / fontSize);

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    // Loop the animation
    const intervalId = setInterval(draw, 50);

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-page">
      <canvas></canvas>
      <Header />
      <Hero/>
    </div>
  );
};

export default Home;
