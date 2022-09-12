import logo from './logo.svg';
import './App.css';
import './../src/BaiTapThucHanhLayout/cssComponent.css'
import HeaderComponent from './BaiTapThucHanhLayout/HeaderComponent copy 2';
import BodyComponent from './BaiTapThucHanhLayout/BodyComponent';
import Footercomponent from './BaiTapThucHanhLayout/Footercomponent';
import SectionBodyComponent from './BaiTapThucHanhLayout/SectionBodyComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <BodyComponent />
      <SectionBodyComponent />

      <Footercomponent />

    </div>
  );
}

export default App;
