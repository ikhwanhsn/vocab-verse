export const textToSpeech = async (text: string, lang: string) => {
  var utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.lang = lang;
  window.speechSynthesis.speak(utterance);
};
