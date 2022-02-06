if (!errorState) {
  createPool(itemsToGenerateArray);
} else {
  showError("An error occured.");
}

addNewButton.onclick = () => {
  hideResults();
  showPoolList();
  hideFeedback();
  hideError();
  showEditForm();
  itemName.focus();
  itemName.value = null;
  itemUrl.value = null;
  itemWeight.value = 1;
  itemSave.onclick = () => {
    if (
      itemName.value !== "" &&
      itemUrl.value !== "" &&
      Number(itemWeight.value) > 0 &&
      Number(itemWeight.value) < 11
    ) {
      hideEditForm();
      itemsToGenerateArray.unshift({
        name: itemName.value,
        url: itemUrl.value,
        weight: Number(itemWeight.value),
      });
      poolListTable.innerHTML = "";
      createPool(itemsToGenerateArray);
      showFeedback("New item added successfully.");
    } else {
      hideEditForm();
      showError("Can not add new item. Please check your values");
    }
  };
};

const editItem = (item, isNew = true) => {
  showEditForm();
  itemName.focus();
  itemName.value = itemsToGenerateArray[item].name;
  itemUrl.value = itemsToGenerateArray[item].url;
  itemWeight.value = itemsToGenerateArray[item].weight;
  itemSave.onclick = () => {
    if (
      itemName.value !== "" &&
      itemUrl.value !== "" &&
      !isNew &&
      Number(itemWeight.value) > 0 &&
      Number(itemWeight.value) < 11
    ) {
      hideEditForm();
      itemsToGenerateArray[item].name = itemName.value;
      itemsToGenerateArray[item].url = itemUrl.value;
      itemsToGenerateArray[item].weight = Number(itemWeight.value);
      poolListTable.innerHTML = "";
      createPool(itemsToGenerateArray);
      hideError();
      showFeedback("Item saved successfully.");
    } else {
      hideFeedback();
      hideEditForm();
      showError("Can not update item. Please check your values");
    }
  };
};

const deleteItem = (item) => {
  itemsToGenerateArray.splice(item, 1);
  poolListTable.innerHTML = "";
  createPool(itemsToGenerateArray);
  hideError();
  showFeedback("Item deleted successfully.");
};
