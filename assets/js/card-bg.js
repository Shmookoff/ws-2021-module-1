const cards = document.getElementsByClassName("card-meta");

for (const card of cards) {
  const cardId = card.id.split("_")[1];
  const cardBrand = card.getElementsByClassName("brand")[0].innerHTML;
  const cardModel = card.getElementsByClassName("model")[0].innerHTML;
  console.log({ cardBrand, cardModel, cardId });

  const cardBg = document.getElementById(`bg-card_${cardId}`);

  let bgHtml = "";
  for (let i = 0; i < 12; i++) {
    const bgText =
      i % 2 === 0 ? `${cardBrand} ${cardModel} ` : `${cardModel} ${cardBrand} `;
    bgHtml += `${bgText.repeat(3)} <br/>`;
  }
  cardBg.innerHTML = bgHtml;
}
