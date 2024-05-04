part of '../cores/cores.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController _phoneNumberController = TextEditingController();

  final _formKey = GlobalKey<FormState>();

  String _phoneNumber = '';
  bool isValidTogocell(String phoneNumber) {
    return RegExp(r'^\+228 (90|91)\d{6}$').hasMatch(phoneNumber);
  }

  bool isValidMoov(String phoneNumber) {
    return RegExp(r'^\+228 (96|97)\d{6}$').hasMatch(phoneNumber);
  }

   @override
  void dispose() {
    _phoneNumberController.dispose();
    super.dispose();
  }

    void _callBackFunction(String name, String dialCode, String flag) {
      print(dialCode);
      final otpProvider = Provider.of<OTPProvider>(context, listen: false);
      otpProvider.setDialCode(dialCode.substring(1));
    }


  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final btnTextStyle = theme.textTheme.titleLarge!.copyWith(
      color: theme.colorScheme.onBackground,
      // backgroundColor: theme.colorScheme.inversePrimary,
    );
    final titleStyle = theme.textTheme.titleMedium!.copyWith(
        color: theme.colorScheme.onBackground, fontWeight: FontWeight.bold);
    final elevatedBtnStyle = ElevatedButton.styleFrom(
      backgroundColor: Colors.white, // Couleur de fond
      // foregroundColor: theme.colorScheme.onBackground,
      shadowColor: Colors.black54, elevation: 3,
      shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(10))),
      // minimumSize:
      //     const Size(double.infinity, 0), // Largeur maximale, hauteur minimale
    );
    bool isValidTogocell(String phoneNumber) {
      return RegExp(r'^\+228 (90|91)\d{6}$').hasMatch(phoneNumber);
    }

    bool isValidMoov(String phoneNumber) {
      return RegExp(r'^\+228 (96|97)\d{6}$').hasMatch(phoneNumber);
    }

  

    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            onPressed: () {
              Navigator.popUntil(context, ModalRoute.withName(Routes.home));
            },
            icon: const Icon(Icons.arrow_back)),
        title: const Text('Connexion'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.only(left: 5, right: 5),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Brand(theme: theme),
              const SizedBox(
                height: 50,
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(13.0),
                    child: Center(
                      child: Center(
                        child: Text(
                          'Recevoir un code par sms',
                          style: titleStyle,
                        ),
                      ),
                    ),
                  ),
                  Form(
                      key: _formKey,
                      child: Column(
                        children: [
                          Container(
                            width: double.infinity,
                            height: ScreenUtil().setHeight(60),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceAround,
                              children: [
                                Expanded(
                                  flex: 3,
                                  child: CountryPicker(
                                    callBackFunction: _callBackFunction,
                                    headerText: 'Choisir votre pays',
                                    headerBackgroundColor:
                                        Theme.of(context).primaryColor,
                                    headerTextColor: Colors.white,
                                  ),
                                ),
                                SizedBox(width: ScreenUtil().setWidth(16)),
                                Expanded(
                                  flex: 6,
                                  child: TextField(
                                    controller: _phoneNumberController,
                                    decoration: InputDecoration(
                                      hintText: '935660741',
                                      hintStyle: TextStyle(
                                          color: Colors.white, fontSize: 20.sp),
                                      filled: true,
                                      fillColor: Colors.white.withOpacity(0.2),
                                      border: const OutlineInputBorder(
                                        borderSide: BorderSide.none,
                                      ),
                                    ),
                                    style: const TextStyle(color: Colors.white),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                        ],
                      )),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: ElevatedButton(
                        style: elevatedBtnStyle,
                        onPressed: () {
                          // final otpProvider =
                          //     Provider.of<OTPProvider>(context, listen: false);
                          // otpProvider
                          //     .setPhoneNumber(_phoneNumberController.text);
                          // otpProvider.sendOTP();
                          Navigator.pushNamed(context, Routes.otp);
                        },
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(
                            'Recevoir le code',
                            style: btnTextStyle,
                          ),
                        )),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
