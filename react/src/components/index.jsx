export function Index() {
  const stack = [
    { id: 1, text: "JavaScript" },
    { id: 2, text: "Node.js" },
    { id: 3, text: "React" },
  ];

  const stackElements = stack.map((item) => (
    <span className="tag is-rounded" key={item.id}>
      {item.text}
    </span>
  ));

  return (
    <section className="hero-body">
      <div>
        <h1 className="title is-1">DERFTX</h1>
        <h2 className="subtitle is-3">startup</h2>

        <div className="tags are-medium">{stackElements}</div>
      </div>
    </section>
  );
}
