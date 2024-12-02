var ScreenDisplay=document.getElementById('Display');
// this is the screen where characters are going to be shown
function AppearOnScreen(character) {
// this is where the characters or numbers will appear on the screen 
 if (ScreenDisplay.value==0 || ScreenDisplay.value=='error' || ScreenDisplay.value=='Infinity'){
  ScreenDisplay.value=character;
  // if the display shows 0, error or infinity the display should now show the character 
 }else{
  ScreenDisplay.value=ScreenDisplay.value+character;
  // this happens so that the a number can be added with the value on the display
 }


}
function ClearDisplay() {
 ScreenDisplay.value=0;
 // to clear any value on the screen for it to change to zero
}
function Calculate() {
 try {
  replacedVersion=ScreenDisplay.value.replace(/%/g,'/100')
  // it replaces the percentage with /100 so the computer would be able to recognize it and calculate it
  ScreenDisplay.value=eval(replacedVersion); 
  // it should calculate the value with /100 
 } catch (error) {
  ScreenDisplay.value='error';
  // to show error on the the screen display when an error occurs
 }

}
function Backspace() {
 ScreenDisplay.value=ScreenDisplay.value.slice(0,-1) 
 // slice selects something out of an array
 if (ScreenDisplay.value=='') {
  ScreenDisplay.value=0;
  // if the ScreenDisplay.value is empty it should be replaced with 0
 }
} 
function Negation() {
 // defining the function
 var Replaced_value=ScreenDisplay.value.replace(/(-?\d+(\.\d+)?)$/, (match) => {
 // this helps to find the last number whether a decimal number or whether it has - or not, match gets the number then acts on it before showing it on the display
  return parseFloat( match * -1);
  // this multiplies the number by -1, parsefloat takes it as a string, return is for everything in the bracket above
});

 ScreenDisplay.value=Replaced_value
 // the value we have worked on should be the new value showing on the display

}