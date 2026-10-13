# Bloom React Native

React Native / Expo implementation of the Bloom app flow from the supplied Figma screenshot.

## Included
- Splash
- Login
- Sign up
- Dashboard
- History
- Barcode/QR scanner
- Product details
- Profile
- Bottom tab navigation
- Reusable product, trend, stat and information components

## Run

```bash
npm install
npx start
```

## Expo Go Login Setup

To test the app on a physical device using Expo Go:

1. **Install Expo Go** on your phone:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the development server**:
   ```bash
   npx expo start
   ```

3. **Scan the QR code**:
   - iOS: Open the Camera app and scan the QR code from the terminal
   - Android: Open Expo Go app and tap "Scan QR Code"

4. **Login to Expo** (required for some features):
   ```bash
   npx expo login
   ```
   This will open a browser window to authenticate with your Expo account.

5. **Run on device**:
   - Once logged in, the app will load on your device via Expo Go
   - The app includes Login/Signup screens with email/password and Google auth

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Screen components (Login, Signup, Home, etc.)
├── navigation/     # Navigation setup (Auth, Main tabs, Stacks)
├── sections/       # Page sections
└── shims/          # TypeScript shims
```

The product images are remote placeholders and can be replaced with exported Figma assets in `App.tsx`.

## Architecture

### Overview
This is a React Native / Expo application built with TypeScript, using Expo Router for navigation and NativeWind (Tailwind CSS) for styling. The app follows a modular component-based architecture with clear separation of concerns.

### Tech Stack
- **Framework**: Expo 57 (React Native 0.86)
- **Language**: TypeScript
- **Navigation**: React Navigation 7 (Native Stack + Bottom Tabs)
- **Styling**: NativeWind 4 (Tailwind CSS for React Native)
- **Fonts**: Expo Google Fonts (Inter)
- **Storage**: AsyncStorage for local persistence
- **Camera**: Expo Camera for barcode/QR scanning

### Navigation Architecture
```
RootNavigator (Stack)
├── AuthNavigator (Stack) - Unauthenticated flows
│   ├── SplashScreen
│   ├── LoginScreen
│   └── SignupScreen
└── MainTabs (Bottom Tabs) - Authenticated flows
    ├── HomeStack
    │   ├── HomeScreen (Dashboard)
    │   └── ProductDetailsScreen
    ├── ScanStack
    │   └── ScanScreen (Barcode/QR)
    ├── HistoryStack
    │   └── HistoryScreen
    └── ProfileStack
        └── ProfileScreen
```

### Component Hierarchy

**Core Components** (`src/components/`)
- `AuthBackground` - Gradient background for auth screens
- `Input` - Form input with label, icon, validation
- `PrimaryButton` - Main CTA button with loading state
- `GoogleButton` - Google OAuth button
- `Logo` - App logo component
- `OrDivider` - Visual separator for auth options
- `Badge` - Status/badge display
- `Stat` - Dashboard stat display
- `StreakBadge` - User streak visualization
- `TrendCard` - Consumer trend display card
- `ProductCard` - Product listing card
- `DetailInfoCard` / `DetailIcons` - Product detail sections
- `ScoreBars` - Visual score indicators
- `SectionHeader` - Consistent section titles
- `GlowBlob` - Decorative background element
- `Screen` - Page wrapper with safe area

**Page Sections** (`src/sections/`)
- `HomeStatsSection` - Dashboard stats grid
- `ConsumerTrendsSection` - Trending products carousel
- `CarbonImpactSection` - Environmental impact display
- `TipsSection` - Educational tips
- `ProfileSections` - Profile page sections
- `HistoryPreviewSection` - History list preview
- `ProductDetailsSections` - Product detail layout

### Data Flow
1. **Authentication**: Login/Signup navigate to `Main` tabs on success
2. **State Management**: Local component state + AsyncStorage for persistence
3. **Navigation**: Type-safe navigation with React Navigation 7
4. **Styling**: Utility-first with NativeWind (compiles to StyleSheet)

### Key Patterns
- **File-based routing** via navigation stacks
- **Compound components** for complex UI (Input, ProductCard)
- **Reusable sections** composed into screens
- **Type-safe navigation** with parameter typing
- **Expo managed workflow** for easy device testing

### Adding Features
1. Create component in `src/components/`
2. Create section in `src/sections/` (if page-level)
3. Add screen in `src/pages/`
4. Register in appropriate navigator in `src/navigation/`
