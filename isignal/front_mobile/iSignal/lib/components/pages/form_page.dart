part of '../cores/cores.dart';

class FormRegister extends StatefulWidget {
  const FormRegister({super.key});

  @override
  State<FormRegister> createState() => _FormRegisterState();
}

class _FormRegisterState extends State<FormRegister> {
  final TextEditingController _username = TextEditingController();
  final TextEditingController _mobile = TextEditingController();
  final TextEditingController _pwd = TextEditingController();
  final TextEditingController _comfPwd = TextEditingController();
  final TextEditingController _email = TextEditingController();


  void _callBackFunction(String name, String dialCode, String flag) {
      print(dialCode);
      final otpProvider = Provider.of<OTPProvider>(context, listen: false);
      otpProvider.setDialCode(dialCode.substring(1));
    }
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Form(
      child: Padding(
        padding: const EdgeInsets.only(left: 20, right: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Nom",
              textAlign: TextAlign.start,
            ),
            5.verticalSpace,
            TextFormCustom(
              field: _username,
              theme: theme,
              icon: Icons.person_2_outlined,
              text: TextInputType.name,
              hintText: "Nom complet",
            ),
            15.verticalSpace,
            const Text(
              "Mobile",
              textAlign: TextAlign.start,
            ),
            5.verticalSpace,
            Row(
              children: [
                Expanded(
                  flex: 2,
                  child: CountryPicker(
                    callBackFunction: _callBackFunction,
                    headerText: 'Choisir votre pays',
                    headerBackgroundColor: Theme.of(context).primaryColor,
                    headerTextColor: Colors.white,
                  ),
                ),
                Expanded(
                  flex: 4,
                  child: TextFormCustom(
                    field: _mobile,
                    theme: theme,
                    icon: Icons.phone,
                    text: TextInputType.phone,
                    hintText: " 90909090",
                    isNumber: true,
                  ),
                ),
              ],
            ),
            15.verticalSpace,
            const Text(
              "Mot de passe",
              textAlign: TextAlign.start,
            ),
            5.verticalSpace,
            TextFormCustom(
              field: _pwd,
              theme: theme,
              icon: Icons.lock,
              text: TextInputType.text,
              hintText: "*****",
            ),
            15.verticalSpace,
            const Text(
              "Comfirmer le mot de passe",
              textAlign: TextAlign.start,
            ),
            5.verticalSpace,
            TextFormCustom(
              field: _comfPwd,
              theme: theme,
              icon: Icons.lock,
              text: TextInputType.text,
              hintText: "******",
            ),
            15.verticalSpace,
            const Text(
              "E-mail",
              textAlign: TextAlign.start,
            ),
            5.verticalSpace,
            TextFormCustom(
              field: _email,
              theme: theme,
              icon: Icons.email,
              text: TextInputType.text,
              hintText: "Optionel",
            )
          ],
        ),
      ),
    );
  }
}
