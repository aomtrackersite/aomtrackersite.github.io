const diTourneyCall = fetch('https://api.challonge.com/v1/tournaments/DivineInterventionAoM.json?include_participants=1', {
  headers: {
    'Authorization': `Basic ${btoa('AoMTrackerSite:63jJBkRoGMwv3dJztxhCP3Rn0YCLc7GliPxFsQ0S')}`  
  }
})
.then (response => response.json())
.then (data => {
	console.log(data);
	const diImageUrl = data.tournament.live_image_url;
	const diImageDiv = document.getElementById('DI-Bracket-Image');
	diImageDiv.innerHTML = "<img src=" + `"` + diImageUrl + `"` + "/>"
})  
.catch(error => {
    console.error('Error:', error); 
});


const fw4TourneyCall = fetch('https://api.challonge.com/v1/tournaments/fimbulwinter4_2.json?include_participants=1', {
  headers: {
    'Authorization': `Basic ${btoa('AoMTrackerSite:63jJBkRoGMwv3dJztxhCP3Rn0YCLc7GliPxFsQ0S')}`  
  }
})
.then (response => response.json())
.then (data => {
	console.log(data);
	const fw4ImageUrl = data.tournament.live_image_url;
	const fw4ImageDiv = document.getElementById('FW4-Bracket-Image');
	fw4ImageDiv.innerHTML = "<img src=" + `"` + fw4ImageUrl + `"` + "/>"
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

