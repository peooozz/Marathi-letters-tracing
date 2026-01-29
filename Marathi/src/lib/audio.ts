const ELEVEN_LABS_API_KEY = "sk_e5d7f9d708529baa1aafad0539ff213f812eed4ee6733154";
const VOICE_ID = "21mOvcSNivDqYZ86UcrV"; // Rachel - a good default, or I can search for a better one

export async function speakMarathi(text: string) {
  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": ELEVEN_LABS_API_KEY,
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("ElevenLabs API request failed");
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    await audio.play();
  } catch (error) {
    console.error("ElevenLabs error:", error);
    // Fallback to Web Speech API
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "mr-IN";
    window.speechSynthesis.speak(utterance);
  }
}
