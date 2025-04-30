const startDate = new Date("2025-05-19");
const endDate = new Date("2025-08-17");
const today = new Date();
const container = document.getElementById("calendar-container");

const monthNames = ["Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu"];
const monthGroups = {
  Toukokuu: [],
  Kesäkuu: [],
  Heinäkuu: [],
  Elokuu: []
};

let currentDate = new Date(startDate);

while (currentDate <= endDate) {
  const date = new Date(currentDate);
  const monthName = monthNames[date.getMonth() - 4];
  if (monthGroups[monthName]) {
    monthGroups[monthName].push(new Date(date));
  }
  currentDate.setDate(currentDate.getDate() + 1);
}

Object.entries(monthGroups).forEach(([month, days]) => {
  if (days.length === 0) return;

  const monthDiv = document.createElement("div");
  monthDiv.className = "calendar-month";

  const title = document.createElement("div");
  title.className = "month-title";
  title.textContent = month;
  monthDiv.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "week-grid";

  days.forEach((date) => {
    const day = document.createElement("div");
    day.className = "day";
    const dateStr = date.toLocaleDateString("fi-FI", {
      day: "2-digit",
      month: "2-digit"
    });
    day.innerText = dateStr;

    const isPastOrToday = date <= today;
    const dateKey = date.toDateString();

    // Esimerkki: 19.5. teksti
    if (dateKey === new Date("2025-05-19").toDateString()) {
      day.addEventListener("click", () =>
        openModal("19.5.2025", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae.")
      );
      day.classList.add("clickable");

    // Esimerkki: 2.6. YouTube-video
    } else if (dateKey === new Date("2025-06-02").toDateString()) {
      day.addEventListener("click", () =>
        openModal(
          "2.6.2025 – Musiikkivinkki",
          `
          <p>Tänään fiilistellään klassikkobiisillä</p>
          <div style="margin-top: 10px;">
            <iframe width="100%" height="215" 
              src="https://www.youtube.com/embed/U2Fjfqm-7g8?rel=0&autohide=1&showinfo=0" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
          </div>`
        )
      );
      day.classList.add("clickable");

} else if (dateKey === new Date("2025-07-20").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "20.7.2025 – Kesäkuva",
      `
      <p>Heinäkuun katti!:</p>
      <div style="margin-top: 10px;">
        <img src="https://t3.ftcdn.net/jpg/01/03/64/44/360_F_103644471_eKnH4wVwEzgkLsiZrPtgkd4IcfTuaa14.jpg" 
             alt="Kesäkuva" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

    // Tulevat päivät lukittu
    } else if (!isPastOrToday) {
      day.classList.add("locked");

    // Menneet päivät ilman sisältöä lukittu
    } else {
      day.classList.add("locked");
    }

    grid.appendChild(day);
  });

  monthDiv.appendChild(grid);
  container.appendChild(monthDiv);
});

function openModal(titleText, contentText) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const content = document.getElementById("modal-content");

  title.innerText = titleText;
  content.innerHTML = contentText;

  modal.classList.remove("hidden");
}

document.getElementById("close").addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  document.getElementById("modal-content").innerHTML = "";
});

/*
Uuden tapahtuman lisääminen:
1. Kopioi yksi if-lauseke yltä.
2. Muuta päivämäärä (new Date("vuosi-kk-pv"))
3. Aseta haluamasi otsikko ja sisältö openModal-funktioon
4. Lisää day.classList.add("clickable");
*/