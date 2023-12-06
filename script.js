document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('exploreBtn').addEventListener('click', function() {
      // Navigate to prose.html when the button is clicked
      window.location.href = 'prose.html';
    });
  
    document.addEventListener('mousemove', (e) => {
      const halo = document.createElement('div');
      halo.classList.add('halo');
      halo.style.left = `${e.pageX}px`;
      halo.style.top = `${e.pageY}px`;
      document.getElementById('haloContainer').appendChild(halo);
  
      setTimeout(() => {
        halo.remove();
      }, 1500); // Remove halo after 1.5 seconds
    });
  });
  

  


  

// const baseURL = "https://theprophet.onrender.com"

// const chapter = "Love";

// const getProphet = async function(){
//     try{
//         const prophetIDs = await fetch(`${baseURL}?chapter=${chapter}`)
//         const prophetIDsJSON = await prophetIDs.json();

//         console.log(prophetIDsJSON)

//         Object.keys(prophetIDsJSON).forEach(async (keys,value) => {
//             try{

//             } catch(error) {
//                 console.log(error)
//             }
//         })

//         // const propheth1 = document.getElementById("prophetIDs") 
//         // propheth1.innerHTML = prophetIDsJSON

//     }catch(error) {
//         console.log(error)
//     }
// }

// getProphet()