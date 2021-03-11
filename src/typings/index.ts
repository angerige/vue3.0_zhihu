/**
 * Column
 */
interface ColumnProps {
	id: number;
	title: string;
	avatar?: string;
	description: string;
}

interface PostProps {
	id: number;
	title: string;
	content: string;
	image?: string;
	createAll: string;
	columnId: number;
}

export { ColumnProps, PostProps };
