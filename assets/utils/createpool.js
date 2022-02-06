const createPool = (source) => {
  if (source.length > 0) {
    for (let i = 0; i < source.length; i++) {
      const itemRow = poolListTable.insertRow();
      itemRow.insertCell().appendChild(document.createTextNode(`${i + 1}.`));
      Object.assign(
        itemRow.insertCell().appendChild(document.createElement("img")),
        {
          src: source[i].url,
          alt: `item${i + 1}`,
        }
      );
      itemRow.insertCell().appendChild(document.createTextNode(source[i].name));
      itemRow
        .insertCell()
        .appendChild(document.createTextNode(`Weight: ${source[i].weight}`));
      Object.assign(
        itemRow.insertCell().appendChild(document.createElement("div")),
        { className: "action-buttons" }
      );
    }
    var buttonsCell = document.getElementsByClassName("action-buttons");
    for (let i = 0; i < buttonsCell.length; i++) {
      buttonsCell[
        i
      ].innerHTML = `<button class="btn-edit-item${i}" id="btn-edit-item${i}" onclick="editItem(${i},${false})">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#333333"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                        />
                      </svg>
                    </button>
                    <button class="delete-item${i}" id="delete-item${i}" onclick="deleteItem(${i})">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#a01c1c"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                        />
                      </svg>
                    </button>
  `;
    }
  } else {
    poolListTable
      .appendChild(document.createElement("tr"))
      .appendChild(document.createElement("td"))
      .appendChild(
        document.createTextNode("No items here..! Please add some.")
      );
  }
};
