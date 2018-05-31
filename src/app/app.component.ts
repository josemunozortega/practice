import { Component, OnInit } from '@angular/core';

class Point {
  x: number;
  y: number;

  constructor(xNum: number, yNum: number) {
    this.x = xNum;
    this.y = yNum;
  }
  add(newPoint: Point){
    return newPoint = new Point(this.x + newPoint.x, + this.y + newPoint.y);
  }
}

class Point3D extends Point{
  // x: number;
  // y: number;
  z: number;

  constructor(xNum, yNum, zNum){
    super(xNum, yNum);
    this.z = zNum;
  }
    add(new3DPoint: Point3D){
      return new3DPoint = new Point3D(this.x + new3DPoint.x, + this.y + new3DPoint.y, this.z + new3DPoint.z);
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // const checking = new Point(4, 4);
    let p1 = new Point(4, 6);
    let p2 = new Point(2, 4);
    let p3 = p1.add(p2);
    console.log(p3);

    let p3D1 = new Point3D(5, 5, 44);
    let p3D2 = new Point3D(4, 7, 24);
    let p3D3 = p3D1.add(p3D2);
    console.log(p3D3);
  }
}
