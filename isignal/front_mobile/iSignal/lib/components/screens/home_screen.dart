part of "../cores/cores.dart";

class HomeSreen extends StatefulWidget {
  const HomeSreen({super.key});

  @override
  State<HomeSreen> createState() => _HomeSreenState();
}

class _HomeSreenState extends State<HomeSreen> {
  int currentTab = 1;

  void _onItemTapped(int index) {
    setState(() {
      currentTab = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding:
              const EdgeInsets.only(top: 50, left: 20, right: 20, bottom: 20),
          child: Column(
            children: [
              30.verticalSpace,
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    const CardCustomVideo(
                      height: 280,
                      percent: 0.42,
                      isVideoCard:true
                    ),
                    20.horizontalSpace,
                    const CardCustomVideo(
                      height: 280,
                      percent: 0.42,
                      isVideoCard:true
                    ),
                  ],
                ),
              ),
              20.verticalSpace,
              Container(
                padding: EdgeInsets.all(8),
                width: double.infinity,
                decoration: BoxDecoration(
                    // color: myTheme.colorScheme.surfaceVariant,
                    borderRadius: BorderRadius.circular(20)),
                child: const Wrap(
                  runAlignment: WrapAlignment.spaceAround,
                  alignment: WrapAlignment.spaceAround,
                  runSpacing: 10,
                  spacing: 2,
                  children: [
                    CardCustomSignal(
                      height: 80,
                      percent: 0.3,
                      image: "assets/images/logo/app-logo.png",
                      text: "Fire",
                    ),
                    CardCustomSignal(
                      height: 80,
                      percent: 0.3,
                      image: "assets/images/logo/pp.jpg",
                      text: "Ambulance",
                    ),
                    CardCustomSignal(
                      height: 80,
                      percent: 0.3,
                      image: "assets/images/logo/pp.jpg",
                      text: "Gendarme",
                    ),
                    CardCustomSignal(
                      height: 80,
                      percent: 0.3,
                      image: "assets/images/logo/pp.jpg",
                      text: "Police",
                    ),
                  ],
                ),
              ),
              20.verticalSpace,
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    const CardCustomVideo(
                      height: 300,
                      percent: 0.70,
                    ),
                    20.horizontalSpace,
                    const CardCustomVideo(
                      height: 300,
                      percent: 0.70,
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
            color: myTheme.colorScheme.secondary,
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(20),
              topRight: Radius.circular(20),
            )),
        child: BottomAppBar(
          shape: CircularNotchedRectangle(),
          height: 75,
          color: Colors.transparent,
          surfaceTintColor: Colors.transparent,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              MaterialButton(
                onPressed: () {
                  setState(() {
                    currentTab = 0;
                  });
                },
                minWidth: 40,
                child: Column(
                  children: [
                    Container(
                      height: 2,
                      width: 40,
                      color: currentTab == 0
                          ? myTheme.canvasColor
                          : Colors.transparent,
                    ),
                    1.verticalSpace,
                    Icon(
                      Icons.star,
                      color:
                          currentTab == 0 ? myTheme.canvasColor : Colors.black,
                    ),
                    Text(
                      "Home",
                      style: TextStyle(
                        color: currentTab == 0
                            ? myTheme.canvasColor
                            : Colors.black,
                      ),
                    )
                  ],
                ),
              ),
              MaterialButton(
                onPressed: () {
                  setState(() {
                    currentTab = 1;
                  });
                },
                minWidth: 40,
                child: Column(
                  children: [
                    Container(
                      height: 2,
                      width: 40,
                      color: currentTab == 1
                          ? myTheme.canvasColor
                          : Colors.transparent,
                    ),
                    1.verticalSpace,
                    Icon(
                      Icons.chat,
                      color:
                          currentTab == 1 ? myTheme.canvasColor : Colors.black,
                    ),
                    Text(
                      "Chat",
                      style: TextStyle(
                        color: currentTab == 1
                            ? myTheme.canvasColor
                            : Colors.black,
                      ),
                    )
                  ],
                ),
              ),
              MaterialButton(
                onPressed: () {
                  setState(() {
                    currentTab = 2;
                  });
                },
                minWidth: 40,
                child: Column(
                  children: [
                    Container(
                      height: 2,
                      width: 40,
                      color: currentTab == 2
                          ? myTheme.canvasColor
                          : Colors.transparent,
                    ),
                    1.verticalSpace,
                    Icon(
                      Icons.event_note_rounded,
                      color:
                          currentTab == 2 ? myTheme.canvasColor : Colors.black,
                    ),
                    Text(
                      "Notes",
                      style: TextStyle(
                        color: currentTab == 2
                            ? myTheme.canvasColor
                            : Colors.black,
                      ),
                    )
                  ],
                ),
              ),
              MaterialButton(
                onPressed: () {
                  setState(() {
                    currentTab = 3;
                  });
                },
                minWidth: 40,
                child: Column(
                  children: [
                    Container(
                      height: 2,
                      width: 40,
                      color: currentTab == 3
                          ? myTheme.canvasColor
                          : Colors.transparent,
                    ),
                    1.verticalSpace,
                    Icon(
                      Icons.person,
                      color:
                          currentTab == 3 ? myTheme.canvasColor : Colors.black,
                    ),
                    Text(
                      "Profile",
                      style: TextStyle(
                        color: currentTab == 3
                            ? myTheme.canvasColor
                            : Colors.black,
                      ),
                    )
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

