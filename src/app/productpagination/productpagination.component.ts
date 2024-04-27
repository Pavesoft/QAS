import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { MasterService } from '../service/master.service';
import { Employee } from '../Employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-productpagination',
  templateUrl: './productpagination.component.html',
  styleUrls: ['./productpagination.component.scss']
})
export class ProductpaginationComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'category_name', 'report_type', 'report', 'action'];
  dataSource:any;
  empdata:any;

 @ViewChild(MatPaginator) paginator !:MatPaginator;
 @ViewChild(MatSort) sort !:MatSort;

  constructor(private service:MasterService){

  }
  ngOnInit(): void {
    this.GetAll();
  }
  GetAll(){
    this.service.GetEmployee().subscribe(result => {
this.empdata=result;
this.dataSource= new MatTableDataSource<Employee>(this.empdata)
this.dataSource.paginator=this.paginator;
this.dataSource.sort=this.sort;
    });
  }
Filterchange(event:Event){
  const filvalue=(event.target as HTMLInputElement).value;
  this.dataSource.filter=filvalue;
}
getrow(row:any){
  //console.log(row);
}
FunctionEdit(row:any){
  //console.log(row);
}
  // constructor(private auth: AuthService){}

  // ngOnInit(){
  //   this.getData()
  // }


  // p:any;
  // data:any=[];
  // getData() {
  //   this.auth.getData().subscribe(
  //     (data) => {
  //       this.data = data;
  //       // //console.log(this.data)
  //     }
  //   );
  // }
}


