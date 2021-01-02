import UseAxios from "./UseAxios";
import UseBeforeLeave from "./UseBeforeLeave";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UseFullScreen from "./UseFullScreen";
import UseInput from "./UseInput";
import UseNotification from "./UseNotification";
import UsePreventLeave from "./UsePreventLeave";
import UseScroll from "./UseScroll";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";

const App = () => {
  return (
    <div className="App" style={{ height: 5000 }}>
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
      <UseScroll />
      <UseFullScreen />
      <UseNotification />
      <UseAxios />
    </div>
  );
};

export default App;
