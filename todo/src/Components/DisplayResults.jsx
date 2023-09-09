export default function DisplayResults({ form }) {
  return (
    <div className="display">
      {form && (
        <div className="displayContainer">
          <p>title : {form.input}</p>
          <p>body: {form.body}</p>
        </div>
      )}
    </div>
  );
}
