import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import IntroMixWorkspace from './starterkit/0. Start/Intro - Mix Workspace.pdf';
import LicenseAndDisclaimer from './starterkit/0. Start/License & Disclaimer .pdf';
import Safety from './starterkit/0. Start/Safety.pdf'

const paths = [
  {key:'Intro - Mix Workspace', value:IntroMixWorkspace},
  {key:'License & Disclaimer', value:LicenseAndDisclaimer},
  {key:'Safety', value:Safety}
];

const pdfs = [];
for (const [index, pdf] of paths.entries()) {
  pdfs.push(<MenuItem value={pdf.value}>{pdf.key}</MenuItem>);
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
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
        {pdfs}
      </Select>
      <FormHelperText>Here our the steps</FormHelperText>
    </FormControl>
    </div>
  );
}
