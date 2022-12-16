console.log("Hello world!");

const CATEGORIES = [
	{ name: "technology", color: "#3b82f6" },
	{ name: "science", color: "#16a34a" },
	{ name: "finance", color: "#ef4444" },
	{ name: "society", color: "#eab308" },
	{ name: "entertainment", color: "#db2777" },
	{ name: "health", color: "#14b8a6" },
	{ name: "history", color: "#f97316" },
	{ name: "news", color: "#8b5cf6" },
];

const btnShare = document.querySelector(".btn-share");
const factForm = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";
loadFacts();

// load facts from supabase and render
async function loadFacts() {
	const res = await fetch(
		"https://nqhpscjkmvgugmekruij.supabase.co/rest/v1/facts",
		{
			headers: {
				apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaHBzY2prbXZndWdtZWtydWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwNzYxNDUsImV4cCI6MTk4NjY1MjE0NX0.36dP7ged1OoE-CBiUOnZZlANWDaeQkHnJY4naGnttgU",
				authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaHBzY2prbXZndWdtZWtydWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwNzYxNDUsImV4cCI6MTk4NjY1MjE0NX0.36dP7ged1OoE-CBiUOnZZlANWDaeQkHnJY4naGnttgU",
			},
		}
	);
	const data = await res.json();
	console.log(data);

	createFactsList(data);
}

function createFactsList(dataArray) {
	const htmlArr = dataArray.map(
		(fact) =>
			`<li class="fact">
			<p>
				${fact.text}
				<a class="source"
					href="${fact.source}"
					target="_blank">(Source)
                </a>
			</p>
			<span class="tag" style="background-color: ${
				CATEGORIES.find((category) => category.name === fact.category)
					.color
			}">
                ${fact.category}
            </span>
			<div class="vote-buttons">
				<button>👍 ${fact.votesInteresting}</button>
				<button>🤯 ${fact.votesMindBlowing}</button>
				<button>⛔️ ${fact.votesFalse}</button>
			</div>
		</li>`
	);

	const html = htmlArr.join("");

	factsList.insertAdjacentHTML("afterbegin", html);
}

// toggle fact form
btnShare.addEventListener("click", function () {
	if (factForm.classList.contains("hidden")) {
		factForm.classList.remove("hidden");
		btnShare.textContent = "close";
	} else {
		factForm.classList.add("hidden");
		btnShare.textContent = "share a fact";
	}
});
