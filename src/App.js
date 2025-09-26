import logo from "./logo.svg";
import FirstPost from "./FirstPost";
import "./App.css";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="App">
      <header>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ width: "60%", display: "flex", justifyContent: "center" }}
          >
            <div style={{ widows: "70%" }}>
              <FirstPost postName="Nour" postBody="Hello world"/>
              <FirstPost postName="First Post" postBody="Hello Again"/>
              <FirstPost postName="Second Post" postBody="Hello Again Again"/>
              <FirstPost postName="Third Post" postBody="Good Bye"/>
            </div>
            <div style={{width:"30%",marginTop:"25%"}}>
              <SideMenu/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
