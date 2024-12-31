import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from 'src/service/getdata.service';

@Component({
  selector: 'app-productviewpage',
  templateUrl: './productviewpage.component.html',
  styleUrls: ['./productviewpage.component.css']
})
export class ProductviewpageComponent implements OnInit {
  @ViewChild('lens', { static: false }) lens!: ElementRef;

  imageId: any;
  productResponse: any;

  constructor(private getData: GetdataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageId = params['id'];
    });
    this.productView();
  }



  showLens(event: MouseEvent): void {
    const lens = this.lens.nativeElement;
    lens.style.display = 'block';
    this.updateLens(event);
  }

  hideLens(): void {
    const lens = this.lens.nativeElement;
    lens.style.display = 'none';
  }

  moveLens(event: MouseEvent): void {
    this.updateLens(event);
  }

  updateLens(event: MouseEvent): void {
    const lens = this.lens.nativeElement;
    const img = (event.target as HTMLImageElement);
    const rect = img.getBoundingClientRect();

    const lensWidth = lens.offsetWidth;
    const lensHeight = lens.offsetHeight;

    const x = event.clientX - rect.left - lensWidth / 2;
    const y = event.clientY - rect.top - lensHeight / 2;

    // Restrict lens within the image boundaries
    lens.style.left = Math.max(0, Math.min(x, rect.width - lensWidth)) + 'px';
    lens.style.top = Math.max(0, Math.min(y, rect.height - lensHeight)) + 'px';
    lens.style.backgroundImage = `url(${img.src})`;
    lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;
  }

  productView() {
    const req = {
      "dataCode": "GET_PRODUCT_DETAILS_BY_PRODUCTID",
      "placeholderKeyValueMap": {
        "id": this.imageId,
      }
    };
    this.getData.commonData(req).subscribe(res => {
      if (res.statusCode == 0) {
        this.productResponse = res.responseContent
        console.log(res.responseContent);
      }
      else {
        this.productResponse = [];
      }
    })
  }

  nextView(number: any) {
    console.log(number);
    this.router.navigate(['/productViewPage/' + number]);
  }



}
