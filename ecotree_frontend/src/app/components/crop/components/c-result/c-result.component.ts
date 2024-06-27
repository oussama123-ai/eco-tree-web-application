import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CRecommendService} from "../../services/c-recommend.service";

@Component({
  selector: 'app-c-result',
  templateUrl: './c-result.component.html',
  styleUrls: ['./c-result.component.scss']
})
export class CResultComponent implements OnInit {

  predictedCrop: any;
  result:any;
  imgUrl:any;
  Title:any;
  Desc:any;


  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CResultComponent>,
              private recommendService:CRecommendService) { }

  ngOnInit(): void {
    this.predictedCrop = this.cropData.find( ({ Name }) => Name === this.data.final_prediction)
    console.log("meka tmai title eka")
    console.log(this.data)
    this.imgUrl = this.predictedCrop.children[0].imageUrl
    this.Title = this.predictedCrop.children[0].title
    this.Desc = this.predictedCrop.children[0].description
  }


  cropData = [
    {
      Name: 'apple',
      children: [{
        title:"Apple Crop",
        imageUrl:"https://i.ibb.co/frmwFz6/apple.jpg",
        description: "Normally the apples are ready for harvest from September-October except in the Nilgiris where the season is from April to July. The fruits mature within 130-150 days after the full bloom stage depending upon the variety grown. The ripening of fruits is associated with the change in colour, texture, quality and the development of the characteristic flavour. The fruits at the time of harvest should be uniform, firm and crisp. The colour of the skin at maturity ranges from yellow-red depending on the variety. However, the optimum time of harvest depends on fruit quality and intended period of storage. Due to the introduction of dwarf rootstock hand picking is recommended as it reduces bruising due to fruit fall during mechanical harvesting."
      }]
    },
    {
      Name: 'banana',
      children: [{
        title:"Bana Crop",
        imageUrl:"https://i.ibb.co/BB59BRy/banana.jpg",
        description: "Banana is harvested when the fruit is slightly or fully mature depending on the market preferences. For long distance transportation, harvesting is done at 75-80 % maturity.  The fruit is climacteric and can reach consumption stage after ripening operation. The planted crop gets ready for harvest within 12-15 months of planting and the main harvesting season of banana is from September to April.  Bunches attain maturity from 90-150 days after flowering depending upon variety, soil, weather condition and elevation. Bunch should be harvested when fingers of second hand from top are 3/4 rounded with the help of sharp sickle 30cm above the first hand. Harvest may be delayed upto 100-110 days after opening of the first hand. Harvested bunch should generally be collected in well padded tray or basket and brought to collection site. Bunches should be kept out of light after harvest, since this hastens ripening and softening. For local consumption, hands are often left on stalks and sold to retailers."
      }]
    },
    {
      Name: 'blackgram',
      children: [{
        title:"Blackgram Crop",
        imageUrl:"https://i.ibb.co/93Fp5tX/blackgram.jpg",
        description: "Urd should be harvested when 70-80 % pods matured and most of the pods turn black. Over maturity may result in shattering. Harvested crop should be dried on threshing floor for few days and then threshed. Threshing can be done either manually or by trampling under the feet of bullocks. The clean seeds should be sun dried for 3 - 4 days to bring their moisture content at 8-10% to safely store in appropriate bins."}
      ]
    },
    {
      Name: 'chickpea',
      children: [
        {
          title: "chickpea Crop",
          imageUrl: "https://i.ibb.co/CwyhwM7/chickpea.jpg",
          description: "The plant grows to 20–50 cm (8–20 in) high and has small, feathery leaves on either side of the stem. Chickpeas are a type of pulse, with one seedpod containing two or three peas. It has white flowers with blue, violet, or pink veins. Several varieties of chickpea are cultivated throughout the world. Desi chana closely resembles both seeds found on archaeological sites and the wild plant ancestor of domesticated chickpeas. Cicer reticulatum only grows in southeast Turkey, where chickpeas are believed to have originated."
        }      ]
    },
    {
      Name: 'coconut',
      children: [
        {
          title: "coconut Crop",
          imageUrl: "https://i.ibb.co/bzPN2G6/coconut.jpg",
          description: "Coconut palms are normally cultivated in hot and wet tropical climates. They need year round warmth and moisture to grow well and fruit. Coconut palms are hard to establish in dry climates, and cannot grow there without frequent irrigation; in drought conditions, the new leaves do not open well, and older leaves may become desiccated; fruit also tends to be shed."
        }       ]
    },
    {
      Name: 'coffee',
      children: [
        {
          title: "coffee Crop",
          imageUrl: "https://i.ibb.co/SNW1sDz/coffee.png",
          description: "The traditional method of planting coffee is to place 20 seeds in each hole at the beginning of the rainy season. This method loses about 50% of the seeds' potential, as about half fail to sprout. A more effective process of growing coffee, used in Brazil, is to raise seedlings in nurseries that are then planted outside at six to twelve months. Coffee is often intercropped with food crops, such as corn, beans, or rice during the first few years of cultivation as farmers become familiar with its requirements. Coffee plants grow within a defined area between the tropics of Cancer and Capricorn, termed the bean belt or coffee belt."
        }      ]
    },
    {
      Name: 'cotton',
      children: [
        {
          title: "cotton Crop",
          imageUrl: "https://i.ibb.co/TwN99t2/cotton.png",
          description: "Successful cultivation of cotton requires a long frost-free period, plenty of sunshine, and a moderate rainfall, usually from 60 to 120 cm (24 to 47 in)[citation needed]. Soils usually need to be fairly heavy, although the level of nutrients does not need to be exceptional. In general, these conditions are met within the seasonally dry tropics and subtropics in the Northern and Southern hemispheres, but a large proportion of the cotton grown today is cultivated in areas with less rainfall that obtain the water from irrigation. Production of the crop for a given year usually starts soon after harvesting the preceding autumn."
        }      ]
    },
    {
      Name: 'grapes',
      children: [
        {
          title: "grapes Crop",
          imageUrl: "https://i.ibb.co/FJgbdFm/grape.png",
          description: "Harvesting period for grapes, generally starts 30-70 days after fruit set, by the time berries change color from green to yellow (for white varieties), or red-purple (for red varieties). During this stage, we normally have an increase in sugars and a decrease in acids inside the fruits. In general, in the northern hemisphere, most varieties mature from August since November, while in the southern hemisphere from March to August."
        }      ]
    },
    {
      Name: 'jute',
      children: [
        {
          title: "jute Crop",
          imageUrl: "https://i.ibb.co/f9RhSxb/jute.jpg",
          description: "To grow jute, farmers scatter the seeds on cultivated soil. When the plants are about 15–20 cm tall, they are thinned out. About four months after planting, harvesting begins. The plants are usually harvested after they flower, before the flowers go to seed. The stalks are cut off close to the ground. The stalks are tied into bundles and soaked in water for about 20 days. This process softens the tissues and breaks the hard [pectin] bond between the bast and [Jute hurd] (inner woody fiber stick) and the process permits the fibres to be separated. The fibres are then stripped from the stalks in long strands and washed in clear, running water."
        }      ]
    },
    {
      Name: 'kidneybeans',
      children: [
        {
          title: "kidneybeans Crop",
          imageUrl: "https://i.ibb.co/q0nK3G0/kidneybeans.jpg",
          description: "Harvest when pods are full grown and ripe and there color turn to yellow. Also leaves turn yellow and majority of leaves drop. Depending upon variety use pods are ready to harvest 7-12 days after flowering. Overall crop is ready to harvest in 120-130 days. Do harvesting at right time as delay cause shattering. Keep harvested plant for three-four days in sun. After proper drying of crop, threshing is done with help of bullocks or with sticks."
        }      ]
    },
    {
      Name: 'lentil',
      children: [
        {
          title: "lentil Crop",
          imageUrl: "https://i.ibb.co/p4RccTf/lentil.jpg",
          description: "Harvest lentils when the plant begin to turn yellow and the pods become brown. Lentils are commonly used as dry beans or peas. For dried seeds, harvest pods when they have matured and hardened. Leave lentils unshelled until you are ready to use them. Dried lentils are ready for harvest 110 days after sowing. Lentil also can be used as snap beans; harvest these green about 70 to 80 days after sowing."
        }      ]
    },
    {
      Name: 'maize',
      children: [
        {
          title: "maize Crop",
          imageUrl: "https://i.ibb.co/C0XHWW4/maize.jpg",
          description: "The ears are removed from the standing plants and they are piled to open for twenty four hours and they are spread for drying in the sun. In this method stalks may be used as green fodder. The plants are cut and piled up in the shade and the cobs are removed after two or three days of harvesting. The dried plants are used for haymaking. Maize grown for fodder are harvested at the milk to early dough stage. The earlier harvested crop usually yields less and is poor in protein content. For silage making late dough stage is preferred."
        }      ]
    },
    {
      Name: 'mango',
      children: [
        {
          title: "mango Crop",
          imageUrl: "https://i.ibb.co/p24t7Mh/mango.jpg",
          description: "In western India, mango puts forth three growth flushes, the first are in the early spring (FebruaryMarch), the second during March-April and the third in the beginning of winter (October-November). In Bihar, the first growth noticed in early spring, the second in April-May and the third in July-August. In UP, only two flushes are produced, in March-April and July-August. In Punjab, as many as five flushes are produced from April-August. April and Mayflushes being found most heavy. In South India, mango usually gives two growth flushes, one in February-June and the other in October-November. In mango about 8-10 months old shoots under certain conditions cease to grow at least 4 months prior to blossoming. These shoots are capable of producing flower buds. Other shoots, which appear in subsequent flushes during late monsoon, do not come to flowering. These shoots flower during the next season after accumulating sufficient metabolites necessary for fruit-bud differentiation. Thus the fruits will be ready for harvest in April-May from a plant flowered during October-November."
        }      ]
    },
    {
      Name: 'mothbeans',
      children: [
        {
          title: "mothbeans Crop",
          imageUrl: "https://i.ibb.co/F8n0xRz/mothbean.jpg",
          description: "The moth bean plants generally take between 75 and 90 days from planting to harvesting. Harvesting moth bean is pretty difficult, and it’s the main drawback to this crop. You have to cut the plants with a sickle, because you can’t use mowers mainly due to the shape and density of the moth bean’s branches. Then after cutting, it is threshed and winnowed after being dried for approximately one week."
        }      ]
    },
    {
      Name: 'mungbean',
      children: [
        {
          title: "mungbean Crop",
          imageUrl: "https://i.ibb.co/V9gCk86/mungbean.jpg",
          description: "The olive-green mung beans should be harvested in the field after their pods have dried, typically in early to mid-September. Farmers use the same type of combine machinery used to harvest soybeans, but because mung beans are smaller than soybeans, they adjust the combine settings and screen size for the smaller bean size. Mung beans should be cleaned of debris before storage, and the beans should have no more than 12 percent moisture content for storage. Because harvested beans may be sprouted and eaten directly, stored beans should not be treated with fungicides, insecticides or bactericides."
        }      ]
    },
    {
      Name: 'muskmelon',
      children: [
        {
          title: "muskmelon Crop",
          imageUrl: "https://i.ibb.co/JHh6PZ4/muskmelon.jpg",
          description: "Many muskmelons and cantaloupes separate naturally from the stem when the melons are ripe, so they come away from the vine with only a gentle tug. Melons that do not “slip” often sound hollow when tapped, and the skin color takes on a yellowish cast. Wipe harvested melons clean and store indoors in a cool place, or in the refrigerator."
        }      ]
    },
    {
      Name: 'orange',
      children: [
        {
          title: "orange Crop",
          imageUrl: "https://i.ibb.co/3NDXDkz/orange.jpg",
          description: "Canopy-shaking mechanical harvesters are being used increasingly in Florida to harvest oranges. Current canopy shaker machines use a series of six-to-seven-foot-long tines to shake the tree canopy at a relatively constant stroke and frequency."
        }      ]
    },
    {
      Name: 'papaya',
      children: [
        {
          title: "papaya Crop",
          imageUrl: "https://i.ibb.co/NFVZmBW/papaya.jpg",
          description: "Fruits are harvested when they are of full size, light green in colour with tinge of yellow at apical end. On ripening, fruits of certain varieties turn yellow while some of them remain green. When the latex ceases to be milky and become watery, the fruits are suitable for harvesting. The economic life of papaya plant is only 3 to 4 years.  The yield varies widely according to variety, soil, climate and management of the orchard. The yield of 75-100 tonnes /ha. is obtained in a season from a papaya orchard depending on spacing and cultural practices."
        }      ]
    },
    {
      Name: 'pigeonpeas',
      children: [
        {
          title: "pigeonpeas Crop",
          imageUrl: "https://i.ibb.co/MCdFQV1/pigeonpeas.jpg",
          description: "With two third to three fourth pods at maturity judged by changing their colour to brown is the best harvesting time. The plants are usually cut with a sickle within 75 cm above the ground. Harvested plants should be left in the field for sun drying for 3-6 days depending on season. Threshing is done either by beating the pods with stick or using Pullman thresher. The proportion of seed to pods is generally 50 - 60%. The clean seeds should be sun dried for 3-4 days to bring their moisture content at 9-10% to safely store in appropriate bins."
        }      ]
    },
    {
      Name: 'pomegranate',
      children: [
        {
          title: "pomegranate Crop",
          imageUrl: "https://i.ibb.co/9qvNQCK/pomogranate.jpg",
          description: "Pomegranate being a non-climacteric fruit should be picked when fully ripe. Pomegranate plants take 4-5 years to come into bearing.  Harvesting of immature or over mature fruits affects the quality of the fruits. The fruits become ready for picking 120-130 days after fruit set. The calyx at the distal end of the fruit gets closed on maturity. At maturity, the fruits turn yellowish-red and get suppressed on sides."
        }      ]
    },
    {
      Name: 'rice',
      children: [
        {
          title: "rice Crop",
          imageUrl: "https://i.ibb.co/Vx91bWc/rice.jpg",
          description: "Harvesting is the process of collecting the mature rice crop from the field. Depending on the variety, a rice crop usually reaches maturity at around 105–150 days after crop establishment. Harvesting activities include cutting, stacking, handling, threshing, cleaning, and hauling. Good harvesting methods help maximize grain yield and minimize grain damage and deterioration."
        }      ]
    },
    {
      Name: 'watermelon',
      children: [
        {
          title: "watermelon Crop",
          imageUrl: "https://i.ibb.co/P5GKkBY/watermelon.jpg",
          description: "Watermelons will be ready for harvest 65 to 90 days after sowing depending on the variety. When watermelons are ready to harvest vine tendrils will begin to turn brown and die off. If the tendrils are green the melon is not ripe. A ripe watermelon will make a dull hollow sound when thumped. The soil-side of a watermelon will turn from white to pale yellow when the fruit is ready for harvest. Ripe melons will have a sweet aroma at the stem end. Limit water for a week in advance of the harvest to concentrate sweetness. Watermelons on a single plant will all be ready for harvest over a two week period."
        }      ]
    },
  ];




}
