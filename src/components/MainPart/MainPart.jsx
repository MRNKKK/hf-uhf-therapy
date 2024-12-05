import LeftTermometr from '../Termometrs/LeftTermometr/LeftTermometr';
import RightTermometr from '../Termometrs/RightTermometr/RightTermometr';
import ImageBlock from '../ImageBlock/ImageBlock';
import MyJubmotron from '../MyJubmotron/MyJubmotron';
import Instruction from '../Instruction/Instruction'

import './MainPart.css';

export default function MainPart() {
  return (
    <>
      <Instruction />
      <div className="main-part">
        <div className="row">
          <MyJubmotron />
        </div>
        <div className="row">
          <LeftTermometr />
          <ImageBlock />
          <RightTermometr />
        </div>
      </div>
    </>
  );
}
