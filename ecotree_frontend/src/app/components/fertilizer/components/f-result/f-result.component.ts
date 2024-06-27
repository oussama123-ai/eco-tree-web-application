import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CRecommendService} from "../../../crop/services/c-recommend.service";
import {FRecommendService} from "../../services/f-recommend.service";

@Component({
  selector: 'app-f-result',
  templateUrl: './f-result.component.html',
  styleUrls: ['./f-result.component.scss']
})
export class FResultComponent implements OnInit {

  predictedFert: any;
  result:any;
  imgUrl:any;
  Title:any;
  Desc:any;

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<FResultComponent>,
              private recommendService:FRecommendService) { }

  ngOnInit(): void {
    // console.log(this.data)
    this.predictedFert = this.FertData.find( ({ Name }) => Name === this.data.final_prediction)
    console.log(this.predictedFert.children[0].title)
    this.imgUrl = this.predictedFert.children[0].imageUrl
    this.Title = this.predictedFert.children[0].title
    this.Desc = this.predictedFert.children[0].description
  }

  FertData = [
    {
      Name: 'Urea',
      children: [{
        title:"Urea Fertilizer",
        imageUrl:"https://i.ibb.co/d7TPLmd/ferturea.jpg",
        description: "The agricultural industry widely uses urea, a white crystalline solid containing 46 percent nitrogen as an animal feed additive and fertilizer. Here, we'll focus on its role as a nitrogen fertilizer. In the past decade, urea has surpassed and nearly replaced ammonium nitrate as a fertilizer."
      }]
    },
    {
      Name: 'DAP',
      children: [{
        title:"DAP Fertilizer",
        imageUrl:"https://i.ibb.co/K6kbpbz/fertdap.jpg",
        description: "Di-ammonium Phosphate popularly known as DAP is a preferred fertilizer in India because it contains both Nitrogen and Phosphorus which are primary macro-nutrients and part of 18 essential plant nutrients. DAP is manufactured by reacting Ammonia with Phosphoric acid under controlled conditions in fertilizer plants."
      }]
    },
    {
      Name: '14-35-14',
      children: [{
        title:"14-35-14 Fertilizer",
        imageUrl:"https://i.ibb.co/Wv5KQYs/fert143514.png",
        description:"GROMOR 14-35-14 is a complex fertiliser containing all major nutrients viz. Nitrogen, Phosphorous and Potassium. The only complex having highest total nutrient content among the NPK complex fertilisers. (Total nutrients are 63%)."
      }]
    },
    {
      Name: '28-28',
      children: [{
        title:"28-28 Fertilizer",
        imageUrl:"https://i.ibb.co/pwm0ypF/fert2828.jpg",
        description:"This is the highest Nitrogen-containing Complex fertilizer with 28%. 19% of Nitrogen is in Urea form and 9% is in Ammonical form. Ammonium Phosphate is coated over Urea prill, due to which the losses from Urea will be minimized. 25.2% out of 28% Phosphate is in water-soluble form and easily available to plants."
      }]
    },
    {
      Name: '17-17-17',
      children: [{
        title:"17:17:17 Fertilizer",
        imageUrl:"https://i.ibb.co/wYjpfrC/fert171717.jpg",
        description:"N-P-K 17-17-17 Fertilizer is a complex fertilizer containing all three major plant nutrient ,Nitrogen,Phosphorous.Potassium in equal proportion .contain nitrogen ,phosphorous.potassium in 17:17:17 combination.it also helps regulate metabolic activities n-p-k 17-17-17 fertilizers are water soluble and can be taken up by the plant almost immediately an all purpose 17-17-17 fertilizer will provide the nutrients all plants need for healthy growth.All parts of plants need nitrogen for growth -the roots leaves,stems, flowers and fruits.Nitrogen gives plants their green color and is needed to form protein. A lack of nitrogen causes the lower leaves to turn yellow and the whole plant to turn pale green.Phosphorous is needed for cell division and help form roots flowers and fruits.Phosphorous deficiency causes stunted growth and poor flowering and fruiting.Potassium is important for regulation of water and nutrient movement in plant cells, there by promoting fruiting ,flowering, hardiness and promote the overall health of the plant by providing resistance to diseases. A Potassium shortage show up in various ways but stun growth and yellowish lower leaves.Usage Instruction:seeds and seedling stage use 1/4 tsp to 1 liter water.After 3-4 true leaves stage use 1/2 tsp to 1 liter water . blooming stage use 2/3 tsp n-p-k to 1 liter water."
      }]
    },
    {
      Name: '20-20',
      children: [{
        title:"20-20 Fertilizer",
        imageUrl:"https://i.ibb.co/kxT9qNB/fert2020.jpg",
        description:"GROMOR 20-20-0-13 is Ammonium Phosphate Sulphate containing Nitrogen and Phosphate in 1:1 ratio. It contains 20% Nitrogen. Of this 90% of Nitrogen is present in Ammonical form and the rest in Amide form. However, the entire Nitrogen is available to crops in Ammonical form. It contains 20% Phosphate, 85% of which is present in water-soluble form and is effectively and easily available to crops. It contains 15% Sulphur which is the 4th major nutrient after NPK. Sulphur response in many crops has been reported very encouraging and application of GROMOR 20-20-0-13 will supplement the Sulphur requirement of crops. It is granular in nature and can be easily applied by broadcasting, placement or drilling. Hygroscopic nature is much less and it is suitable to a variety of soils and crops. It is an excellent fertilizer for all crops grown in Sulphur deficient soils and is highly suitable for Sulphur loving crops such as Oilseeds."
      }]
    },
    {
      Name: '10-26-26',
      children: [{
        title:"10-26-26 Fertilizer",
        imageUrl:"https://i.ibb.co/jbDjGLM/fert102626.png",
        description:"GROMOR 10:26:26 is a complex fertilizer containing all the three major plant nutrients viz. Nitrogen, Phosphorous and Potassium. GROMOR 10:26:26 contains Phosphorous and Potassium in the ratio of 1:1, the highest among the NPK fertilizers. It contains 7% Nitrogen in the Ammonical form, 22% out of 26% phosphate in the water-soluble form and the entire 26% potash is available in the water-soluble form. GROMOR 10:26:26 is ideally suitable for crops which require high phosphate and potassium and this grade is very popular among the Sugarcane farmers of Maharashtra, Karnataka and Andhra Pradesh and Potato farmers of West Bengal & Uttar Pradesh. GROMOR 10:26:26 is also suitable for Fruit crops."
      }]
    },
  ]

}
