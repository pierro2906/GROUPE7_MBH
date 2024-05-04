part of "../cores/cores.dart";

class CardCustomSignal extends StatelessWidget {
  const CardCustomSignal({
    super.key,
    required this.height,
    required this.percent,
    required this.image,
    this.text = "",
  });

  final double height;
  final double percent;
  final String image;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.sizeOf(context).width * percent,
      height: height,
      decoration: BoxDecoration(
          color: myTheme.colorScheme.secondary,
          borderRadius: BorderRadius.circular(20)),
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircleAvatar(
              // backgroundColor: myTheme.colorScheme.secondary,
              backgroundImage: AssetImage(image),
            ),
            Text(
              text,
              style: TextStyle(fontWeight: FontWeight.w700),
            )
          ]),
    );
  }
}
