//TODO заменить на firebse
import c_1 from "../../Resources/images/carousel_images/c_1.jpg";
import c_2 from "../../Resources/images/carousel_images/c_2.jpg";
import c_3 from "../../Resources/images/carousel_images/c_3.jpg";

const news = [
  {
    id: "1",
    title: "XXX",
    content:
      "NEW Phasellus lacinia lectus id nulla tristique, eu semper magna porttitor. Nullam vitae magna id elit scelerisque mollis. Suspendisse ultrices viverra bibendum. Sed vitae lacus sit amet metus congue dignissim in eget ligula. In luctus in dolor vitae consequat. Maecenas tempus nulla nec metus viverra, ut tempus justo ultricies. Sed auctor, justo quis luctus pulvinar, neque dui semper mi, vel laoreet lorem dui vitae nibh. Mauris sit amet enim id neque condimentum accumsan ut in purus. Pellentesque eu metus quis neque tincidunt viverra eget eget nunc. Vestibulum tincidunt pharetra ante facilisis vehicula. Quisque eu quam quis tellus sollicitudin tincidunt in id dui. Cras vel quam pellentesque, rhoncus est vitae, tempus lectus.",
    time: "2021/07/01 11:50",
    image: c_1,
  },
  {
    id: "2",
    title: "XXX",
    content:
      "Phasellus lacinia lectus id nulla tristique, eu semper magna porttitor. Nullam vitae magna id elit scelerisque mollis. Suspendisse ultrices viverra bibendum. Sed vitae lacus sit amet metus congue dignissim in eget ligula. In luctus in dolor vitae consequat. Maecenas tempus nulla nec metus viverra, ut tempus justo ultricies. Sed auctor, justo quis luctus pulvinar, neque dui semper mi, vel laoreet lorem dui vitae nibh. Mauris sit amet enim id neque condimentum accumsan ut in purus. Pellentesque eu metus quis neque tincidunt viverra eget eget nunc. Vestibulum tincidunt pharetra ante facilisis vehicula. Quisque eu quam quis tellus sollicitudin tincidunt in id dui. Cras vel quam pellentesque, rhoncus est vitae, tempus lectus.",
    time: "2021/07/01 11:50",
    image: c_2,
  },
  {
    id: "3",
    title: "XXX",
    content:
      "Nunc tincidunt augue ut luctus sodales. Mauris in pellentesque ipsum, et condimentum lacus. Duis elit neque, imperdiet ut nisl sit amet, posuere tristique justo. Sed consectetur risus odio, at fringilla turpis faucibus nec. Nulla elementum, mi eget pretium dignissim, turpis turpis blandit justo, sit amet tempus turpis diam a tellus. Nulla eget justo tellus. Cras tristique, turpis eget condimentum ullamcorper, nibh nunc scelerisque tortor, ac finibus lorem enim ut orci. Proin fermentum quis erat et pellentesque. Vestibulum porta euismod elit eget pharetra. In diam nibh, facilisis non nulla quis, pretium feugiat felis. Aenean nec neque erat. Sed malesuada ex et diam porttitor, a iaculis felis convallis.",
    time: "2021/06/22 15:50",
    image: c_3,
  },
  {
    id: "4",
    title: "XXX",
    content:
      "Mauris porttitor risus non enim cursus, nec consectetur tellus dignissim. Aenean sollicitudin, ante a pulvinar auctor, ligula sem imperdiet enim, vitae congue quam augue nec augue. Suspendisse id magna vel leo euismod mollis. Nunc vitae turpis velit. Pellentesque congue, eros vel eleifend aliquet, mi leo maximus urna, eu luctus neque leo eu sem. Suspendisse blandit ipsum at sem consectetur, ut lobortis nisl porta. Phasellus sit amet leo vel velit suscipit ultrices. Sed luctus sed neque quis elementum. Proin eget enim eu felis facilisis semper non vel erat. Duis urna nisi, dictum non blandit auctor, vehicula nec risus. Pellentesque ornare ultricies eros at tristique. Praesent accumsan magna vel risus viverra sodales.",
    time: "2021/06/03 8:40",
    image: c_1,
  },
  {
    id: "5",
    title: "XXX",
    content:
      "Maecenas vel tortor varius, laoreet massa et, tempor justo. Praesent fermentum lacinia tempus. Proin sodales, nulla et volutpat scelerisque, velit magna cursus risus, eu accumsan lectus velit id nunc. Nullam quis tempor enim. Ut pretium semper mauris, quis tristique orci ullamcorper nec. Nunc eget elementum orci, eu ornare nulla. Nullam neque lectus, elementum ut quam et, rhoncus euismod leo. Donec eget sodales augue, sit amet volutpat massa. Nam quam velit, sollicitudin non viverra et, tristique id odio. Proin faucibus lacinia risus, eu cursus diam. Vestibulum volutpat enim quis.",
    time: "2021/06/01 17:20",
    image: c_2,
  },
  {
    id: "6",
    title: "XXX",
    content:
      "Maecenas aliquet ultrices ante, et molestie purus laoreet eget. Praesent non nisl ut sem ullamcorper pretium ac non orci. Sed hendrerit est eleifend, commodo ipsum non, elementum libero. Phasellus porttitor lectus sapien. Sed at mi lectus. Cras a interdum leo, vitae interdum quam. Praesent semper scelerisque sem ut volutpat. Sed eu fermentum augue. Duis varius nunc vitae dapibus condimentum. Curabitur ligula urna, malesuada ac ex sed, aliquet consequat tellus. Morbi orci magna, tempor sit amet dui et, vulputate lobortis eros. In sit amet sodales tortor, nec ullamcorper tellus. Sed risus dolor, fringilla a viverra eget, imperdiet eget mauris. Nulla augue lectus, suscipit ac sollicitudin at, sollicitudin quis urna. Nullam ultrices urna id enim finibus, eget tincidunt orci ullamcorper. Pellentesque aliquet condimentum ligula, at pellentesque ante.",
    time: "2021/05/22 15:50",
    image: c_3,
  },
  {
    id: "7",
    title: "XXX",
    content:
      "Duis ultrices lacinia commodo. Duis id suscipit turpis. Mauris tristique maximus orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tempor molestie tortor vulputate facilisis. Vestibulum enim nisl, rutrum et vehicula sit amet, elementum in leo. Pellentesque ultrices purus eu velit cursus, id imperdiet massa imperdiet. Suspendisse pretium nec sapien a elementum. Pellentesque sed lectus vestibulum velit euismod blandit dapibus id augue. Phasellus porta venenatis tellus. Praesent vulputate erat eget pharetra dapibus. Morbi mollis, libero eu dapibus tristique, metus nibh finibus nisl, ut pharetra elit eros eu mauris. Proin et varius libero. Sed id viverra ex. Nulla viverra tortor non tellus efficitur, non sagittis arcu pharetra. Maecenas consequat, orci.",
    time: "2021/06/03 8:40",
    image: c_1,
  },
  {
    id: "8",
    title: "XXX",
    content:
      "Ut fringilla dolor urna, ac tincidunt augue euismod egestas. Aliquam sed feugiat augue, nec ultricies urna. Phasellus tincidunt ac libero ac tempus. Sed blandit nunc eu neque interdum vestibulum. Ut tempus est lorem, vel iaculis velit accumsan non. Sed molestie finibus mi, non vestibulum ipsum sagittis in. Nullam iaculis nibh nec massa lobortis faucibus. Suspendisse efficitur dui ac iaculis dictum. Nullam nunc mi, pretium eu lorem in, bibendum vehicula nunc. Fusce ligula odio, pretium id ultricies id, tempor sed felis. Curabitur condimentum, nisi et auctor luctus, libero ipsum vehicula lacus, eget pretium arcu est vel sem. Pellentesque tincidunt dui sit amet porttitor finibus. Nullam convallis sem at tortor fringilla mattis. Fusce faucibus blandit ligula, at congue arcu gravida at.",
    time: "2021/06/01 17:20",
    image: c_2,
  },
  {
    id: "9",
    title: "XXX",
    content:
      "In euismod nulla quis diam imperdiet tincidunt. Curabitur vitae varius lectus. Mauris non aliquam enim. Proin tempus fringilla tortor eu bibendum. Etiam eu est imperdiet, lobortis neque sed, semper augue. Fusce sit amet metus mauris. Duis at convallis orci. Vivamus aliquam, arcu non luctus maximus, augue nisi posuere turpis, nec vehicula lectus leo et urna. Proin sollicitudin accumsan augue fringilla eleifend. Sed commodo odio vitae dui consequat malesuada. Aliquam pulvinar leo a enim tristique scelerisque. Etiam tempus in dui ac pulvinar. Fusce blandit diam nec consequat tincidunt. Fusce ac aliquet erat. Sed rutrum tincidunt posuere. Vivamus imperdiet pellentesque mi, sit amet sodales velit elementum quis. Etiam sodales aliquet volutpat. Mauris sed tempus dui, in interdum nisi. Pellentesque elementum lobortis mi. Suspendisse.",
    time: "2021/05/22 15:50",
    image: c_3,
  },
];

export default news;
