import SearchInput from "../../../Inputs/SearchInput";

const TopBarSearch = ({
  input = { search: "" },
  setInput = () => {},
  stateInput = "",
  setStateInput = () => {},
  directInput = true,
  showLabel = false,
  placeholder = "search",
  s = 3,
}) => {
  return (
    <div className=" flex flex-row items-center gap-x-5 mt-4 mb-4">
      <div style={{ flex: 1 }}>
        <SearchInput
          input={input}
          setInput={setInput}
          stateInput={stateInput}
          setStateInput={setStateInput}
          directInput={directInput}
          showLabel={showLabel}
          placeholder={placeholder}
        />
      </div>
      <div style={{ flex: s }}></div>
    </div>
  );
};

export default TopBarSearch;
