import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
// TODO: Convert this too a nav bar

// LV 0 Start
import IntroMixWorkspace from './0. Start/Intro - Mix Workspace.pdf';
import LicenseAndDisclaimer from './0. Start/License & Disclaimer .pdf';
import Safety from './0. Start/Safety.pdf';

// LV 1 Learn about Plastic
import FloatingProperties from './1. Learn about plastic/Floating-Properties_A1.pdf';
import PhysicalProperties from './1. Learn about plastic/Physical-Properties_A4.pdf';
import PlasticTypes from './1. Learn about plastic/Plastic-Types_A1.pdf';
import VisualProperties from './1. Learn about plastic/Visual-Properties_A1.pdf';

// LV 2 Plan your Business
import ActionPlan from './2. Plan your Business/1. Templates/Template - Action-Plan_A0.pdf';
import BusinessPlan from './2. Plan your Business/1. Templates/Template - Business-Plan.docx';
// TODO: Swtch to these when complete
// import a from './2. Plan your Business/3. Precious Plastic Omaha/Template - Action-Plan.pdf';
// import a from './2. Plan your Business/3. Precious Plastic Omaha/Template - Business-Plan.pdf';

// LV 3 Build the Machines
import Shredder from './3. Build the machines/1. Shredder/START_Shredder.pdf';
import Injection from './3. Build the machines/2. Injection/START_Injection.pdf';
import Compression from './3. Build the machines/3. Compression/START_Compression.pdf';
import Extrusion from './3. Build the machines/4. Extrusion/START_Extrusion.pdf';

// LV 4 Setup the Workspace
import Floorplan from './4. Set up the space/Floorplan-Generator-Mix.pdf';
// TODO: add all blueprints

// LV 5 Create Branding
import Badge from './5. Branding/1. Badges/Badge Workspace.png';
import Logo from './5. Branding/3. Logo/3. Custom Logo/Workspace Logo Basic Template.pdf';

// LV 6 Run your Workspace
import MeltingTemperatures from './6. Run your Workspace/2. Prints/Melting-Temperatures_A1.pdf';
import PresentationBook from './6. Run your Workspace/3. Share/1. Presentation/Precious Plastic - Presentation - Booklet.pdf';
import PresentationDesk from './6. Run your Workspace/3. Share/1. Presentation/Precious Plastic - Presentation - Deck.pdf';

const pdfs = [
  {key:'0. Intro Mix Workspace',    value:IntroMixWorkspace},
  {key:'0. License And Disclaimer', value:LicenseAndDisclaimer},
  {key:'0. Safety',                 value:Safety},
  {key:'1. Floating Properties',    value:FloatingProperties},
  {key:'1. Physical Properties',    value:PhysicalProperties},
  {key:'1. Plastic Types',          value:PlasticTypes},
  {key:'1. Visual Properties',      value:VisualProperties},
  {key:'2. Action Plan',            value:ActionPlan},
  {key:'2. Business Plan',          value:BusinessPlan},
  {key:'3. Shredder',               value:Shredder},
  {key:'3. Injection',              value:Injection},
  {key:'3. Compression',            value:Compression},
  {key:'3. Extrusion',              value:Extrusion},
  {key:'4. Floor plan',             value:Floorplan},
  {key:'5. Badge',                  value:Badge},
  {key:'5. Logo',                   value:Logo},
  {key:'6. Melting Temperatures',   value:MeltingTemperatures},
  {key:'6. Presentation Book',      value:PresentationBook},
  {key:'6. Presentation Desk',      value:PresentationDesk}
];

const items = [];
for (const [index, pdf] of pdfs.entries()) {
  items.push(<MenuItem value={pdf.value}>{pdf.key}</MenuItem>);
}

function PdfLoader(props) {
  return items;
}

export default PdfLoader;
