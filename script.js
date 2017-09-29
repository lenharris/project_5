var friends = ['Rob', 'Teryy', 'Marbury', 'La'];

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    
    button.innerHTML = 'Sing!';
    
    
    document.body.appendChild(button);
    
    button.addEventListener('click', function() {

        for (var i = 0; i<friends.length; i++) {
            var friend = friends[i];
            var container = document.createElement('div');
            
            container.className = 'friend';
            var heading = document.createElement('h3');

            var songLyrics = document.createElement('p');

            heading.innerText = friend;

            container.appendChild(heading);
            container.appendChild(songLyrics);
            
        
            document.body.appendChild(container);



           for (var j = 99; j>0; j--) {
              if (j=== 2) {
                  var songLyrics = document.createElement('p');

                  var song = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j-1} line of code in the file.`);
                  document.body.appendChild(song);
                } else if (j===1) {
                  var songLyrics = document.createElement('p');

                  var song = document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`);
                  
                  document.body.appendChild(song);
                } else {
                   var songLyrics = document.createElement('p');
                   var song = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j-1} lines of code in the file.`);
                   document.body.appendChild(song);
                };
            };
        };

    
});

});


