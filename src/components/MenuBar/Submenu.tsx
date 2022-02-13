interface SubmenuItem {
  name:string,
  link:string
}
function Submenu({ items }:{items:SubmenuItem[]}) {
  return (
    <nav>
      <ul>
        {items.map((item:SubmenuItem) => (<li key={item.link}>{item.name}</li>))}
      </ul>
    </nav>
  );
}

export default Submenu;
