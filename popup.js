async function fetchData() {
    const url = 'https://linkedin-data-scraper.p.rapidapi.com/search_jobs?query=Data%20Scientist&location=United%20States&page=1&experience=2&jobType=F&postedAgo=86400';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '41c1a15baamsh17f8c396de7fb35p1ac7ddjsn33bc76714301',
		'x-rapidapi-host': 'linkedin-data-scraper.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	document.getElementById('jobs').innerHTML = result.response.jobs.map(item => `<li>${item.title}, <a href="${item.jobPostingUrl}" target="_blank">Link</a></li>`).join('');
} catch (error) {
	console.error(error);
}
}
fetchData();