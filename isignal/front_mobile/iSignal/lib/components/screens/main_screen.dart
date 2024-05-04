part of core;

class MainScreen extends StatelessWidget {
  MainScreen({super.key});

  // Elevated Button Style
  final ButtonStyle elevatedBtnStyle = ElevatedButton.styleFrom(
    backgroundColor: Colors.white,
    shadowColor: Colors.black54,
    elevation: 3,
    shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(10))),
    // minimumSize: const Size(double.infinity, 0),
  );

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Scaffold(
        appBar: AppBar(),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Brand(theme: theme),
            80.verticalSpace,
            buildLoginButton(theme, context),
            buildPulsatorButton(theme),
          ],
        ));
  }

  Widget buildLoginButton(ThemeData theme, BuildContext context) {
    // Button Text Style
    
    return Column(
      children: [
         CustomButton(
          pLeft: 40,
          pRight: 40,
          pBottom: 10,
          pTop: 10,
          radius: 12,
          text: "Se connecter",
          textColor: myTheme.colorScheme.primary,
          containerColor: myTheme.colorScheme.secondary,
          onTap: () {
             Navigator.pushNamed(context, Routes.login);
          },
        ),
        20.verticalSpace,
        CustomButton(
          pLeft: 28,
          pRight: 28,
          pBottom: 10,
          pTop: 10,
          radius: 12,
          text: "Créer un compte",
          textColor: myTheme.colorScheme.primary,
          containerColor: myTheme.colorScheme.secondary,
          onTap: () {
             Navigator.pushNamed(context, Routes.createAccount);
          },
        )
      ],
    );
  }

  Widget buildPulsatorButton(ThemeData theme) {
    return Expanded(
      child: Pulsator(
        style: PulseStyle(color: theme.colorScheme.inversePrimary),
        count: 3,
        duration: const Duration(seconds: 4),
        repeat: 0,
        startFromScratch: true,
        autoStart: true,
        fit: PulseFit.contain,
        child: ElevatedButton(
          onPressed: () {},
          style: ElevatedButton.styleFrom(
            shape: const CircleBorder(),
            backgroundColor: theme.colorScheme.primary,
            foregroundColor: Colors.white,
            shadowColor: Colors.black54,
          ),
          child: const SizedBox(
            width: 100.0,
            height: 100.0,
            child: Center(
              child: Text(
                'SOS',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
