const data = [
  {
    name: "Joel Embiid",
    team: "Philadelphia 76ers (PHI)",
    points: 33,
    rebounds: 10.8,
    assists: 5.7,
    blocks: 1.5,
    turnovers: 4.2
  },
  {
    name: "Jalen Brunson",
    team: "New York Knicks (NYK)",
    points: 32.4,
    rebounds: 3.3,
    assists: 7.5,
    blocks: 0.2,
    turnovers: 2.7
  },
  {
    name: "Shai Gilgeous-Alexander",
    team: "Oklahoma City Thunder (OKC)",
    points: 30.2,
    rebounds: 7.2,
    assists: 6.4,
    blocks: 1.7,
    turnovers: 2.2
  },
  {
    name: "Tyrese Maxey",
    team: "Philadelphia 76ers (PHI)",
    points: 29.8,
    rebounds: 5.2,
    assists: 6.8,
    blocks: 0.3,
    turnovers: 2.2
  },
  {
    name: "Donovan Mitchell",
    team: "Cleveland Cavaliers (CAVS)",
    points: 29.6,
    rebounds: 5.4,
    assists: 4.7,
    blocks: 0.3,
    turnovers: 2.8
  },
  {
    name: "Luka Dončić",
    team: "Dallas Mavericks (DAL)",
    points: 28.9,
    rebounds: 9.5,
    assists: 8.1,
    blocks: 0.4,
    turnovers: 4.1
  },
  {
    name: "Nikola Jokić",
    team: "Denver Nuggets (DEN)",
    points: 28.7,
    rebounds: 13.4,
    assists: 8.7,
    blocks: 0.7,
    turnovers: 3.3
  },
  {
    name: "Anthony Davis",
    team: "Los Angeles Lakers (LAL)",
    points: 27.8,
    rebounds: 15.6,
    assists: 4,
    blocks: 1.6,
    turnovers: 2.2
  },
  {
    name: "LeBron James",
    team: "Los Angeles Lakers (LAL)",
    points: 27.8,
    rebounds: 6.8,
    assists: 8.8,
    blocks: 1,
    turnovers: 3.8
  },
  {
    name: "Anthony Edwards",
    team: "Minnesota Timberwolves (MIN)",
    points: 27.6,
    rebounds: 7,
    assists: 6.5,
    blocks: 0.6,
    turnovers: 3.3
  },
  {
    name: "Devin Booker",
    team: "Phoenix Suns (PHX)",
    points: 27.5,
    rebounds: 3.3,
    assists: 6,
    blocks: 0.3,
    turnovers: 2.8
  },
  {
    name: "Paolo Banchero",
    team: "Orlando Magic (ORL)",
    points: 27,
    rebounds: 8.6,
    assists: 4,
    blocks: 0.6,
    turnovers: 4.6
  },
  {
    name: "Kevin Durant",
    team: "Phoenix Suns (PHX)",
    points: 26.8,
    rebounds: 6.5,
    assists: 3.3,
    blocks: 1.5,
    turnovers: 2.5
  },
  {
    name: "Jayson Tatum",
    team: "Boston Celtics (BOS)",
    points: 25,
    rebounds: 9.7,
    assists: 6.3,
    blocks: 0.7,
    turnovers: 2.6
  },
  {
    name: "Khris Middleton",
    team: "Milwaukee Bucks (MIL)",
    points: 24.7,
    rebounds: 9.2,
    assists: 4.7,
    blocks: 0.2,
    turnovers: 2.3
  },
  {
    name: "Jaylen Brown",
    team: "Boston Celtics (BOS)",
    points: 23.9,
    rebounds: 5.9,
    assists: 3.3,
    blocks: 0.6,
    turnovers: 2.7
  },
  {
    name: "Bam Adebayo",
    team: "Miami Heat (MIA)",
    points: 22.6,
    rebounds: 9.4,
    assists: 3.8,
    blocks: 0,
    turnovers: 1.6
  },
  {
    name: "Kyrie Irving",
    team: "Dallas Mavericks (DAL)",
    points: 22.1,
    rebounds: 3.7,
    assists: 5.1,
    blocks: 0.3,
    turnovers: 2.3
  },
  {
    name: "Pascal Siakam",
    team: "Indiana Pacers (IND)",
    points: 21.6,
    rebounds: 7.5,
    assists: 3.8,
    blocks: 0.4,
    turnovers: 1.1
  },
  {
    name: "James Harden",
    team: "Los Angeles Clippers (LAC)",
    points: 21.2,
    rebounds: 4.5,
    assists: 8,
    blocks: 1,
    turnovers: 2.3
  },
  {
    name: "Jamal Murray",
    team: "Denver Nuggets (DEN)",
    points: 20.6,
    rebounds: 4.3,
    assists: 5.6,
    blocks: 0.5,
    turnovers: 2.6
  },
  {
    name: "Paul George",
    team: "Los Angeles Clippers (LAC)",
    points: 19.5,
    rebounds: 6.8,
    assists: 4.8,
    blocks: 0.5,
    turnovers: 2.3
  },
  {
    name: "Karl-Anthony Towns",
    team: "Minnesota Timberwolves (MIN)",
    points: 19.1,
    rebounds: 9,
    assists: 2.6,
    blocks: 0.2,
    turnovers: 1.7
  },
  {
    name: "Franz Wagner",
    team: "Orlando Magic (ORL)",
    points: 18.9,
    rebounds: 6.9,
    assists: 4.4,
    blocks: 1.3,
    turnovers: 1.3
  },
  {
    name: "Jalen Williams",
    team: "Oklahoma City Thunder (OKC)",
    points: 18.7,
    rebounds: 6.8,
    assists: 5.4,
    blocks: 0.5,
    turnovers: 1.9
  },
  {
    name: "Tyrese Haliburton",
    team: "Indiana Pacers (IND)",
    points: 18.7,
    rebounds: 4.8,
    assists: 8.2,
    blocks: 0.7,
    turnovers: 2.1
  },
  {
    name: "Donte DiVincenzo",
    team: "New York Knicks (NYK)",
    points: 17.8,
    rebounds: 4,
    assists: 2.6,
    blocks: 0.9,
    turnovers: 1.2
  },
  {
    name: "CJ McCollum",
    team: "New Orleans Pelicans (NOP)",
    points: 17.8,
    rebounds: 4.8,
    assists: 4.8,
    blocks: 0.8,
    turnovers: 4
  },
  {
    name: "Brook Lopez",
    team: "Milwaukee Bucks (MIL)",
    points: 17.7,
    rebounds: 4.3,
    assists: 1.8,
    blocks: 1.3,
    turnovers: 1.5
  },
  {
    name: "Myles Turner",
    team: "Indiana Pacers (IND)",
    points: 17,
    rebounds: 6.6,
    assists: 2.1,
    blocks: 1.5,
    turnovers: 1.9
  },
  {
    name: "Austin Reaves",
    team: "Los Angeles Lakers (LAL)",
    points: 16.8,
    rebounds: 3.8,
    assists: 3.6,
    blocks: 0.6,
    turnovers: 0.8
  },
  {
    name: "Tyler Herro",
    team: "Miami Heat (MIA)",
    points: 16.8,
    rebounds: 3.6,
    assists: 5.4,
    blocks: 0,
    turnovers: 2.8
  },
  {
    name: "Derrick White",
    team: "Boston Celtics (BOS)",
    points: 16.7,
    rebounds: 4.3,
    assists: 4.1,
    blocks: 1.2,
    turnovers: 0.8
  },
  {
    name: "Bobby Portis",
    team: "Milwaukee Bucks (MIL)",
    points: 16.5,
    rebounds: 11.3,
    assists: 1,
    blocks: 0.2,
    turnovers: 1.5
  },
  {
    name: "Bradley Beal",
    team: "Phoenix Suns (PHX)",
    points: 16.5,
    rebounds: 2.8,
    assists: 4.5,
    blocks: 0.3,
    turnovers: 3.3
  },
  {
    name: "Ivica Zubac",
    team: "Los Angeles Clippers (LAC)",
    points: 16.2,
    rebounds: 9.3,
    assists: 1,
    blocks: 0.5,
    turnovers: 1.3
  },
  {
    name: "Evan Mobley",
    team: "Cleveland Cavaliers (CAVS)",
    points: 16,
    rebounds: 9.3,
    assists: 2.3,
    blocks: 2.2,
    turnovers: 1.8
  },
  {
    name: "Michael Porter Jr.",
    team: "Denver Nuggets (DEN)",
    points: 15.8,
    rebounds: 6.8,
    assists: 1.1,
    blocks: 0.8,
    turnovers: 1.5
  },
  {
    name: "Darius Garland",
    team: "Cleveland Cavaliers (CAVS)",
    points: 15.7,
    rebounds: 3.6,
    assists: 5.8,
    blocks: 0.2,
    turnovers: 2.3
  },
  {
    name: "Chet Holmgren",
    team: "Oklahoma City Thunder (OKC)",
    points: 15.6,
    rebounds: 7.2,
    assists: 2.1,
    blocks: 2.5,
    turnovers: 1.9
  },
  {
    name: "Andrew Nembhard",
    team: "Indiana Pacers (IND)",
    points: 14.9,
    rebounds: 3.3,
    assists: 5.5,
    blocks: 0.2,
    turnovers: 1.4
  },
  {
    name: "Jalen Suggs",
    team: "Orlando Magic (ORL)",
    points: 14.7,
    rebounds: 5.1,
    assists: 3.3,
    blocks: 0.4,
    turnovers: 2.9
  },
  {
    name: "Josh Hart",
    team: "New York Knicks (NYK)",
    points: 14.5,
    rebounds: 11.5,
    assists: 4.5,
    blocks: 0.8,
    turnovers: 2.6
  },
  {
    name: "Jonas Valančiūnas",
    team: "New Orleans Pelicans (NOP)",
    points: 14.5,
    rebounds: 11,
    assists: 1.3,
    blocks: 0,
    turnovers: 2.5
  },
  {
    name: "Aaron Gordon",
    team: "Denver Nuggets (DEN)",
    points: 14.3,
    rebounds: 7.3,
    assists: 4.4,
    blocks: 0.6,
    turnovers: 1.5
  },
  {
    name: "Brandon Ingram",
    team: "New Orleans Pelicans (NOP)",
    points: 14.3,
    rebounds: 4.5,
    assists: 3.3,
    blocks: 1.3,
    turnovers: 2.3
  },
  {
    name: "D'Angelo Russell",
    team: "Los Angeles Lakers (LAL)",
    points: 14.2,
    rebounds: 2.8,
    assists: 4.2,
    blocks: 0.2,
    turnovers: 1.8
  },
  {
    name: "Kelly Oubre Jr.",
    team: "Philadelphia 76ers (PHI)",
    points: 13.2,
    rebounds: 4,
    assists: 1.7,
    blocks: 1.2,
    turnovers: 1.3
  },
  {
    name: "Jrue Holiday",
    team: "Boston Celtics (BOS)",
    points: 13.2,
    rebounds: 6.1,
    assists: 4.4,
    blocks: 0.6,
    turnovers: 1.5
  }
];

