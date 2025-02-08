# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error when using Firebase's onAuthStateChanged method: forgetting to unsubscribe from the listener. This can lead to memory leaks and unexpected behavior in your application.

## Problem
The `onAuthStateChanged` listener continues to run even after the component that uses it is unmounted.  This keeps references to the component and its data alive, preventing garbage collection and potentially causing memory leaks.

## Solution
Use the `useEffect` hook to unsubscribe from the listener when the component is unmounted. The cleanup function within `useEffect` ensures that the listener is detached, preventing memory issues.