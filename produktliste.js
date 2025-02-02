// Finder 'category_list_container' - her skal produktlisten indsættes
let listContainer = document.querySelector(".category_list_container");

// Henter data om alle produkter fra API'et
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  // Når dataen er hentet, konverteres den fra JSON-format (tekst) til et JavaScript-objekt
  .then((data) => showList(data));
// Når dataen er konverteret, kaldes funktionen 'showList' med dataen som argument (dataen sendt til funktionen)

// Funktion der viser listen af produkter
function showList(products) {
  console.log(products); // Logger alle produkter i konsollen, så man kan se den hentede data

  let markup = ""; // Opretter en tom streng, som vi bruger til at bygge HTML'en dynamisk (en slags container)

  products
    .map((product) => {
      // Går igennem hvert produkt i listen og bygger HTML-strukturen for hvert produkt. "+=" adderer hver ny produkt til den eksisterende markup (i slutningen)
      markup += `            
            <div class="item">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                <h2>${product.productdisplayname}</h2>
                <h3>${product.brandname}</h3>
                <div class="price">
                    <p>${product.price},-</p>
                </div>
                <a href="produkt.html">Read more</a>
            </div>`;
    })
    .join("");
  // .join("") samler alle elementerne i arrayet til én stor streng uden mellemrum eller separatorer.
  // Dette betyder, at HTML-strukturen for hvert produkt bliver sat sammen uden ekstra mellemrum mellem dem.
  // Resultatet bliver én sammenhængende streng, der kan indsættes i innerHTML på én gang.

  console.log(markup); // Logger den færdige HTML, så vi kan se resultatet før det indsættes på siden

  listContainer.innerHTML = markup;
  // Indsætter den dynamisk genererede HTML i 'category_list_container' på siden
}
