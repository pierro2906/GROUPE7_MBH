import 'package:flutter/material.dart';

final ThemeData myTheme = ThemeData(
  pageTransitionsTheme: const PageTransitionsTheme(
    builders: {
      TargetPlatform.android: CupertinoPageTransitionsBuilder(),
      TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
    },
  ),
  useMaterial3: true,
  fontFamily: "DIN-RegularAlternative",
  colorScheme: const ColorScheme(
    brightness: Brightness.light,
    primary: Color.fromRGBO(38, 70, 83, 1.0),
    onPrimary: Color.fromRGBO(255, 255, 255, 1.0),
    primaryContainer: null,
    onPrimaryContainer: null,
    secondary: Color.fromRGBO(255, 255, 255, 1.0),
    onSecondary: Color.fromRGBO(0, 0, 0, 1.0),
    secondaryContainer: Color.fromRGBO(254, 162, 97, 0.719),
    onSecondaryContainer: null,
    tertiary: null,
    onTertiary: null,
    tertiaryContainer: null,
    onTertiaryContainer: null,
    error: Color.fromRGBO(176, 0, 32, 1.0),
    onError: Color.fromRGBO(0, 0, 0, 1.0),
    errorContainer: null,
    onErrorContainer: null,
    background: Color.fromRGBO(254, 162, 97, 1.0),
    onBackground: Color.fromRGBO(38, 70, 83, 1.0),
    surface: Color.fromRGBO(254, 162, 97, 1.0),
    
    onSurface: Color.fromRGBO(0, 0, 0, 1.0),
    surfaceVariant: Color.fromRGBO(255, 255, 255, 0.433),
    onSurfaceVariant: null,
    outline: Color.fromRGBO(38, 70, 83, 1.0),
    outlineVariant: null,
    shadow: Color.fromRGBO(0, 0, 0, 1.0),
    scrim: Colors.red,
    inverseSurface: null,
    onInverseSurface: null,
    inversePrimary: null,
    surfaceTint: null,
  ),
);

// ThemeData(
//         pageTransitionsTheme: const PageTransitionsTheme(
//           builders: {
//             TargetPlatform.android: CupertinoPageTransitionsBuilder(),
//             TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
//           },
//         ),
//         useMaterial3: true,
//         fontFamily: "DIN-RegularAlternative",
//         colorScheme: ColorScheme.fromSeed(
//             seedColor: const Color.fromRGBO(38, 70, 83, 1.0)),
//       ),