const createList = (result) => {
  resultList.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    //define new items
    var listItem = document.createElement("li");
    var innerDiv = document.createElement("div");
    var innerItemNo = document.createElement("p");
    var innerImage = document.createElement("img");
    var innerItemName = document.createElement("p");
    //append
    resultList.appendChild(listItem);
    listItem.appendChild(innerDiv);
    innerDiv.appendChild(innerItemNo);
    innerDiv.appendChild(innerImage);
    innerDiv.appendChild(innerItemName);
    //set attributes
    innerDiv.setAttribute("class", "list-item");
    innerItemNo.setAttribute("class", "itemno");
    innerItemNo.textContent = `${i + 1}.`;
    innerItemName.textContent = result[i].name;
    innerImage.setAttribute("src", result[i].url);
    innerImage.setAttribute("alt", result[i].name);
  }
};
