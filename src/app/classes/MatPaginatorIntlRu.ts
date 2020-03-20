import { MatPaginatorIntl } from '@angular/material/paginator';

export class MatPaginatorIntlRu extends MatPaginatorIntl {
  public firstPageLabel = "Первая страница";
  public itemsPerPageLabel = "Показывать по";
  public lastPageLabel = "Последняя страница";
  public nextPageLabel = "Следующая страница";
  public previousPageLabel = "Предыдущая страница";

  public getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return '0 из ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} из ${length}`;
  }
}
