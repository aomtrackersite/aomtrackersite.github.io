const sTierTGTourneyCall = fetch('https://api.challonge.com/v1/tournaments/70jfzbt9.json?include_participants=1', {
  headers: {
    'Authorization': `Basic ${btoa('AoMTrackerSite:63jJBkRoGMwv3dJztxhCP3Rn0YCLc7GliPxFsQ0S')}`  
  }
})
.then (response => response.json())
.then (data => {
	console.log(data);
	const STierTGImageUrl = data.tournament.live_image_url;
	const STierTGImageDiv = document.getElementById('STierTG-Bracket-Image');
	STierTGImageDiv.innerHTML = "<img src=" + `"` + STierTGImageUrl + `"` + "/>"
})  
.catch(error => {
    console.error('Error:', error); 
});


const kotg2TourneyCall = fetch('https://api.challonge.com/v1/tournaments/KotG2.json?include_participants=1', {
  headers: {
    'Authorization': `Basic ${btoa('AoMTrackerSite:63jJBkRoGMwv3dJztxhCP3Rn0YCLc7GliPxFsQ0S')}`  
  }
})
.then (response => response.json())
.then (data => {
	console.log(data);
	const KotG2ImageUrl = data.tournament.live_image_url;
	const KotG2ImageDiv = document.getElementById('KotG2-Bracket-Image');
	KotG2ImageDiv.innerHTML = "<img src=" + `"` + KotG2ImageUrl + `"` + "/>"
})  
.catch(error => {
    console.error('Error:', error); 
});

