function getRequestApi() {
  // Get the location entered by the user
  const location = document.getElementById('location-input').value;

  // Get the access token from the input field
  const token = document.getElementById('token-input').value;

  if (!location || !token) {
      alert("Please enter both location and access token.");
      return;
  }

  // Construct the API URL with the location and token
  const url = `http://api.weatherapi.com/v1/current.json?key=${token}&q=${location}&aqi=no`;

  // Fetch weather data from the API
  fetch(url)
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
          // Update the UI with the fetched weather data
          document.getElementById('location').textContent = `Location: ${data.location.name}, ${data.location.country}`;
          document.getElementById('lat').textContent = `Lat: ${data.location.lat}`;
          document.getElementById('long').textContent = `Long: ${data.location.lon}`;
          document.getElementById('time-zone').textContent = `Time Zone: ${data.location.tz_id}`;
          document.getElementById('wind-speed').textContent = `Wind Speed: ${data.current.wind_kph} kph`;
          document.getElementById('pressure').textContent = `Pressure: ${data.current.pressure_mb} mb`;
          document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
          document.getElementById('wind-direction').textContent = `Wind Direction: ${data.current.wind_dir}`;
          document.getElementById('uv-index').textContent = `UV Index: ${data.current.uv}`;
          document.getElementById('feels-like').textContent = `Feels Like: ${data.current.feelslike_c}°C`;
      })
      .catch(err => {
          console.error('Error fetching data:', err);
          alert('Failed to fetch weather data. Please check the location and token.');
      });
}
