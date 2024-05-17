//ESTA FUNÇÃO ADICIONA AS IMG BACKGROUND EM CADA SECTION
window.onload = function () {
  const screenWidth = window.screen.width;
  const sections = document.getElementsByClassName("container_img");
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.backgroundImage =
      "url('Imagens/Homepage-Model-3-Desktop.jpg')";
    sections[2].style.backgroundImage =
      "url('Imagens/Homepage-Model-X-Desktop.jpg')";
    sections[3].style.backgroundImage =
      "url('Imagens/Homepage-Model-S-Desktop.jpg')";
    sections[4].style.backgroundImage =
      "url('Imagens/Homepage-Cybertruck-Desktop.jpg')";
    sections[5].style.backgroundImage =
      "url('Imagens/Homepage-SolarPanels-01-Desktop.jpg')";
    sections[6].style.backgroundImage =
      "url('Imagens/Homepage-SolarRoof-Desktop-Global.jpg')";
    sections[7].style.backgroundImage =
      "url('Imagens/Homepage-Powerwall-01-Desktop.jpg')";
    sections[8].style.backgroundImage =
      "url('Imagens/Homepage-Accessories-Desktop.jpg')";
  }
  if (screenWidth <= 450) {
    for (let i = 0; i < sections.length; i++) {
      sections[1].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-Model-3-Mobile-LHD-v2.png')";
      sections[2].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-Model-X-Mobile-LHD_001.png')";
      sections[3].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-Model-S-Mobile-LHD-6.22.png')";
      sections[4].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-Cybertruck-Mobile.png')";
      sections[5].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-SolarPanels-01-Mobile.png')";
      sections[6].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-SolarRoof-Mobile.png')";
      sections[7].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-Powerwall-01-Mobile.png')";
      sections[8].style.backgroundImage =
        "url('BackGround-Mobile/Homepage-Accessories-Mobile.png')";
    }
  }
}
