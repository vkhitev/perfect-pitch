export default function logInWithGoogle({firebase, email, password, setError}) {
  firebase
    .auth()
    .fetchProvidersForEmail(email)
    .then(providers => {
      const hasEmailProvider = providers.includes('password');
      return firebase
        .login({
          provider: 'google',
          type: 'popup',
        })
        .then(() => {
          if (hasEmailProvider) {
            const credential = firebase.auth.EmailAuthProvider.credential(
              email,
              password,
            );
            return firebase.auth().currentUser.linkWithCredential(credential);
          }
        });
    })
    .catch(error => {
      if (error.code !== 'auth/popup-closed-by-user') {
        setError('Oops, something went wrong');
      }
    });
}
