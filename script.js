//your code here
// Array of band names
    let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

    // Function to remove articles from band names
    function removeArticles(name) {
      return name.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the band names in lexicographic order excluding articles
    touristSpots.sort(function(a, b) {
      return removeArticles(a) > removeArticles(b) ? 1 : -1;
    });

    // Display the sorted band names in an unordered list
    let ul = document.getElementById('band');
    for (let i = 0; i < touristSpots.length; i++) {
      let li = document.createElement('li');
      li.textContent = touristSpots[i];
      ul.appendChild(li);
    }
