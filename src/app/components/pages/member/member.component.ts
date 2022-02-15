import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

constructor(private ps: ProductService, private router: Router) { }
    members: any;
    ngOnInit(): void {
        this.ps.getProducts().subscribe((res) => {
            this.members = res.data;
        });

    }

    deleteMember(id: any) {
        if (confirm("Confirm deletion?")) {
            this.ps.deleteProduct(id).subscribe((res) => {
                console.log(res);
                this.router.navigateByUrl('/', { skipLocationChange: true })
                    .then(() => this.router.navigate([`/product`]));
            });
        }
    }

}

