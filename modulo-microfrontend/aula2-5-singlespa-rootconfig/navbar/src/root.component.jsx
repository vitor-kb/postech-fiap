export default function Root(props) {
  function onClick() {
    const event = new CustomEvent("OnNavClick");
    document.dispatchEvent(event);
  }

  return (
    <section>
      {props.name} is mounted!
      <button onClick={onClick}>Broadcast do evento navbar</button>
    </section>
  );
}
