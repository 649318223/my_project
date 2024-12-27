declare type TableTypes = {
  tableData: any[];
  tableColumn: {
    label: string;
    prop: string;
    width?: string;
    type?: string;
    slotName?: string;
  }[];
  border?: boolean;
  page: {
    pageNum: number;
    pageSize: number;
    total: number;
  };
};
