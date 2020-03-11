import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import PdfLoader from './starterkit/PdfLoader.js';

// LV 0 Start
import IntroMixWorkspace from './starterkit/0. Start/Intro - Mix Workspace.pdf';
import LicenseAndDisclaimer from './starterkit/0. Start/License & Disclaimer .pdf';
import Safety from './starterkit/0. Start/Safety.pdf';

// LV 1 Learn about Plastic
import FloatingProperties from './starterkit/1. Learn about plastic/Floating-Properties_A1.pdf';
import PhysicalProperties from './starterkit/1. Learn about plastic/Physical-Properties_A4.pdf';
import PlasticTypes from './starterkit/1. Learn about plastic/Plastic-Types_A1.pdf';
import VisualProperties from './starterkit/1. Learn about plastic/Visual-Properties_A1.pdf';

// LV 2 Plan your Business
import ActionPlan from './starterkit/2. Plan your Business/1. Templates/Template - Action-Plan_A0.pdf';
import BusinessPlan from './starterkit/2. Plan your Business/1. Templates/Template - Business-Plan.docx';
// TODO: Swtch to these when complete
// import a from './2. Plan your Business/3. Precious Plastic Omaha/Template - Action-Plan.pdf';
// import a from './2. Plan your Business/3. Precious Plastic Omaha/Template - Business-Plan.pdf';

// LV 3 Build the Machines
import Shredder from './starterkit/3. Build the machines/1. Shredder/START_Shredder.pdf';
import Injection from './starterkit/3. Build the machines/2. Injection/START_Injection.pdf';
import Compression from './starterkit/3. Build the machines/3. Compression/START_Compression.pdf';
import Extrusion from './starterkit/3. Build the machines/4. Extrusion/START_Extrusion.pdf';

// LV 4 Setup the Workspace
import Floorplan from './starterkit/4. Set up the space/Floorplan-Generator-Mix.pdf';
// TODO: add all blueprints

// LV 5 Create Branding
import Badge from './starterkit/5. Branding/1. Badges/Badge Workspace.png';
import Logo from './starterkit/5. Branding/3. Logo/3. Custom Logo/Workspace Logo Basic Template.pdf';

// LV 6 Run your Workspace
import MeltingTemperatures from './starterkit/6. Run your Workspace/2. Prints/Melting-Temperatures_A1.pdf';
import PresentationBook from './starterkit/6. Run your Workspace/3. Share/1. Presentation/Precious Plastic - Presentation - Booklet.pdf';
import PresentationDesk from './starterkit/6. Run your Workspace/3. Share/1. Presentation/Precious Plastic - Presentation - Deck.pdf';

const pdfs = [
  {key:'0. Intro Mix Workspace', value:IntroMixWorkspace},
  {key:'0. License And Disclaimer', value:LicenseAndDisclaimer},
  {key:'0. Safety', value:Safety},
  {key:'1. Floating Properties', value:FloatingProperties},
  {key:'1. Physical Properties', value:PhysicalProperties},
  {key:'1. Plastic Types', value:PlasticTypes},
  {key:'1. Visual Properties', value:VisualProperties},
  {key:'2. Action Plan', value:ActionPlan},
  {key:'2. Business Plan', value:BusinessPlan},
  {key:'3. Shredder', value:Shredder},
  {key:'3. Injection', value:Injection},
  {key:'3. Compression', value:Compression},
  {key:'3. Extrusion', value:Extrusion},
  {key:'4. Floor plan', value:Floorplan},
  {key:'5. Badge', value:Badge},
  {key:'5. Logo', value:Logo},
  {key:'6. Melting Temperatures', value:MeltingTemperatures},
  {key:'6. Presentation Book', value:PresentationBook},
  {key:'6. Presentation Desk', value:PresentationDesk}
];


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: '90%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PdfSelect(props) {
  const {selection} = props;
  const classes = useStyles();
  const [pdf, setPDF] = React.useState('');

  const handleChange = event => {
    let selectedPDF = event.target.value;
    setPDF(selectedPDF);
  };

  const items = [];
  for (const [index, pdf] of pdfs.entries()) {
    items.push(<MenuItem value={pdf.value}>{pdf.key}</MenuItem>);
  }

  return (

    <div>
    <FormControl className={classes.formControl}>
      <InputLabel id="pdf-select-autowidth-label">Precious Plastic Omaha</InputLabel>
      <Select
        labelId="pdf-select-autowidth-label"
        id="pdf-select-autowidth"
        value={props.pdf}
        onChange={props.action}
        autoWidth
      >
        <MenuItem value="">
          <em>Select One</em>
        </MenuItem>
        {items}
      </Select>
      <FormHelperText>Here our the steps</FormHelperText>
    </FormControl>
    </div>
  );
}
