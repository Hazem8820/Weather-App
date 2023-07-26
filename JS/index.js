let searchInput = document.getElementById('searchIn')
let searchBtn = document.getElementById('searchBtn')

searchInput.addEventListener('input', () => {
    showData(searchInput.value)
})

searchBtn.addEventListener('click', () => {
    showData(searchInput.value)
})


function showData(searchInput = "cairo") {
    try {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${searchInput}`)
            .then(response => response.json())
            .then(responseData => { return responseData?.location?.name !== undefined ? displayData(responseData) : "" })
    } catch (error) {
        console.log(error);
    }
}

function displayData(responseData) {
    let show = `
        <div class="weather">
        <h1 class="fw-bolder fa-3x" >${responseData?.location?.name}</h1>
        <h2 class="fw-bolder fa-2x" >${responseData?.location?.country}</h2>
        <div class="temp-box">
            <img src="${responseData?.current?.condition?.icon}" alt="weather icon" id="img">
            <p id="temperature">${responseData?.current?.temp_c} °C</p>
        </div>
        <span id="clouds">${responseData?.current?.condition?.text}</span>
        </div>
        <div class="divider1"></div>
        
        <div class="forecstH">
        <p class="cast-header">Upcoming forecast</p>
        <div class="templist">
        
            <div class="next">
                <div>
                    <img src="${responseData?.forecast?.forecastday[0]?.day?.condition?.icon}" alt="weather icon" id="img">
                    <p class="text-center">${responseData?.forecast?.forecastday[0]?.day?.avgtemp_c} °C</p>
                </div>
                <p class="desc">${responseData?.forecast?.forecastday[0]?.day?.condition?.text}</p>
            </div>
        
            <div class="next">
                <div>
                <img src="${responseData?.forecast?.forecastday[0]?.hour[0]?.condition?.icon}" alt="weather icon" id="img">
                    <p class="text-center">${responseData?.forecast?.forecastday[0]?.hour[0]?.temp_c} °C</p>
                </div>
                <p class="desc">${responseData?.forecast?.forecastday[0]?.hour[0]?.condition?.text}</p>
            </div>
        
            <div class="next">
                <div>
                <img src="${responseData?.forecast?.forecastday[0]?.hour[5]?.condition?.icon}" alt="weather icon" id="img">
                    <p class="text-center">${responseData?.forecast?.forecastday[0]?.hour[5]?.temp_c} °C</p>
                </div>
                <p class="desc">${responseData?.forecast?.forecastday[0]?.hour[5]?.condition?.text}</p>
            </div>
        
            <div class="next">
                <div>
                <img src="${responseData?.forecast?.forecastday[0]?.hour[12]?.condition?.icon}" alt="weather icon" id="img">
                    <p class="text-center">${responseData?.forecast?.forecastday[0]?.hour[12]?.temp_c} °C</p>
                </div>
                <p class="desc">${responseData?.forecast?.forecastday[0]?.hour[12]?.condition?.text}</p>
            </div>
        
            <div class="next">
                <div>
                <img src="${responseData?.forecast?.forecastday[0]?.hour[23]?.condition?.icon}" alt="weather icon" id="img">
                    <p class="text-center">${responseData?.forecast?.forecastday[0]?.hour[23]?.temp_c} °C</p>
                </div>
                <p class="desc">${responseData?.forecast?.forecastday[0]?.hour[23]?.condition?.text}</p>
            </div>
        
        </div>
        </div>
        `
    document.getElementById('mainSection').innerHTML = show
}

showData()



