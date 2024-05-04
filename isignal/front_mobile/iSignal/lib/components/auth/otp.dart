part of '../cores/cores.dart';

class OtpPage extends StatefulWidget {
  const OtpPage({Key? key, this.isRegister = false}) : super(key: key);
final bool isRegister;
  @override
  State<OtpPage> createState() => _OtpPageState();
}

class _OtpPageState extends State<OtpPage> {
  final _formKey = GlobalKey<FormState>();

  // String _otp = '';

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final btnTextStyle = theme.textTheme.titleLarge!.copyWith(
      color: theme.colorScheme.onBackground,
    );
    final titleStyle = theme.textTheme.headlineLarge!.copyWith(
      color: theme.colorScheme.onBackground,
      fontWeight: FontWeight.bold,
    );
    final elevatedBtnStyle = ElevatedButton.styleFrom(
      backgroundColor: Colors.white,
      shadowColor: Colors.black54,
      elevation: 3,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      // minimumSize: const Size(double.infinity, 0),
    );

    return Scaffold(
      appBar: AppBar(
        // automaticallyImplyLeading: false,
        title: const Text('OTP'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Brand(theme: theme),
              const SizedBox(
                height: 50,
              ),
              Padding(
                padding: const EdgeInsets.all(13.0),
                child: Center(
                  child: Text(
                    'Code SMS',
                    style: titleStyle,
                  ),
                ),
              ),
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: OtpTextField(
                        keyboardType: TextInputType.number,
                        inputFormatters: [
                          FilteringTextInputFormatter.digitsOnly,
                          LengthLimitingTextInputFormatter(6),
                        ],
                        numberOfFields: 5,
                        hasCustomInputDecoration: true,

                        //set to true to show as box or false to show as dash
                        showFieldAsBox: true,
                        clearText: true,

                        //runs when a code is typed in
                        onCodeChanged: (String code) {
                          //handle validation or checks here
                        },
                        decoration: InputDecoration(
                          border: const OutlineInputBorder(
                            borderSide:
                                BorderSide(style: BorderStyle.none, width: 0),
                          ),
                          fillColor: theme.colorScheme.surfaceVariant,
                          filled: true,
                        ),
                      ),
                    ),
                    5.verticalSpace,
                    CustomButton(
                      pLeft: 40,
                      pRight: 40,
                      pBottom: 10,
                      pTop: 10,
                      radius: 12,
                      text: "Confirmer",
                      textColor: myTheme.colorScheme.primary,
                      containerColor: myTheme.colorScheme.secondary,
                      onTap: () {

                        widget.isRegister == true ?  Navigator.pushNamed(context, Routes.fillInfo) :  Navigator.pushNamed(context, Routes.home_screen);
                        // AwesomeDialog(
                        //   context: context,
                        //   dialogType: DialogType.info,
                        //   borderSide: const BorderSide(
                        //     color: Colors.green,
                        //     width: 2,
                        //   ),
                        //   width: 280,
                        //   buttonsBorderRadius: const BorderRadius.all(
                        //     Radius.circular(2),
                        //   ),
                        //   dismissOnTouchOutside: true,
                        //   dismissOnBackKeyPress: false,
                        //   onDismissCallback: (type) {
                        //     ScaffoldMessenger.of(context).showSnackBar(
                        //       SnackBar(
                        //         content: Text('Dismissed by $type'),
                        //       ),
                        //     );
                        //   },
                        //   headerAnimationLoop: false,
                        //   animType: AnimType.bottomSlide,
                        //   title: 'INFO',
                        //   desc: 'This Dialog can be dismissed touching outside',
                        //   showCloseIcon: true,
                        //   btnCancelOnPress: () {},
                        //   btnOkOnPress: () {},
                        // ).show();
                       
                      },
                    ),
                    TextButton(
                      onPressed: () {
                        // Navigator.pushNamed(context, Routes.registerOne);
                      },
                      child: Text(
                        'Renvoyer le code OTP',
                        style: TextStyle(
                          color: theme.colorScheme.primary,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
