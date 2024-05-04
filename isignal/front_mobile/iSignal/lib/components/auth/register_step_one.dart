part of '../cores/cores.dart';


class RegisterOnePage extends StatefulWidget {
  const RegisterOnePage({super.key});

  @override
  State<RegisterOnePage> createState() => _RegisterOnePageState();
}

class _RegisterOnePageState extends State<RegisterOnePage> {
  final _formKey = GlobalKey<FormState>();

  String _username = '';
  String _email = '';

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
      // resizeToAvoidBottomInset: false,
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Créer un compte'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Brand(theme: theme),
              const SizedBox(height: 50),
              Padding(
                padding: const EdgeInsets.all(13.0),
                child: Center(
                  child: Text(
                    'Compte',
                    style: titleStyle,
                  ),
                ),
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: TextFormField(
                            keyboardType: TextInputType.text,
                            decoration: InputDecoration(
                              labelText: 'Nom',
                              prefixIcon: Icon(
                                Icons.person_2_outlined,
                                color: theme.colorScheme.primary,
                              ),
                              hintText: 'Nom complet',
                              border: const OutlineInputBorder(
                                borderSide: BorderSide(
                                  style: BorderStyle.none,
                                  width: 0,
                                ),
                              ),
                              fillColor: theme.colorScheme.surfaceVariant,
                              filled: true,
                            ),
                            validator: (value) {
                              if (value == null || value.isEmpty) {
                                return 'Veuillez entrer votre nom';
                              }
                              return null;
                            },
                            onSaved: (value) {
                              _username = value!;
                            },
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: TextFormField(
                            keyboardType: TextInputType.emailAddress,
                            decoration: InputDecoration(
                              labelText: 'Email (optionnel)',
                              prefixIcon: Icon(
                                Icons.email_outlined,
                                color: theme.colorScheme.primary,
                              ),
                              hintText: 'exemple@domaine.com',
                              border: const OutlineInputBorder(
                                borderSide: BorderSide(
                                  style: BorderStyle.none,
                                  width: 0,
                                ),
                              ),
                              fillColor: theme.colorScheme.surfaceVariant,
                              filled: true,
                            ),
                            validator: (value) {
                              // if (value == null || value.isEmpty) {
                              //   return 'Veuillez entrer votre email';
                              // }
                              if (!RegExp(
                                      r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
                                  .hasMatch(value!)) {
                                return 'Email invalide';
                              }
                              return null;
                            },
                            onSaved: (value) {
                              _email = value!;
                            },
                          ),
                        ),
                        const SizedBox(height: 10),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: ElevatedButton(
                      style: elevatedBtnStyle,
                      onPressed: () {
                        if (_formKey.currentState!.validate()) {
                          _formKey.currentState!.save();
                          Navigator.pushNamed(context, Routes.otp);
                        }
                      },
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          'Créer',
                          style: btnTextStyle,
                        ),
                      ),
                    ),
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
