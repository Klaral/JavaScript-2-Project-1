// wiki CLIENT ID : 1a4d5d1c55ad48baa5b9283de528ada8


		window.addEventListener('load', function() {   // so shit loads and then runs.
            
            
			let button = document.getElementById("button");
			button.addEventListener('click', function() {
                
				// DOM-element to display results in.
				
				let res = document.getElementById('wiki_box');
				let header = document.getElementById('wiki_header');
                		
			
// wikipedia api

				let url3 = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';

				//city
				url3 += references.city + '&';
				

				//rest
				url3 += 'format=json&origin=*';

                
                //identification
                //url3 += '1a4d5d1c55ad48baa5b9283de528ada8';
                
                
                console.log (url3);
                
				// AJAX request Wikipedia
				let ajax3 = new XMLHttpRequest();
				ajax3.open('get', url3);
				ajax3.onreadystatechange = function() {
					if( ajax3.status == 200 && ajax3.readyState == 4 ) {
                        
						// AJAX success
						var data_array = ajax3.responseText.replace(/[`~@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi, '');
						var splitted = data_array.split(',');
						var text = splitted.slice(11,100);
						console.log(splitted);
						res.innerHTML = text;
				
					}
					else if( ajax3.status != 200 ) {
						console.log('error');
					}
				};
				ajax3.send();
});
})