/* ==========================
   DOM
========================== */
const searchInput = document.getElementById("search");
const teamFilter = document.getElementById("team-filter");
const darkToggle = document.getElementById("dark-mode-toggle");
const rowsBody = document.getElementById("player-rows");
const table = document.getElementById("player-stats");

/* ==========================
   Helpers
========================== */
function getTeamCode(teamStr) {
  // "Philadelphia 76ers (PHI)" -> "PHI"
  const m = String(teamStr).match(/\(([^)]+)\)/);
  return m ? m[1] : teamStr;
}

function normalize(s) {
  return String(s || "").toLowerCase().trim();
}

/* Add derived field for sorting/display */
const players = data.map(p => ({
  ...p,
  teamCode: getTeamCode(p.team)
}));

/* ==========================
   State
========================== */
let state = {
  search: "",
  team: "all",
  sortKey: null,   // name, teamCode, points, rebounds, assists
  sortDir: "asc"   // asc/desc
};

/* ==========================
   Populate dropdown
========================== */
function populateTeams() {
  const teams = Array.from(new Set(players.map(p => p.teamCode))).sort();

  // keep existing "All"
  teams.forEach(code => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = code;
    teamFilter.appendChild(opt);
  });
}

/* ==========================
   Filter + sort + render
========================== */
function getFiltered() {
  const q = normalize(state.search);
  const t = state.team;

  return players.filter(p => {
    const matchName = normalize(p.name).includes(q);
    const matchTeam = t === "all" ? true : p.teamCode === t;
    return matchName && matchTeam;
  });
}

