document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const startDate = new Date("2025-05-19");
  const endDate = new Date("2025-08-17");

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  function openModal(title, content) {
    modalContent.innerHTML = `<h2>${title}</h2>${content}`;
    modal.classList.remove("hidden");
  }

  document.getElementById("close").addEventListener("click", () => {
    modal.classList.add("hidden");
    modalContent.innerHTML = "";
  });

  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const day = document.createElement("div");
    day.classList.add("day");
    const dateString = currentDate.toLocaleDateString("fi-FI", {
      day: "2-digit",
      month: "2-digit",
    });
    day.textContent = dateString;

    const dateKey = currentDate.toDateString();

    // 19.5. Esimerkkiteksti
    if (dateKey === new Date("2025-05-19").toDateString()) {
      day.addEventListener("click", () =>
        openModal("19.5.2025 – Esimerkkiteksti", "<p>Lorem ipsum dolor sit amet.</p>")
      );
      makeClickable(day);
    }

    // 2.6. YouTube-video
    else if (dateKey === new Date("2025-06-02").toDateString()) {
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
      makeClickable(day);
    }

    // 20.6. Juhannus
    else if (dateKey === new Date("2025-06-20").toDateString()) {
      day.addEventListener("click", () =>
        openModal("20.6.2025 – Juhannus 🌸🎉", "<p>Hyvää juhannusta! Rentoudu, nauti luonnosta ja valoisasta yöstä.</p>")
      );
      makeClickable(day);
    }

    // 20.7. Kuvallinen esimerkki
    else if (dateKey === new Date("2025-07-20").toDateString()) {
      day.addEventListener("click", () =>
        openModal(
          "20.7.2025 – Kesän katti",
          `<p>kesäinen kissa:</p>
           <img src="https://t3.ftcdn.net/jpg/01/03/64/44/360_F_103644471_eKnH4wVwEzgkLsiZrPtgkd4IcfTuaa14.jpg" 
                alt="Kesäkuva" style="max-width: 100%; border-radius: 12px; margin-top: 10px;">`
        )
      );
      makeClickable(day);
    }

    // 10.8. Erikoistaustakuva ja teksti
    else if (dateKey === new Date("2025-08-10").toDateString()) {
      day.style.backgroundImage =
        "url('https://media.istockphoto.com/id/1404630379/vector/8bit-pixel-jungle-landscape-game-level-background.jpg?s=612x612&w=0&k=20&c=BlGmcaGYseeUyQL5MmGOA6IBIixKYv18EQbw8VKqg7Q=')";
      day.style.backgroundSize = "cover";
      day.style.color = "#fff";
      day.addEventListener("click", () => openModal("10.8.2025 – testi testi", "<p>testi testi</p>"));
      makeClickable(day);
    }

    calendar.appendChild(day);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Hover-efekti ja kursori kaikille klikattaville päiville
  function makeClickable(day) {
    day.classList.add("clickable");

    day.addEventListener("mouseenter", () => {
      day.style.outline = "3px solid #fffa";
      day.style.transform = "scale(1.05)";
      day.style.transition = "all 0.2s ease-in-out";
    });

    day.addEventListener("mouseleave", () => {
      day.style.outline = "none";
      day.style.transform = "scale(1)";
    });
  }
});

/*
Uuden tapahtuman lisääminen:
1. Kopioi yksi if-lauseke yltä.
2. Muuta päivämäärä (new Date("vuosi-kk-pv"))
3. Aseta haluamasi otsikko ja sisältö openModal-funktioon
4. Lisää day.classList.add("clickable");
*/