const showError = (e) => {
  errorState = true;
  error.style.display = "block";
  errorInfo.innerText = e;
};
const showFeedback = (f) => {
  feedback.style.display = "block";
  feedbackInfo.innerText = f;
};
const hideError = () => {
  error.style.display = "none";
};
const hideFeedback = () => {
  feedback.style.display = "none";
};

editClose.onclick = () => {
  editForm.style.display = "none";
};

errorClose.onclick = () => {
  error.style.display = "none";
};

fbClose.onclick = () => {
  feedback.style.display = "none";
};

const showEditForm = () => {
  editForm.style.display = "block";
};

const hideEditForm = () => {
  editForm.style.display = "none";
};

const showResults = () => {
  results.style.display = "block";
};
const hideResults = () => {
  results.style.display = "none";
};

const showPoolList = () => {
  poolList.style.display = "block";
};
const hidePoolList = () => {
  poolList.style.display = "none";
};

const showGenerateForm = () => {
  generateForm.style.display = "block";
};
const hideGenerateForm = () => {
  generateForm.style.display = "none";
};
editList.onclick = () => {
  hideResults();
  hideError();
  hideSlider();
  hideFeedback();
  showPoolList();
};
const showSlider = () => {
  slidesSection.style.display = "block";
};
const hideSlider = () => {
  slidesSection.style.display = "none";
};
