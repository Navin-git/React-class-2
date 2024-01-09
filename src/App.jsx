import "./App.css";
import Card from "./components/common/Card";
const App = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      <Card
        title="Nabin"
        dec="dsaf dsafsdaf dsf dsafdsaa dsfadsfsa"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDM43pAzXkKe97pmZXJ_HEX68fQMQc0J_hRmmzxOmWDz_BPjv-rR5rDYXPWqfKdwNHKs&usqp=CAU"
      />
      <Card
        title="Rabin"
        dec="asdfadsf dsaf aaa a d d d"
        pic="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
      />
    </div>
  );
};
export default App;
