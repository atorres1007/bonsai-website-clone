import { Link } from 'react-router-dom';
import juniper from './Photos/Juniper.jpg';
import blackPine from './Photos/black-pine.jpg';
import maple from './Photos/maple.jpg';
import cherryBlossom from './Photos/cherry-blossom.jpg';
import cedar from './Photos/cedar.jpg';
import ginsengFicus from './Photos/ginseng-ficus.jpg';
import weepingFig from './Photos/weeping-fig.jpg';
import dwarfJade from './Photos/dwarf-jade.jpg';
import pomegranate from './Photos/pomegranate.jpg';
function  Home() {
  return (
    <div className='grid'>
      <Link to = "/Juniper"><div className='pad1'>
        <div className='absolute'>
          <img src={juniper} />
        </div>
        <div className='description'>
          <h1 className='name'>JUNIPER</h1>
          <hr/>
          <h1><span>(JUNIPERUS)</span></h1>
        </div>
      </div></Link>
      <Link to = "/Pine"><div className='pad2'> 
        <div className='absolute'>
          <img src={blackPine} />
        </div>
        <div className='description'>
          <h1 className='name'>PINE</h1>
          <hr/>
          <h1><span>(PINUS)</span></h1>
        </div>
      </div></Link>
      <Link to = "/JapaneseMaple"><div className='pad3'>
        <div className='absolute'>
          <img src={maple} />
        </div>
        <div className='description'>
          <h1 className='name'>JAPANESE MAPLE</h1>
          <hr/>
          <h1><span>(ACER PALMATUM)</span></h1>
        </div>
      </div></Link>
      <Link to ="/CherryBlossom"><div className='pad4'>
        <div className='absolute'>
          <img src={cherryBlossom} />
        </div>
        <div className='description'>
          <h1 className='name'>CHERRY BLOSSOM</h1> 
          <hr/>
          <h1><span>(PRUNUS SERRULATA)</span></h1>
        </div>
      </div></Link>
      <Link to = "/Cedar"><div className='pad5'>
        <div className='absolute'>
          <img src={cedar} />
        </div>
        <div className='description'>
          <h1 className='name'>CEDAR</h1>
          <hr/>
          <h1><span>(CEDRUS)</span></h1>
        </div>
      </div></Link>
      <Link to = "/GinsengFicus"><div className='pad'>
        <div className='absolute'>
          <img src={ginsengFicus} />
        </div>
        <div className='description'>
          <h1 className='name'>GINSENG FICUS</h1>
          <hr/>
          <h1><span>(FICUS RETUSA)</span></h1>
        </div>
      </div></Link>
      <Link to = "/WeepingFig"><div className='pad'>
        <div className='absolute'>
          <img src={weepingFig} />
        </div>
        <div className='description'>
          <h1 className='name'>WEEPING FIG</h1>
          <hr/>
          <h1><span>(FICUS BENJAMINA)</span></h1>
        </div>
      </div></Link>
      <Link to ="/DwarfJade"><div className='pad'>
        <div className='absolute'>
          <img src={dwarfJade}/>
        </div>
        <div className='description'>
          <h1 className='name'>DWARF JADE</h1>
          <hr/>
          <h1><span>(PORTULACARIA AFRA)</span></h1>
        </div>
      </div></Link>
      <Link to = "/Pomegranate"><div className='pad'>
        <div className='absolute'>
          <img src={pomegranate}/>
        </div>
        <div className='description'>
          <h1 className='name'>POMEGRANATE</h1>
          <hr/>
          <h1><span>(PUNICA GRANATUM)</span></h1>
        </div>
      </div></Link>
    </div>
  );
}
export default Home;