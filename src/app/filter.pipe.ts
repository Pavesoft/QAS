import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    console.log("search text", searchText);
    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      // Customize this condition based on how you want to filter the data
      return (
        item.report.toLowerCase().includes(searchText) ||
        item.categoryName.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.reportType.toLowerCase().includes(searchText) ||
        item.author.toLowerCase().includes(searchText)
        // item.author.some((author: any) =>
        //   author.toLowerCase().includes(searchText)
        // )
      );
    });
  }
}
