import React , { PropTypes } from 'react';
import VerdisMap from './VerdisMap';
import { connect } from "react-redux";
import KassenzeichenPanel from '../components/KassenzeichenPanel';
import FlaechenPanel from '../components/FlaechenPanel';
import Flexbox from 'flexbox-react';

function mapStateToProps(state) {
  return {
    ui: state.browserUI,
    kassenzeichen: state.kassenzeichen
  };
}



const verticalPanelWidth=280;

const horizontalPanelHeight=150;
const horizontalPanelWidth=200;

const switchToBottomWhenSmallerThan=900;

export class HomePage_ extends React.Component {
  
  render() {
    let mapHeight;
    if (this.props.ui.height) {
      mapHeight = this.props.ui.height - 55;
    }
    else {
      mapHeight = 50;
    }

    const detailsStyle= {
      'backgroundColor': '#EEE',
      'padding': '5px 5px 5px 5px',
      'overflow': 'auto',
    };

    let flaechen=this.props.kassenzeichen.flaechen;
    let flComps=[];
    


    if (this.props.ui.width < switchToBottomWhenSmallerThan) {
      if (flaechen){
        flComps=flaechen.map(function (flaeche) {
          return (
            <Flexbox  key={"flex"+flaeche.id} height={horizontalPanelHeight} minWidth={horizontalPanelWidth}>
              <FlaechenPanel key={flaeche.id} flaeche={flaeche}/>
            </Flexbox> 
                    );
         });
      }      
      return (
        <div>
            <VerdisMap height={mapHeight-horizontalPanelHeight-25} />
            <Flexbox flexDirection="row" style={detailsStyle} >
              <Flexbox  height={horizontalPanelHeight} minWidth={horizontalPanelWidth}>
                <KassenzeichenPanel kassenzeichen={this.props.kassenzeichen}/>
              </Flexbox>
             {flComps}   
           </Flexbox>
        </div>
      );
    }
    else {
      if (flaechen){
        flComps=flaechen.map(function (flaeche) {
          return (
                     <FlaechenPanel key={flaeche.id} flaeche={flaeche}/>
                   );
         });
      }
      return (
        <div>
          <div style={Object.assign({}, detailsStyle, { height:mapHeight+'px', width:verticalPanelWidth+'px', float: 'right'})}>
              <KassenzeichenPanel kassenzeichen={this.props.kassenzeichen}/>
              {flComps}   
          </div>
          <VerdisMap height={mapHeight} />
        </div>
      );
    }
  }
}

const HomePage = connect(mapStateToProps)(HomePage_);
export default HomePage;

HomePage_.propTypes = {
  ui: PropTypes.object,
  kassenzeichen: PropTypes.object
};
