beforeGenerateButton.onclick = () => {
  if (itemsToGenerateArray.length > 2) {
    showGenerateForm();
    hideError();
    hideFeedback;
    generateCount.value = 3;
    generateCount.focus();
    hideResults();
    showPoolList();
  } else {
    hideFeedback();
    showError("Can not generate list. Not enough items.");
  }
};
window.onclick = (event) => {
  if (event.target == generateForm) {
    hideGenerateForm();
  }
};

generateListButton.onclick = () => {
  hideGenerateForm();
  if (Number(generateCount.value) > 2) {
    hidePoolList();
    generateNewList(Number(generateCount.value));
    createList(generatedListArray);
    createSlider(generatedListArray);
    showSlider();
    showSlides(slideIndex);
    showFeedback("Results generated successfully.");
    showResults();
  } else {
    hideFeedback();
    showError("Can not generate list. Please check your values");
  }
};

const generateNewList = (val) => {
  if (val > 2) {
    let result = resultsgenerator(val);
    const counts = {};
    for (const element of result) {
      counts[element] = counts[element] ? counts[element] + 1 : 1;
    }
  } else {
    showError("Can not generate list. Please check your values");
  }
};

const probabilityCalculator = (arr) => {
  let probabilityArr = [];
  let totalWeight = 0;
  for (let i = 0; i < arr.length; i++) {
    totalWeight += arr[i].weight;
  }
  let randomNumber = Math.floor(Math.random() * totalWeight);
  arr.forEach((item) => {
    for (let i = 0; i < item.weight; i++) {
      probabilityArr.push(item);
    }
  });
  return probabilityArr[randomNumber];
};

const resultsgenerator = (n) => {
  let currentItem;
  generatedListArray = [];
  for (let i = 0; i < n; i++) {
    currentItem = probabilityCalculator(itemsToGenerateArray);
    while (currentItem === generatedListArray[i - 1]) {
      currentItem = probabilityCalculator(itemsToGenerateArray);
    }
    generatedListArray.push(currentItem);
  }
  return generatedListArray;
};
