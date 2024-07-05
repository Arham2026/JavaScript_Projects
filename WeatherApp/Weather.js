
function searchWeather(){
    const city = document.getElementById('search-data').value;
    const apiId = '90a48b01de981e35e2fbe9c909657646';
             
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`)
            .then(response => response.json())
            .then(data =>{
                // here cod refers to the succesful retrieval of the data through the API\
                console.log(data);
                if(data.cod == 200){
                 const weatherDescription = data.weather[0].description;
                 const temp = (data.main.temp -273.15).toFixed(2);
                
                 document.getElementById('Information').textContent = `weather in ${city} : ${weatherDescription}, Temperature : ${temp}°C`

                }
                else{
                 document.getElementById('Information').textContent = `Error in fetching`;
                }
            })
    

}
