import UseBeforeLeave from "./UseBeforeLeave";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UseInput from "./UseInput";
import UsePreventLeave from "./UsePreventLeave";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";

const App = () => {
  return (
    <div className="App">
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
    </div>
  );
};

export default App;
