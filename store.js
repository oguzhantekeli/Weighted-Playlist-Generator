// Elements store
const beforeGenerateButton = document.getElementById("before-generate");
const addNewButton = document.getElementById("addnew");
const editForm = document.getElementById("edit-item");
const editClose = document.getElementById("editclose");
const feedback = document.getElementById("feedback");
const feedbackInfo = document.getElementById("feedback-info");
const fbClose = document.getElementById("fbclose");
const itemName = document.getElementById("name");
const itemUrl = document.getElementById("url");
const itemWeight = document.getElementById("weight");
const itemSave = document.getElementById("save");
const results = document.getElementById("results");
const resultList = document.getElementById("result-list");
const editList = document.getElementById("btn-editlist");
const error = document.getElementById("error");
const errorInfo = document.getElementById("errorinfo");
const errorClose = document.getElementById("errorclose");
const generateForm = document.getElementById("item-count");
const generateCount = document.getElementById("count");
const generateListButton = document.getElementById("generatelistbutton");
const poolListTable = document.getElementById("pool-list");
const poolList = document.getElementById("lists");
const slider = document.getElementById("slider");
const slidesSection = document.getElementById("carousel");

// Logic store
var itemsToGenerateArray = []; // item pool
var generatedListArray = []; // results
var errorState = false; // error state control
const samplePoolData = [
  { name: "item1", url: "https://picsum.photos/100", weight: 3 },
  { name: "item2", url: "https://picsum.photos/100", weight: 5 },
  { name: "item3", url: "https://picsum.photos/100", weight: 1 },
  { name: "item4", url: "https://picsum.photos/100", weight: 1 },
];
itemsToGenerateArray = samplePoolData;
