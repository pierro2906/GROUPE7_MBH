part of core;

class Routes {
  static const String home = '/';
  static const String login = '/login';
  static const String otp = '/otp';
  static const String registerOne = '/register-one';
  static const String createAccount = '/register';
  static const String fillInfo = '/fill-info';
  static const String home_screen  = '/home_screen';

  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case home:
        return MaterialPageRoute(builder: (context) => MainScreen());
      case login:
        return MaterialPageRoute(builder: (context) => const LoginPage());
      case otp:
        return MaterialPageRoute(builder: (context) => const OtpPage());
      case registerOne:
        return MaterialPageRoute(builder: (context) => const RegisterOnePage());
      case createAccount:
        return MaterialPageRoute(builder: (context) => const RegisterPage());
      case fillInfo:
        return MaterialPageRoute(builder: (context) => const FillInfoPage());
      case home_screen:
        return MaterialPageRoute(builder: (context) => const HomeSreen());

      default:
        return MaterialPageRoute(
          builder: (_) => const Scaffold(
            body: Center(
              child: Text('Page not found'),
            ),
          ),
        );
    }
  }
}
