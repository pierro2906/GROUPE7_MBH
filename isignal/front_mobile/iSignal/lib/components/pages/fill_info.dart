part of '../cores/cores.dart';

class FillInfoPage extends StatefulWidget {
  const FillInfoPage({super.key});

  @override
  State<FillInfoPage> createState() => _FillInfoPageState();
}

class _FillInfoPageState extends State<FillInfoPage> {
  final _formKey = GlobalKey<FormState>();

  dynamic remoteFiles;

  final TextEditingController _name = TextEditingController();
  final TextEditingController _mobile = TextEditingController();
  @override
  Widget build(BuildContext context) {
    List<String> groupes = [
      "A+",
      "B+",
      "O+",
      "A-",
      "B-",
      "O-",
      "AA",
      "AB+",
      "OO"
    ];

    bool active = false;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: myTheme.colorScheme.background,
        leading: IconButton(
            onPressed: () {
              Navigator.popUntil(context, ModalRoute.withName(Routes.home));
            },
            icon: const Icon(Icons.arrow_back)),
        title: const Text("Remplir ces informations"),
        centerTitle: true,
      ),
      body: Container(
          decoration: BoxDecoration(
              color: myTheme.colorScheme.surfaceVariant,
              borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(13), topRight: Radius.circular(13))),
          width: double.infinity,
          height: MediaQuery.of(context).size.height,
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.only(left: 20, right: 20),
              child: Column(
                children: [
                  20.verticalSpace,
                  // Container(
                  //   height: MediaQuery.sizeOf(context).height * 0.225,
                  //   width: double.infinity,
                  //   decoration: BoxDecoration(
                  //       color: myTheme.colorScheme.secondary,
                  //       borderRadius: BorderRadius.all(Radius.circular(20))),
                  //   child: GridView.builder(
                  //       padding: EdgeInsets.all(8),
                  //       gridDelegate:
                  //           const SliverGridDelegateWithFixedCrossAxisCount(
                  //               crossAxisCount: 3,
                  //               mainAxisSpacing: 8,
                  //               crossAxisSpacing: 60),
                  //       itemCount: groupes.length,
                  //       itemBuilder: (BuildContext context, int index) {
                  //         return BloodGroupCircle(
                  //             groupes: groupes, index: index);
                  //       }),
                  // ),
                  Container(
                    // height: MediaQuery.sizeOf(context).height * 0.225,
                    padding: EdgeInsets.all(10),
                    width: MediaQuery.sizeOf(context).height * 0.8,
                    decoration: BoxDecoration(
                        color: myTheme.colorScheme.secondary,
                        borderRadius: BorderRadius.all(Radius.circular(20))),
                    child: Wrap(
                      alignment: WrapAlignment.spaceEvenly,
                      runAlignment: WrapAlignment.spaceAround,
                      crossAxisAlignment: WrapCrossAlignment.start,
                      runSpacing: 10,
                      spacing: 10,
                      children: [
                        BloodGroupCircle(groupes: groupes, index: 0),
                        BloodGroupCircle(groupes: groupes, index: 1),
                        BloodGroupCircle(groupes: groupes, index: 2),
                        BloodGroupCircle(groupes: groupes, index: 3),
                        BloodGroupCircle(groupes: groupes, index: 4),
                        BloodGroupCircle(groupes: groupes, index: 5),
                        BloodGroupCircle(groupes: groupes, index: 6),
                        BloodGroupCircle(groupes: groupes, index: 7),
                        BloodGroupCircle(groupes: groupes, index: 8)
                      ],
                    ),
                  ),

                  30.verticalSpace,
                  const SwitchWithLabel(enabled: true, label: "Quick Alert"),
                  30.verticalSpace,
                  const SwitchWithLabel(
                      enabled: true, label: "Become Volunter"),
                  30.verticalSpace,
                  Text(
                    "Emergency Contacts",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
                  ),
                  20.verticalSpace,
                  SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Padding(
                      padding: const EdgeInsets.only(left: 50, right: 50),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            padding: EdgeInsets.all(5),
                            width: 200,
                            decoration: BoxDecoration(
                                color: myTheme.colorScheme.secondary,
                                borderRadius: BorderRadius.circular(20)),
                            child: Column(children: [
                              Row(
                                children: [
                                  CircleAvatar(
                                    backgroundColor: myTheme.canvasColor,
                                    radius: 40,
                                    backgroundImage:
                                        AssetImage("assets/images/logo/pp.jpg"),
                                  ),
                                  3.horizontalSpace,
                                  Text("Eklou fidele \n \n 98568956"),
                                ],
                              ),
                              CustomButton(
                                  pLeft: 0,
                                  pRight: 0,
                                  pBottom: 2,
                                  pTop: 2,
                                  radius: 0,
                                  text: "Delete",
                                  textColor: myTheme.colorScheme.scrim,
                                  containerColor: myTheme.colorScheme.secondary)
                            ]),
                          ),
                          20.horizontalSpace,
                          GestureDetector(
                            onTap: () {
                              // showModalBottomSheet<void>(
                              //   context: context,
                              //   builder: (BuildContext context) {
                              //     return SizedBox(
                              //       height: 200,
                              //       child: Center(
                              //         child: Form(
                              //           child: Padding(
                              //             padding: const EdgeInsets.only(right:20,left: 20),
                              //             child: Column(
                              //               mainAxisAlignment:
                              //                   MainAxisAlignment.center,
                              //               mainAxisSize: MainAxisSize.min,
                              //               children: <Widget>[
                              //                 TextFormCustom(field: _name,hintText: "Nom complet",theme: myTheme,text: TextInputType.name,icon: Icons.person,),
                              //                 ElevatedButton(
                              //                   child:
                              //                       const Text('Close BottomSheet'),
                              //                   onPressed: () =>
                              //                       Navigator.pop(context),
                              //                 ),
                              //               ],
                              //             ),
                              //           ),
                              //         ),
                              //       ),
                              //     );
                              //   },

                              // );
                              showGeneralDialog(
                                context: context,
                                barrierDismissible: true,
                                transitionDuration: Duration(milliseconds: 500),
                                barrierLabel: MaterialLocalizations.of(context)
                                    .dialogLabel,
                                barrierColor: Colors.black.withOpacity(0.5),
                                pageBuilder: (context, _, __) {
                                  return Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: <Widget>[
                                      Container(
                                        padding: const EdgeInsets.only(top: 20),
                                        decoration: const BoxDecoration(
                                          color: Colors.transparent,
                                        ),
                                        width:
                                            MediaQuery.of(context).size.width,
                                        child: Card(
                                          child: Column(
                                            children: <Widget>[
                                              20.verticalSpace,
                                              Text(
                                                "Ajouter un contact",
                                                style: TextStyle(
                                                    fontWeight:
                                                        FontWeight.w500,
                                                        fontSize: 18),
                                              ),
                                              20.verticalSpace,
                                              TextFormCustom(
                                                field: _name,
                                                hintText: "Nom complet",
                                                theme: myTheme,
                                                text: TextInputType.name,
                                                icon: Icons.person,
                                                padding: 20,
                                                
                                              ),
                                              20.verticalSpace,
                                              TextFormCustom(
                                                field: _mobile,
                                                hintText: "Mobile",
                                                theme: myTheme,
                                                text: TextInputType.number,
                                                icon: Icons.phone,
                                                padding: 20,
                                              ),
                                              20.verticalSpace,
                                              TextFormCustom(
                                                field: _mobile,
                                                hintText: "Photo",
                                                theme: myTheme,
                                                text: TextInputType.text,
                                                icon: Icons.image,
                                                padding: 20,
                                              ),
                                              20.verticalSpace,
                                              //Remote Image upload
                                              CustomButton(
                                                  pLeft: 35,
                                                  pRight: 35,
                                                  pBottom: 15,
                                                  pTop: 15,
                                                  radius: 15,
                                                  text: "Ajouter",
                                                  textColor: myTheme
                                                      .colorScheme.surface,
                                                  containerColor:
                                                      myTheme.colorScheme.secondary,
                                                      onTap: (){
                                                        Navigator.pop(context);
                                                      },),

                                              20.verticalSpace
                                            ],
                                          ),
                                        ),
                                      ),
                                    ],
                                  );
                                },
                                transitionBuilder: (context, animation,
                                    secondaryAnimation, child) {
                                  return SlideTransition(
                                    position: CurvedAnimation(
                                      parent: animation,
                                      curve: Curves.easeOut,
                                    ).drive(Tween<Offset>(
                                      begin: Offset(0, -1.0),
                                      end: Offset.zero,
                                    )),
                                    child: child,
                                  );
                                },
                              );
                            },
                            child: Container(
                                width: 100,
                                height: 100,
                                decoration: BoxDecoration(
                                    color: myTheme.colorScheme.secondary,
                                    borderRadius: BorderRadius.circular(20)),
                                child: Icon(
                                  Icons.add,
                                  color: myTheme.canvasColor,
                                  size: 50,
                                )),
                          ),
                          20.horizontalSpace,
                        ],
                      ),
                    ),
                  ),
                  30.verticalSpace,
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      CustomButton(
                          pLeft: 35,
                          pRight: 35,
                          pBottom: 15,
                          pTop: 15,
                          radius: 15,
                          text: "Envoyer",
                          textColor: myTheme.colorScheme.secondary,
                          containerColor: myTheme.canvasColor),
                          CustomButton(
                          pLeft: 35,
                          pRight: 35,
                          pBottom: 15,
                          pTop: 15,
                          radius: 15,
                          text: "Plus tard",
                          textColor: myTheme.colorScheme.secondary,
                          containerColor: myTheme.canvasColor,
                          onTap: () {
                            Navigator.pushNamed(context, Routes.home_screen);
                          },),
                    ],
                  )
                ],
              ),
            ),
          )),
    );
  }
}

