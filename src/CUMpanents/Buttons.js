function Buttons({ buttons }) {
  return (
    <div>
      <button
        onClick={() => {
          buttons("Leo");
        }}
      >
        Leo
      </button>
      <button
        onClick={() => {
            buttons("Max");
        }}
      >
        Max
      </button>
      <button
        onClick={() => {
            buttons("KirillP");
        }}
      >
        KirillP
      </button>
      <button
        onClick={() => {
            buttons("");
        }}
      >
        Out
      </button>
    </div>
  );
}

export default Buttons;
