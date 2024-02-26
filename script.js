{
  const tasks = [
    {
      content: "przeczytać notatki",
      done: false,
    },
    {
      content: "wypić sok",
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";
    for (const task of tasks) {
      htmlString += `
        <li>
            ${task.content}
        </li>
        `;
    }

  document.querySelector(".js-tasks").innerHTML = htmlString;
};
  const init = () => {};
  render();
  init();
}
