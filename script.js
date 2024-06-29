fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('kissie').innerText = data.kissie;
    })
    .catch(error => {
        console.error('Error fetching kissie:', error);
        document.getElementById('kissie').innerText = 'Failed to load today\'s Kissie.';
    });
