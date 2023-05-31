export default function Array({ array }) {
  return (
    <div className="array-container">
      {array && array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{
            height: `${value}px`,
            backgroundColor: 'turquoise',
          }}></div>
      ))}
    </div>
  );
}
