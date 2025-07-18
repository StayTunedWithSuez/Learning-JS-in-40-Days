const countryDetails = document.getElementById("countryDetails");
const showResponse = document.getElementById("showResponse");
const searchBtn = document.getElementById("searchBtn");
const searchCountry = document.getElementById("searchCountry");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("errorMsg");

let map;

searchBtn.addEventListener("click", async ()=>{
    const country = searchCountry.value.trim();
    if(!country) return;
    await fetchCountry(country);
})


async function fetchCountry(name) {

    loading.classList.remove("hidden");
    errorMsg.classList.add("hidden");

    countryDetails.innerHTML = "";

    try {
        
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        if(!response.ok) throw new Error("Fetching failed");
        const data = await response.json();
        const country = data[0];

        const languages = country.languages? Object.values(country.languages).join(", ") : "N/A";
        countryDetails.innerHTML = `
            <img src=${country.flags.svg} class ="w-4/10 mx-auto" alt="flag">
            <h1 class="text-2xl font-bold mx-auto">Country Name: ${country.name.common}</h1>
            <p class="text-lg"><strong>Capital: </strong>${country.capital}</p>
            <p class="text-lg"><strong>Population: </strong>${country.population.toLocaleString()}</p>
            <p class="text-lg"><strong>Language: </strong>${languages}</p>
            `
        
        drawMap(country.latlng, country.name.common);
    } catch (error) {
        console.log(error);
    } finally{
        loading.classList.add("hidden");
    }
}


function drawMap(latLng, name) {
    const [lat, lng] = latLng;
    console.log(latLng);

    if (!map) {
        map = L.map('map').setView([lat, lng], 5);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        map.setView([lat, lng], 5);
    }

    L.marker([lat, lng]).addTo(map).bindPopup(name).openPopup();
}



//fetchCountry("Bangladesh");