class BloodGroupCircle extends StatefulWidget {
  const BloodGroupCircle({
    super.key,
    required this.groupes,
    required this.index,
  });

  final List<String> groupes;
  final int index;

  @override
  State<BloodGroupCircle> createState() => _BloodGroupCircleState();
}

class _BloodGroupCircleState extends State<BloodGroupCircle> {
  bool isClick = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() {
          isClick = true;
        });
      },
      child: Container(
        height: 50,
        width: 50,
        decoration: BoxDecoration(
            color: isClick == false
                ? myTheme.colorScheme.secondary
                : myTheme.colorScheme.surface,
            borderRadius: BorderRadius.circular(50),
            border: Border.all(
                color: isClick == false
                    ? myTheme.colorScheme.onSecondary
                    : myTheme.colorScheme.surface)),
        child: Center(
            child: Text(
          widget.groupes[widget.index],
          textAlign: TextAlign.center,
          style: TextStyle(
            color: isClick == false
                ? myTheme.colorScheme.onSecondary
                : myTheme.colorScheme.secondary,
          ),
        )),
      ),
    );
  }
}

class SwitchWithLabel extends StatefulWidget {
  const SwitchWithLabel({
    super.key,
    required this.enabled,
    required this.label,
  });

  final bool enabled;
  final String label;

  @override
  State<SwitchWithLabel> createState() => _SwitchWithLabelState();
}

class _SwitchWithLabelState extends State<SwitchWithLabel> {
  bool active = true;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.sizeOf(context).height * 0.8,
      height: 50,
      decoration: BoxDecoration(
          color: myTheme.colorScheme.secondary,
          borderRadius: BorderRadius.circular(10)),
      child: Padding(
        padding: const EdgeInsets.only(left: 10, right: 10),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              widget.label,
              style: const TextStyle(fontWeight: FontWeight.w500, fontSize: 16),
            ),
            Switch.adaptive(
              activeColor: myTheme.colorScheme.surface,
              value: active,
              onChanged: !widget.enabled
                  ? null
                  : (bool value) {
                      setState(() {
                        active = value;
                      });
                    },
            ),
          ],
        ),
      ),
    );
  }
}
