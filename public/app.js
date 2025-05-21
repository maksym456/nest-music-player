import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword} from "firebase/auth";
const audioPlayer = document.getElementById('audioPlayer');

document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-src');
    if (audioPlayer.src !== location.origin + src) {
      audioPlayer.src = src;
    }
    audioPlayer.style.display = 'block';
    audioPlayer.play();
  });
});
//
// const auth = getAuth();
//
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// const status = await validatePassword(getAuth(), passwordFromUser);
// if (!status.isValid) {
//   // Password could not be validated. Use the status to show what
//   // requirements are met and which are missing.
//
//   // If a criterion is undefined, it is not required by policy. If the
//   // criterion is defined but false, it is required but not fulfilled by
//   // the given password. For example:
//   const needsLowerCase = status.containsLowercaseLetter !== true;
// }