const Interval = setInterval(() => {
    console.log('Sending notification...')
}, 2000);


document.getElementById('stopi-btn').addEventListener('click', () => { // this code is used to stop the interval 
    clearInterval(Interval);
  })