function sortList(list) {
  if (!state.sortKey) return list;

  const key = state.sortKey;
  const dir = state.sortDir === "asc" ? 1 : -1;

  return [...list].sort((a, b) => {
    const av = a[key];
    const bv = b[key];

    if (typeof av === "string" || typeof bv === "string") {
      return String(av).localeCompare(String(bv)) * dir;
    }
    return (Number(av) - Number(bv)) * dir;
  });
}

function render(list) {
  rowsBody.innerHTML = "";

  list.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.teamCode}</td>
      <td>${p.points}</td>
      <td>${p.rebounds}</td>
      <td>${p.assists}</td>
    `;
    rowsBody.appendChild(tr);
  });
}

function update() {
  const filtered = getFiltered();
  const sorted = sortList(filtered);
  render(sorted);
}

/* ==========================
   Dark mode
========================== */
function setDarkMode(on) {
  document.body.classList.toggle("dark-mode", on);
  localStorage.setItem("darkMode", on ? "1" : "0");
}

function initDarkMode() {
  const saved = localStorage.getItem("darkMode") === "1";
  setDarkMode(saved);
}

/* ==========================
   Events (Search + Filter + Toggle)
========================== */
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  update();
});

teamFilter.addEventListener("change", (e) => {
  state.team = e.target.value;
  update();
});

darkToggle.addEventListener("click", () => {
  setDarkMode(!document.body.classList.contains("dark-mode"));
});

/* ==========================
   OPTIONAL: Sorting (click headers)
========================== */
function initSorting() {
  const headers = table.querySelectorAll("thead th[data-key]");
  headers.forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.key;

      if (state.sortKey === key) {
        state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = key;
        state.sortDir = "asc";
      }
      update();
    });
  });
}


populateTeams();
initDarkMode();
initSorting(); 
update();