import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry({ type: 'module', remoteEntry: 'https://nhjadhav07.github.io/mf-app/remoteEntry.js' }),
])

  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
