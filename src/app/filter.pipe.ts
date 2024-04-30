import { Pipe, PipeTransform } from "@angular/core";
import { debounce } from "lodash"; // Import debounce from lodash

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  debouncedTransform: any = debounce(this.transformInternal, 300); // Debounced transform method

  transform(mappedReports: any[], searchText: string): any[] {
    return this.debouncedTransform(mappedReports, searchText); // Call debounced transform
  }

  private transformInternal(mappedReports: any[], searchText: string): any[] {
    if (!mappedReports) return [];
    if (!searchText) return mappedReports;
    searchText = searchText.toLowerCase();

    return mappedReports.filter((item) => {
      // Customize this condition based on how you want to filter the data
      return (
        item.report.toLowerCase().includes(searchText) ||
        item.categoryName.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.reportType.toLowerCase().includes(searchText) ||
        item.author.toLowerCase().includes(searchText)
      );
    });
  }
}
