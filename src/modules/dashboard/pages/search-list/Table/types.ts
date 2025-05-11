import type { JSX, ReactNode } from 'react';

type Renderable<T extends object> = (record: DataSource<T>) => ReactNode;
type Keyable = { key: string; image: string; title: string };

export interface TableProps<T extends object> extends GeneralTableProps {
	// table
	dataSource: DataSource<T>[];
	columns: ColumnType<T>[];
	expandedRowRender?: (data: DataSource<T>) => JSX.Element;
}

export type ColumnType<T extends object> = {
	key: string;
	title: string;
	display?: boolean;
	dataIndex?: Exclude<keyof T, 'key'>;
	align?: 'left' | 'center' | 'right';
	render?: Renderable<T>;
};

export type DataSource<T extends object = object> = Keyable & T;

interface GeneralTableProps {
	totalRecord: number;
	isLoading?: boolean;
	// toolbar
	toolbarTitle?: string;
	handleSearch?: (value: string) => void;
	searchPlaceholder?: string;
	// pagination
	page?: number;
	rowsPerPage?: number;
	onChangePage?: (value: string) => void;
	onChangeRowPerPage?: (value: string) => void;
}

export interface ToolbarContextType {
	toolbarTitle?: string;
	handleSearch?: (value: string) => void;
	searchPlaceholder?: string;
}
