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

    // Esimerkki: 2.6. YouTube-video
    if (dateKey === new Date("2025-06-02").toDateString()) {
      day.addEventListener("click", () =>
        openModal(
          "2.6.2025 – Video esimerkki",
          `
          <p>Kissa pyörii!</p>
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



} else if (dateKey === new Date("2025-06-20").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "20.6.2025 – Hyvää juhannusta!", "Nauti kesästä! 🌞🎉",
      `
      <p>Heinäkuun katti!:</p>
      <div style="margin-top: 10px;">
        <img src="https://t3.ftcdn.net/jpg/01/03/64/44/360_F_103644471_eKnH4wVwEzgkLsiZrPtgkd4IcfTuaa14.jpg" 
             alt="Kesäkuva" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-05-23").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "23.05.2025 – Hassan Maikal Keikka",
      `
      <p>Hassan Maikal Keikka:</p>
      <a href="https://tavastiaklubi.fi/events/2025-05-23/hassan-maikal/107394/" </a>
      <div style="margin-top: 10px;">
        <img src="https://images.cdn.yle.fi/image/upload/ar_1.5001532,c_fill,g_faces,h_423,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1634907917/39-8706466172b44cecf65" 
             alt="Hassan Maikal" style="width: 100%; border-radius: 8px;" />
      </div>`
    ) 
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-05-27").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "27.05.2025",
      `
      <p>Kepeästi kevääseen – Kilven Kuoron kevätkonsertti</p>
      <a href="https://www.stadissa.fi/tapahtumat/110001/kepeasti-kevaaseen-ndash-kilven-kuoron-kevatkonsertti/" </a>
      <div style="margin-top: 10px;">
        <img src="http://static.stadissa.fi/events/to_be_moderated/7ad1bf50a29cc2789bb914b52282adbd.png" 
             alt="Kepeästi kevääseen – Kilven Kuoron kevätkonsertti" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-06-6").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "6.06.2025",
      `
      <p>Aivopihalla jytisee taas punk!</p>
      <a href="https://www.elmu.fi/tapahtumakalenteri/aivopiha" </a>
      <div style="margin-top: 10px;">
        <img src="https://images.squarespace-cdn.com/content/v1/602d5d917cb8834f84eb6399/1744740090707-YWEYDDM9R9O8Q0H8SKVT/Aivopiha_posteri_A4.jpg?format=1500w" 
             alt="aivopiha poster" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-06-9").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "9.06.2025",
      `
      <p>Helsinki Samba Carnaval 2025</p>
      <a href="https://www.myhelsinki.fi/fi/events/helsinki-samba-carnaval-2025-2/" </a>
      <div style="margin-top: 10px;">
        <img src="https://www.myhelsinki.fi/wp-content/uploads/2024/11/DSC01883samba-1.jpg-1.jpg" 
             alt="carnaval" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-06-13").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "13.06.2025",
      `
      <p>Helsinki City Festival</p>
      <a href="https://www.helsinkicityfestival.fi/" </a>
      <div style="margin-top: 10px;">
        <img src="https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/484870270_623072460699793_510995878402447205_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=B3Cx7gcZTuMQ7kNvwER55so&_nc_oc=AdlyL_xuSYfQO1KGjvRXhbyRWniwAl5MX9NGDBS1ZpsUf36iu0hnn8T20uKQQAT6dcE&_nc_zt=23&_nc_ht=scontent-hel3-1.xx&_nc_gid=Dlya5u-J9Eo9w1M7ezxgmg&oh=00_AfKqwJcaDAiaSGWvi62omvlVMPHy4oM9menPwZDpYL24iw&oe=6820E59B" 
             alt="helsinkicityfest" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-06-26").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "26.06.2025",
      `
      <p>Craft Beer Helsinki festival</p>
      <a href="https://craftbeerhelsinki.fi/" </a>
      <div style="margin-top: 10px;">
        <img src="https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/493843300_720709830343143_1737050900153990957_n.png?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-yaf8Ugm5nAQ7kNvwEM35_K&_nc_oc=AdmXqFgXOP-ZCtQmxlKgLmwn_G44ALnqizPDzoczOAq1s1bcnOu5o_2inUzy7SPd2HqahgN0ZFaKR8E6Ue9V_ZKM&_nc_zt=23&_nc_ht=scontent.fqlf1-2.fna&_nc_gid=ZUgVIMqgP7OV5D-jzJeYKw&oh=00_AfJfocJxOyL3bBWakgtJ6XL7LinoFVOL-7itpl4n3JbqFQ&oe=681FFDEC" 
             alt="craftbeerfest" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-07-5").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "5.07.2025",
      `
      <p>Opastettu saarikierros Harakassa</p>
      <a href="https://tapahtumat.hel.fi/fi/tapahtumat/helsinki:agk7dh3agy?returnPath=%2Fhaku%3Fend%3D2025-07-13%26eventId%3Dhelsinki%253Aagk7dh3agy%26start%3D2025-07-01" </a>
      <div style="margin-top: 10px;">
        <img src="https://api.hel.fi/linkedevents/media/images/harakan_saarikierros_touko-hein%C3%A4.JPG" 
             alt="saarikierros" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable");

} else if (dateKey === new Date("2025-07-11").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "11.07.2025",
      `
      <p>Kahoot! Visa-Ilta </p>
      <a href="https://tapahtumat.hel.fi/fi/tapahtumat/helsinki:agjsku3vzu?returnPath=%2Fhaku%3FeventId%3Dhelsinki%253Aagjsku3vzu%26start%3D2025-07-07" </a>
      <div style="margin-top: 10px;">
        <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F889133573%2F2353556532113%2F1%2Foriginal.20241031-190400?w=600&auto=format%2Ccompress&q=75&sharp=10&s=2f5111d2709357883f20973f2eb3737a" 
             alt="kahootposter" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable")

} else if (dateKey === new Date("2025-07-18").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "18.07.2025",
      `
      <p>Helsinki Stand-Up Open-Mic</p>
      <a href="https://www.myhelsinki.fi/fi/events/helsinki-stand-up-league-open-mic-2/helsinki-stand-up-league-open-mic-18-7-2025/" </a>
      <div style="margin-top: 10px;">
        <img src="https://api.hel.fi/linkedevents/media/images/HSL_icon2.jpg" 
             alt="StandUpHSL" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable")

} else if (dateKey === new Date("2025-07-25").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "25.07.2025",
      `
      <p>Jytäkesä Go-Go, rock festival</p>
      <a href="https://jytakesagogo.com/" </a>
      <div style="margin-top: 10px;">
        <img src="https://jytakesagogo.com/wp-content/uploads/2025/02/jytakesa25_uusetusivu.jpg" 
             alt="jytafest" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable")

} else if (dateKey === new Date("2025-08-1").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "1.08.2025 - À la park festivaali." ,
      `
      <p> À la Park on kesän herkullisin festivaali. Tapahtuma nivoo yhteen huipputason keikat ja ensiluokkaiset ravintolat idyllisessä puistossa meren rannalla </p>
      <a href="https://alapark.fi/fi/" </a>
      <div style="margin-top: 10px;">
        <img src="https://alapark.fi/fileadmin/user_upload/Festivals/a_la_park/ALP_lanseeraus_1920x1080_1.jpg" 
             alt="alaparposter" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable")

} else if (dateKey === new Date("2025-08-8").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "8.08.2025." ,
      `
      <p> Vauhti kiihtyy! -festivaali</p>
      <a href="https://vauhtikiihtyyfestival.fi/event/vantaa-2025/"</a>
      <div style="margin-top: 10px;">
        <img src="https://vauhtikiihtyyfestival.fi/wp-content/uploads/2024/08/1080x1080_vantaa_2025.webp" 
             alt="vauhtifest" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable")

} else if (dateKey === new Date("2025-08-14").toDateString()) {
  day.addEventListener("click", () =>
    openModal(
      "14.08.2025 - Taiteiden yö." ,
      `
      <p> Taiteiden yö kokoaa jälleen yhteen satoja taidetapahtumia</p>
      <a href="https://helsinkifestival.fi/event/taiteiden-yo/" </a>
      <div style="margin-top: 10px;">
        <img src="https://helsinkifestival.fi/app/uploads/sites/8/2022/04/TY1-1440x821.jpeg?ver=772a886c" 
             alt="taiteidenyo" style="width: 100%; border-radius: 8px;" />
      </div>`
    )
  );
  day.classList.add("clickable")

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
