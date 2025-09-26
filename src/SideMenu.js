import TagButton from "./TagButton";
export default function SideMenu() {
  return (
    <div style={{ border: "solid teal 5px" }}>
      <TagButton title="how r u">
        <div>
          <span>😆😆😆</span>
        </div>
      </TagButton>
      <TagButton title="happy">
        <div>
          <img style={{width:"100px"}} src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </TagButton>
      <TagButton title="sad">
        <h1>click me</h1>
        <span>😍😍😍</span>
      </TagButton>
      <TagButton title="extra happy"></TagButton>
      <TagButton title="depressed"></TagButton>
    </div>
  );
}
