part of '../cores/cores.dart';

class TextFormCustom extends StatelessWidget {
  const TextFormCustom({
    this.isNumber = false,
    this.phonePicker,
    this.noValideText = "",
    super.key,
    required TextEditingController field,
    required this.theme,
    required this.hintText,
    required this.text,
    required this.icon,  this.padding = 0,
    
  }) : _field = field;

  final TextEditingController _field;
  final ThemeData theme;
  final String hintText;
  final TextInputType text;
  final String? noValideText;
  final IconData icon;
  final Widget? phonePicker ;
  final bool isNumber;
  final double padding;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(left: padding,right: padding),
      decoration: const BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(20)),
          
           ),
          
      child: TextFormField(
        controller: _field,
        keyboardType: text,
        decoration: InputDecoration(
          contentPadding: EdgeInsets.only(top: 20),
          prefixIcon: isNumber == false
              ? Icon(
                  icon,
                  color: theme.colorScheme.primary,
                )
              : phonePicker,
          hintText: hintText,
          border: const OutlineInputBorder(
            borderRadius: BorderRadius.all(Radius.circular(20)),
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
            return noValideText;
          }
          return null;
        },
        // onSaved: (value) {
        //   _username = value;
        // },
      ),
    );
  }
}
