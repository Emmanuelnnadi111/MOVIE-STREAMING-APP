const input = document.getElementById('getMovies');
const btn = document.querySelector('.search');

const image_path = "https://image.tmdb.org/t/p/w1280/";
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18268bc1582caba55140211544f61c54';

const search_url = `https://api.themoviedb.org/3/search/movie?api_key=18268bc1582caba55140211544f61c54&query=${input.value}`;

btn.addEventListener('click', searchMovies);

function searchMovies() {
    const input = document.getElementById('getMovies');
            
            if (input.value == '') {
                  input.style.borderColor = 'red';
                  alert('Input field Required');
            } else {
                getMovies();
                input.value = '';
            }
            getMovies(input.value);
}
async function getMovies() {
   const response = await fetch(API_URL);
   const data = await response.json();
   displayMovies(data.results);
   console.log(data.results);
   return data.results;
}

function displayMovies (movies) {  
    
    let movieContainer = ''; 
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview} = movie;   
                     movieContainer +=`
                     <div class="wrap">
                         <div class="output bg-white  shadow-2xl rounded-2xl p-2">
                         <img src="${image_path  + poster_path}" alt="${title}" class="image-hover w-[100%]">
                                <div class="overview rounded-2xl p-2">
                                    <h2 class="text-center font-bold text-blue-800  text-5xl">${title}</h2>
                                    <h2 class="font-bold text-center ">Overview</h2>
                                    <p class="text-center ">${overview}</p>
                                </div>
                        </div>
                     </div>`;
                document.querySelector('.output-container').innerHTML = movieContainer;    
    });
}






















// function showMovie(data) {
//     data.forEach((data) => {
//         const {title, poster_path, vote_average, overview} = myMovies;  
//                     let movieContainer = '';  
//                      movieContainer +=`
//                      <div class="wrap">
//                          <div class="output bg-white  shadow-2xl rounded-2xl p-2">
//                          <img src="${image_path + poster_path}" alt="${title}" class="image-hover w-[100%]">
//                                 <div class="overview rounded-2xl p-2">
//                                     <h2 class="text-center font-bold text-blue-800  text-5xl">${title}</h2>
//                                     <h2 class="font-bold text-center ">Overview</h2>
//                                     <p class="text-center ">${overview}</p>
//                                 </div>
//                         </div>
//                      </div>`;
//                 document.querySelector('.output-container').innerHTML = movieContainer; 
//     })
// }
// function displayMovies (myMovies) { 
    
//          const {title, poster_path, vote_average, overview} = myMovies;  
//             let movieContainer = '';  
//              movieContainer +=`
//              <div class="wrap">
//                  <div class="output bg-white  shadow-2xl rounded-2xl p-2">
//                  <img src="${image_path + poster_path}" alt="${title}" class="image-hover w-[100%]">
//                         <div class="overview rounded-2xl p-2">
//                             <h2 class="text-center font-bold text-blue-800  text-5xl">${title}</h2>
//                             <h2 class="font-bold text-center ">Overview</h2>
//                             <p class="text-center ">${overview}</p>
//                         </div>
//                 </div>
//              </div>`;
//         document.querySelector('.output-container').innerHTML = movieContainer;    
  
// }