part of "../cores/cores.dart";

class CardCustomVideo extends StatelessWidget {
  const CardCustomVideo({
    super.key,
    required this.height,
    required this.percent,  this.isVideoCard = false,
  });

  final double height;
  final double percent;
  final bool isVideoCard;

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.all(6),
        width: MediaQuery.sizeOf(context).width * percent,
        height: height,
        decoration: BoxDecoration(
            color: myTheme.colorScheme.secondary,
            borderRadius: BorderRadius.circular(20)),
        child: isVideoCard == false ? Column(
          children: [
            Container(
                    padding: EdgeInsets.all(5),
                    child: Image.asset(
                      'assets/images/ll.jpg',
                      fit: BoxFit.fitHeight,
                    ))
          ],
        ): Stack(
          children:  [
            ListView.builder(
              padding: REdgeInsets.all(0),
              itemCount: 2,
              itemBuilder: (context, index) {
                return Container(
                    padding: EdgeInsets.all(5),
                    child: Image.asset(
                      'assets/images/ll.jpg',
                      fit: BoxFit.fitHeight,
                    ));
              },
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: CustomButton(
                pLeft: 10,
                pRight: 10,
                pBottom: 5,
                pTop: 5,
                radius: 10,
                text: "Tape to report",
                textColor: myTheme.colorScheme.secondary,
                containerColor: myTheme.canvasColor,
                onTap: (){
                  print("jkljklk");
                },
              ),
            )
          ],
        ));
  }
}
