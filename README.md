# solo-leveling-system
**Repository description:**  A Solo Leveling–inspired fitness tracker that turns your workouts and daily goals into quests, stats, and level-ups. Installable as a progressive web app, with offline support and reminders while the app is open.
# The System — Fitness Level-Up PWA

Turn your fitness routine into a quest-driven progression system. **The System** is a Solo Leveling–inspired fitness tracker where workouts and daily goals become quests, completed tasks earn XP and gold, and consistent effort builds your level, stats, streaks, and rank.

The app runs in a web browser and can be installed on supported devices as a progressive web app (PWA). It includes offline support and can save progress on your device. Optional Firebase settings enable account login and cloud saves.

## Features

- **Daily quests:** Track recurring goals and see which quests are open, complete, or missed.
- **Progression:** Earn XP, level up, improve stats, and climb through ranks.
- **Streaks and penalties:** Build consistency through streaks, with consequences for missed quests.
- **Hidden quests and weekly gates:** Take on surprise challenges and larger weekly goals.
- **Rewards and inventory:** Earn gold and discover items as you progress.
- **Fitness records:** Log workout results and keep track of personal records.
- **Reports:** Review activity and quest history over time.
- **Reminders:** Configure morning and evening reminders in the app. Browser notifications require permission.
- **Installable PWA:** Add the app to your device’s home screen on supported browsers.
- **Offline support:** The service worker caches app files so the app can load without a network connection.
- **Local saves:** Progress can be saved on the device without configuring Firebase.
- **Optional cloud saves:** Firebase can provide account login and synced progress across devices.

## Getting Started

### Run locally

1. Download or clone this repository.
2. Keep `index.html`, `sw.js`, `manifest.webmanifest`, and the icon files together in the same folder.
3. Serve the folder using a local web server.
4. Open the served page in a modern browser.

The service worker and installable PWA features require a secure context, such as HTTPS or localhost. Opening `index.html` directly as a file may prevent these features from working.

### Publish with GitHub Pages

1. Create a GitHub repository and add the app files to it.
2. In the repository, open **Settings → Pages**.
3. Choose the branch and folder containing `index.html`, then save.
4. Wait for GitHub Pages to publish the site.
5. Open the published HTTPS address on your phone or computer.

Keep the app files together at the published site location so the page can find its manifest, service worker, and icons.

## Notifications and Reminders

The app can display in-app messages and browser notifications when it is running. To enable browser notifications, open the app, allow notifications when prompted, and configure reminder times in the **Log** tab.

The current reminder system checks for due reminders while the app is open or running in a background tab. It does **not** provide reliable push notifications after the app has been fully closed. Closed-app push notifications require a push service and a backend to send messages.

## Optional Firebase Cloud Saves

The app can work without Firebase, storing progress locally on the current device. To enable login and cloud saving, configure the Firebase settings in `index.html` and set up the required Firebase services and security rules.

Do not publish Firebase admin credentials or private service account keys in this repository. Browser apps use Firebase’s web configuration; protect user data with correctly configured Firebase Authentication and Firestore security rules.

## Project Files

| File | Purpose |
| --- | --- |
| `index.html` | App interface, game logic, quests, progress, and reminders |
| `sw.js` | Service worker for offline caching and notification click handling |
| `manifest.webmanifest` | PWA name, appearance, launch settings, and icon declarations |
| `icon-192.png` | Standard app icon |
| `icon-512.png` | Large app icon |
| `icon-maskable-512.png` | Maskable icon for supported PWA launchers |

## Privacy and Data

Without Firebase cloud saving, progress is stored locally in the browser on the device where you use the app. Clearing site data or changing browsers/devices may remove access to that local save. Cloud saving requires Firebase configuration and is subject to the project’s Firebase setup and rules.

Notifications are controlled by your browser’s permission settings. You can disable them in the app or through your browser’s site settings.

## Browser Support

The app is designed for modern browsers with support for JavaScript, local storage, service workers, and progressive web apps. Feature availability, including installation and browser notifications, varies by browser and device.

## License

Add a license file to this repository if you want to specify how others may use, modify, or redistribute the project.
