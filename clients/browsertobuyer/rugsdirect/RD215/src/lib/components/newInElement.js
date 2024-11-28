const newInElement = (ID) => {
  const html = `
      <li class="navmenu-item navmenu-basic__item ${ID}__newIn ">
        <a class="
            navmenu-link
            navmenu-link-depth-1
            hover:text-underline hover:text-brandPurple
            " href="/collections/living-room-rugs?sort_by=created-descending"><span>New In</span>
        </a>
      </li>
    `;
  return html.trim();
};

export default newInElement;
