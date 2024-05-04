part of '../cores/cores.dart';

class RegisterPage extends StatelessWidget {
  const RegisterPage({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final btnTextStyle = theme.textTheme.titleLarge!.copyWith(
      color: theme.colorScheme.onBackground,
      // backgroundColor: theme.colorScheme.inversePrimary,
    );
    final titleStyle = theme.textTheme.headlineLarge!.copyWith(
      color: theme.colorScheme.onBackground,
      fontWeight: FontWeight.w400,
    );
    return Scaffold(
      appBar: AppBar(
        backgroundColor: myTheme.colorScheme.background,
        leading: IconButton(
            onPressed: () {
              Navigator.popUntil(context, ModalRoute.withName(Routes.home));
            },
            icon: const Icon(Icons.arrow_back)),
        title: const Text("S'enregistrer"),
        centerTitle: true,
      ),
      body: Container(
        decoration: BoxDecoration(
            color: myTheme.colorScheme.surfaceVariant,
            borderRadius: BorderRadius.only(
                topLeft: Radius.circular(13), topRight: Radius.circular(13))),
        width: double.infinity,
        height: MediaQuery.of(context).size.height,
        child: SingleChildScrollView(
          child: Column(
            children: [
              20.verticalSpace,
              Text(
                "Créer votre compte",
                style: titleStyle,
                textAlign: TextAlign.center,
              ),
              30.verticalSpace,
              const FormRegister(),
              20.verticalSpace,
              CustomButton(
                pLeft: 20,
                pRight: 20,
                pBottom: 10,
                pTop: 10,
                radius: 12,
                text: "Enregistrer",
                textColor: myTheme.colorScheme.primary,
                containerColor: myTheme.colorScheme.surface,
                onTap: () {
                  Navigator.pushNamed(context, Routes.otp);
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => const OtpPage(
                              isRegister: true,
                            )),
                  );
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
