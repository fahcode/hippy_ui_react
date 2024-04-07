import { PropsWithChildren } from 'react';
import { ViewProps, ViewStyle } from '@hippy/react';
import { ConsumerValue } from '../../provider/PropsType';
import {
  TableProps,
  TableCellProps,
  TableCellGetStyleFn,
  TableBorderStyle,
  TableHeaderCellGetStyleFn,
  TableRowGetStyleFn,
} from '../../components/Table/PropsType';

/** 主题配置：表格 */
export interface ThemeConfigTable {
  tableStyle: ViewStyle;
  tableRowStyleFn: TableRowGetStyleFn;
  tableHeaderStyle: ViewStyle;
  tableHeaderCellStyleFn: TableHeaderCellGetStyleFn;
  tableCellStyleFn: TableCellGetStyleFn;
  tableBorderStyle: TableBorderStyle;
}

/** 自定义渲染：表格 */
export interface TableRenderParams {
  consumerValue: ConsumerValue;
  props: PropsWithChildren<TableProps>;
}
export interface TableRenderInfo {
  wrapProps: ViewProps;
  borderStyle: TableBorderStyle;
  headerStyle: ViewStyle;
  headerCellStyleFn: TableHeaderCellGetStyleFn;
  cellStyleFn: TableCellGetStyleFn;
  rowStyleFn: TableRowGetStyleFn;
}
export type RenderInfoTable = (params: TableRenderParams & { defaultRenderInfo: TableRenderInfo }) => TableRenderInfo;

/** 自定义渲染：表格单元格 */
export interface TableCellRenderParams {
  consumerValue: ConsumerValue;
  props: PropsWithChildren<TableCellProps>;
}
export interface TableCellRenderInfo {
  wrapProps: ViewProps;
}
export type RenderInfoTableCell = (
  params: TableCellRenderParams & { defaultRenderInfo: TableCellRenderInfo },
) => TableRenderInfo;
