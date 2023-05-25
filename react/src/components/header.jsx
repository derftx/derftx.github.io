export function Header() {
  const navigationRightItems = [
    { id: 1, text: "GitHub", url: "https://github.com/derftx" },
    { id: 2, text: "Twitter", url: "https://twitter.com/howdy_derftx" },
  ];

  const navigationRightElements = navigationRightItems.map((item) => (
    <a
      className="button is-ghost is-light"
      href={item.url}
      key={item.id}
      rel="noopener noreferrer"
      target="_blank"
    >
      {item.text}
    </a>
  ));

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons are-medium">
                {navigationRightElements}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
