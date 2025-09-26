export default function FirstPost({postName="No Title",postBody="this is the post body"}) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        background: "white",
        margin: "25px",
      }}
    >
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
    </div>
  );
}
