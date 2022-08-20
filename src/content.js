import { Top } from './component/top'
import { Header } from './component/header'
import { SideBar } from './component/sideBar'
import { Content } from './component/content'

const Cont = () => {

  return (
    <div className="main page launch-pad-page">
      <Top />        
      <Header />
      <div className="tw-flex tw-w-full">
        <SideBar />
        <div className="tw-background-1 tw-relative tw-flex tw-flex-col tw-flex-auto tw-ml-0 content__regular lg:tw-ml-240px">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Cont;
