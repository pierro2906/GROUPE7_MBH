import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Brand extends StatelessWidget {
  const Brand({
    super.key,
    required this.theme,
  });

  final ThemeData theme;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.max,
      children: [
        SvgPicture.asset(
          'assets/images/logo/logo-icon.svg',
          width: 150,
          height: 150,
        ),
        Text('I-SIgnal',
            style: TextStyle(
              color: theme.colorScheme.primary,
              fontSize: 40,
              fontFamily: "AnkhSanctuary",
            ))
      ],
    );
  }
}
