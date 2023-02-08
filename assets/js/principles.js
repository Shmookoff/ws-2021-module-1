const carsMeta = {
  economy: {
    bonuses: 100,
    img: "./assets/imgs/cars/kia__rio.png",
  },
  economyPlus: {
    bonuses: 200,
    img: "./assets/imgs/cars/volkswagen__polo.png",
  },
};

const bigCar = document.getElementById("big-car");
const bonusesGained = document.getElementById("bonuses-gained");

const onCarPick = (car) => {
  changeBigCar(carsMeta[car]);
  animateBonuses(carsMeta[car].bonuses);
};

const animateBonuses = (finalBonuses) => {
  const animateTime = 200;
  const forwards = finalBonuses - +bonusesGained.innerText > 0;
  const animate = () => {
    const currentBonuses = +bonusesGained.innerText;
    const time = finalBonuses / animateTime;

    if (currentBonuses < finalBonuses && forwards) {
      bonusesGained.innerText = Math.ceil(currentBonuses + time);
      setTimeout(animate, 1);
    } else if (currentBonuses > finalBonuses && !forwards) {
      bonusesGained.innerText = Math.floor(currentBonuses - time);
      setTimeout(animate, 1);
    } else {
      bonusesGained.innerText = finalBonuses;
    }
  };
  animate();
};

const changeBigCar = (carMeta) => {
  bigCar.classList.remove("big-car-in");
  bigCar.classList.add("big-car-out");

  setTimeout(() => {
    bigCar.src = carMeta.img;
    bigCar.classList.remove("big-car-out");
    bigCar.classList.add("big-car-in");
  }, 300);
};

onCarPick("economy");
