import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eager2',
  templateUrl: './eager2.component.html',
  styleUrls: ['./eager2.component.scss']
})
export class Eager2Component {
qData1:string|null = ""
qData2:string|null=null
qData3:string|null=null

constructor(private activatedRoute : ActivatedRoute){
  this.qData1 = this.activatedRoute.snapshot.queryParamMap.get('qdData1')
  this.qData2 = this.activatedRoute.snapshot.queryParamMap.get('qdData2')
  this.qData3 = this.activatedRoute.snapshot.queryParamMap.get('qdData3')
}


}
