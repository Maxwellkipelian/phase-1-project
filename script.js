function searchVerse() {
  const verseInput = document.getElementById('searchInput').value;
  const apiUrl = `https://bible-api.com/${verseInput}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const verseDisplay = document.getElementById('verseDisplay');
          verseDisplay.innerHTML = `<p><strong>${data.reference}</strong>: ${data.text}</p>`;
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          const verseDisplay = document.getElementById('verseDisplay');
          verseDisplay.innerHTML = `<p>Error: Verse not found.</p>`;
      });
}
