const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log(user);
  } else {
    // User is signed out
  }
});

useEffect(() => {
  // Cleanup function to unsubscribe on unmount
  return () => {
    unsubscribe();
  };
}, []);