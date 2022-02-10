import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsdirectory = path.join(process.cwd(), 'posts');

export function getSortedPostData() {
	const filenames = fs.readdirSync(postsdirectory);
	const allpost = filenames.map((filename) => {
		const id = filename.replace(/\.md$/, '');
		const fullpath = path.join(postsdirectory, filename);
		const content = fs.readFileSync(fullpath, 'utf8');
		const matterresult = matter(content);
		return {
			id,
			...matterresult.data,
		};
	});

	return allpost.sort(({ date: a }, { date: b }) => {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		} else {
			return 0;
		}
	});
}

export function getAllPostIds() {
	const filenames = fs.readdirSync(postsdirectory);
	return filenames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		};
	});
}

export async function getPostData(id) {
	const fullpath = path.join(postsdirectory, `${id}.md`);
	const contents = fs.readFileSync(fullpath, 'utf8');
	const matterresult = matter(contents);

	const processed = await remark().use(html).process(matterresult.content);
	const body = processed.toString();

	return {
		id,
		body,
		...matterresult.data,
	};
}
