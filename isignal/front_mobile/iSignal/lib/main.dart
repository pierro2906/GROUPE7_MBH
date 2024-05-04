import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:isignal/components/cores/cores.dart';
import 'package:isignal/components/styles/my_theme.dart';
import 'package:isignal/providers/otp/otp_provider.dart';
import 'package:provider/provider.dart';

void main() {
   WidgetsFlutterBinding.ensureInitialized();
  runApp(
    ChangeNotifierProvider(
      create: (context) => OTPProvider(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.

  @override
  Widget build(BuildContext context) {
    //Set the fit size (Find your UI design, look at the dimensions of the device screen and fill it in,unit in dp)
    return ScreenUtilInit(
      designSize: const Size(392.72727272727275, 759.2727272727273),
      minTextAdapt: true,
      splitScreenMode: true,
      builder: (context, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'I-Signal',
          theme: myTheme,
          initialRoute: Routes.home,
          onGenerateRoute: Routes.generateRoute,
          home: child,
        );
      },
      child: MainScreen(),
    );
  }
}
