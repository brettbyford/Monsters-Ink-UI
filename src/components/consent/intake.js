import * as React from "react"
// import Header from "../components/header";
// import Button from "../components/button";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { artistDropDown, container, inputContainer, yourNameInput, 
    consentContainer, consentText, buttonContainer, buttonCancel, 
    buttonNext, questionContainer, questionText  } from './intake.module.css';

const Intake = () => {
    // state
    const [clientName, setClientName] = React.useState("");
    const [artist, setArtist] = React.useState("");
    const [open, setOpen] = React.useState(true);
    const [artists, setArtists] = React.useState([
      {label: 'Aaron Plyler', value: 'Aaron Plyler'},
      {label: 'Someone Else', value: 'Someone Else'}
    ]);
    const [hepatitis, setHepatitis] = React.useState(null);
    
    const intakeText = `I, ${clientName} , hereby consent to Your Artist Name of Monsters Ink to perform a tattoo/piercing, and in consideration of doing so, I hereby release Your Artist Name and Monsters Ink from all manner of liabilities, claims, actions and demands in law, or in equity, which I or my heirsmight now or hereafter by reason of complying with my request for a tattoo or piercing.

      I fully understand that any employee of Monsters Ink, when performing a tattoo or piercing, does not act in the capacity as a medical professional and the suggestions they make are just suggestions. They are not to be construed as or
      substituted for advice from a medical professional. I understand that the tattoo/piercing will be performed using appropriate techniques, instruments, and pigments. I also understand that infections can occur due to lack of proper hygiene and/or pigment sensitivities. To ensure proper healing of my tattoo/piercing, I agree to follow the written and verbal aftercare instructions that will be provided until healing is complete. I understand that a tattoo or piercing may take several weeks to heal properly.

      I understand that I am making a permanent change to my body and no claims about the possibility of reversing these changes have been made or implied by Monsters Ink or any of it’s employees or agents.

      Please answer the following questions: (answering yes to any of these does not necessarily preclude the person from receiving a tattoo/piercing)`
    
    const questions = [
      { name: "hepatitis", text: "Has a physician told you that you have hepatitis?", value: null, set: () => { setHepatitis() } },
      { name: "epilepsy", text: "Are you epileptic, have seizures, narcoleptic, or prone to fainting?", value: null },
      { name: "diabetes", text: "Do you have diabetes?", value: null },
      { name: "bleeding", text: "Do you have difficulty in stopping bleeding?", value: null },
      { name: "bloodThinner", text: "Do you take a blood thinner?", value: null },
      { name: "heartProblems", text: "Do you have heart related problems?", value: null },
      { name: "bloodPressure", text: "Do you have high blood pressure?", value: null },
      { name: "allergies", text: "Do you have any known allergies? If so, please list", value: null, other: "" },
      { name: "alcohol", text: "Have you consumed any alcoholic beverages within the last 8 hours?", value: null },
      { name: "food2hours", text: "Have you consumed any food within the last 2 hours?", value: null },
      { name: "anticoagulants", text: "Have you consumed any anticoagulants (aspirin, ibuprofen, etc) in the last 24 hours?", value: null },
      { name: "pregnant", text: "Are you pregnant or breastfeeding?", value: null },
      { name: "healing", text: "Do you have any conditions or skin disease that might affect the healing of this tattoo/piercing?", value: null },
    ];
    
    return (
        <div className={container}>
          {/* <Header subheaderText="Consent and Release Form"></Header> */}
          <div className={inputContainer}>
              {/* <input 
                placeholder='Your Name' 
                className={yourNameInput} 
                onChangeText={(text) => { setClientName(text)}}>
              </input> */}
              <TextField id="outlined-basic" label="Your Name" variant="outlined" onChangeText={(text) => { setClientName(text)}} />

            <TextField
                id="outlined-select-currency"
                select
                label="Select Artist"
                defaultValue=""
                >
                {artists.map((a) => (
                    <MenuItem key={a.value} value={a.value}>
                    {a.label}
                    </MenuItem>
                ))}
            </TextField> 
              {/* <DropDownPicker 
                placeholder='Select an artist'
                containerProps={{ style: {width: 200, marginLeft: 5, marginRight: 10}}}
                className={artistDropDown} 
                open={open}
                value={artist}
                items={items}
                setOpen={setOpen}
                setValue={setArtist}
                setItems={setItems}
              ></DropDownPicker> */}
          </div>
          <div className={consentContainer}>
            <span className={consentText}>{intakeText}</span>
          </div>
          <div>
            {questions.map((item) => <Question text={item.text} value={item.value} />)}
          </div>
          <div className={buttonContainer}>
            <Button className={buttonCancel} 
            // onPress={() =>
            //   navigation.navigate('Home')
            // }
            >Cancel</Button>
            <Button className={buttonNext} 
            // onPress={() =>
            //   navigation.navigate('Home')
            // }
            >Next</Button>
          </div>
        </div>
    );
}

const Question = ({name, text, value}) => (
  <div className={questionContainer}>
    <span className={questionText}>{text}</span>
    <QuestionButtons name={name} />
  </div>
);

const QuestionButtons = (name) => {
//   const buttons = React.useMemo((name) => ([
//     {
//       id: name + 'Yes',
//       label: 'Yes',
//       value: true
//     },
//     {
//       id: name + 'No',
//       label: 'No',
//       value: false
//     }
//   ]), []);
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Yes</Button>
        <Button>No</Button>
    </ButtonGroup>
//   <RadioGroup 
//     radioButtons={buttons} 
//     onPress={setSelectedId}
//     selectedId={selectedId}
//   />

}

export default Intake;