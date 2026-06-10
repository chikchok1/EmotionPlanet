import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'mood-planet',
  brand: {
    displayName: '무드플래닛',
    primaryColor: '#7C5CFC',
    icon: '/appintoss_logo_600x600.png',
  },
  web: {
    host: 'localhost',
    port: 5176,
    commands: {
      dev: 'vite',
      build: 'tsc -b && vite build',
    },
  },
  webViewProps: {
    type: 'game',
    bounces: false,
    pullToRefreshEnabled: false,
    overScrollMode: 'never',
    allowsBackForwardNavigationGestures: false,
  },
  navigationBar: {
    withBackButton: false,
    withHomeButton: false,
  },
  permissions: [],
  outdir: 'dist',
});
